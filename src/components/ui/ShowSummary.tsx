import { ReactNode, useCallback, useMemo, useState } from "react";
import 'animate.css';
import { DataResponse } from "../../types";
import { Button, Text, Title } from "../common";
import { useAudioDownloader } from "../../hooks/useAudioDownloader";
import { Alert } from "./Alert";

const Container = ({children}: {children: ReactNode}) => (
  <section
    className="flex flex-col bg-gray-50 flex-grow w-full gap-y-4 p-4 shadow-md rounded-md animate__animated animate__fadeIn"
  >
    {children}
  </section>
)

export const ShowSummary = ({ data }: {data: DataResponse}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const { loading, error, isDownloaded, downloadAudio, resetError } = useAudioDownloader();

  const handleDetailsToggle = useCallback(() => setIsDetailsOpen((prev) => !prev),[]);

  const handleDownload = useCallback(() => {
    downloadAudio(data.audio_download_link, data.title, resetError);
  }, [data.audio_download_link, data.title, downloadAudio, resetError]);

  const renderDetailsButton = useMemo(() => {
    if (isDownloaded || isDetailsOpen) return null;
    return (
      <Button
        onClick={handleDownload}
        text="Download audio"
        loadingText="Downloading ..."
        loading={loading}
        type="button"
      />
    );
  }, [isDownloaded, isDetailsOpen, loading, handleDownload]);

  return (
    <Container>
      
      {/* Thumbnail Image */}
      <div className="mb-4">
        <img
          src={data.thumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Error Alert */}
      {error && <Alert message={error} />}

      {/* Video Information */}
      <Title className="text-start">{data.title}</Title>
      <Text className="text-start" weight="semibold">
        <span className="font-normal">Posted by: </span>
        {data.channel}
      </Text>

      {/* Summary */}
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.summary }}
      />

      {/* Original Transcript and Download */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <details 
          className="w-full md:w-auto cursor-pointer py-4" 
          onToggle={handleDetailsToggle}
        >
          <summary 
            className="text-md md:text-lg lg:text-xl font-medium text-cyan-500 hover:text-cyan-600 transition-all duration-300 mb-2 tracking-wide leading-tight">
            Show original text
          </summary>
          <Text>{data.transcription}</Text>
        </details>
        {renderDetailsButton}
      </div>

    </Container>
  );
};
