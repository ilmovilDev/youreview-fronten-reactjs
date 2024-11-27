import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form"
import 'animate.css';
import { Alert, EmptyStateMessage, FlexContainer, Footer, Form, Header, Hero, Loading, ShowSummary } from './components'
import { useGenerateVideoSummary } from "./hooks";
import { FormValues } from "./types"
import './App.css'

const Container = ({children}: {children: ReactNode}) => (
  <main
    className="container flex flex-col mx-auto max-w-4xl px-4 min-h-screen animate__animated animate__fadeIn"
  >
    {children}
  </main>
)

function App() {

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { state, setState, handleFormSubmit } = useGenerateVideoSummary();
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    if (state.data) {
      setFormVisible(false);
      reset();
    }
  }, [state.data, reset]);

  const handleReset = useCallback(() => {
    setState({ loading: false, data: null, error: null });
    setFormVisible(true);
    reset();
  }, [setState, reset]);

  const shouldShowHero = useMemo(() => !state.data, [state.data]);

  const renderContent = useCallback(() => {
    if (state.loading) return <Loading />;
    if (state.error) return <Alert message={state.error} />;
    if (state.data) return <ShowSummary data={state.data} />;
    return <EmptyStateMessage />;
  }, [state]);

  return (
    <Container>
      
      <Header onClick={handleReset}/>

      <FlexContainer
        as="section"
        direction="col"
        className="gap-y-6 py-6 flex-grow"
      >
        {shouldShowHero && <Hero />}
        {formVisible && (
          <Form
            id="url"
            label="Enter the video URL"
            placeholder="https://www.youtube.com/watch?v=example"
            register={register}
            handleSubmit={handleSubmit(handleFormSubmit)}
            loading={state.loading}
          />
        )}
        {renderContent()}
      </FlexContainer>

      <Footer />

    </Container>
  )
}

export default App
