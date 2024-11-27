import { useCallback, useEffect, useRef, useState } from "react";
import { FormValues, InitialState } from "../types";
import { apiClient } from "../services";

export function useGenerateVideoSummary() {
  const [state, setState] = useState<InitialState>({
    loading: false,
    data: null,
    error: null,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (state.error) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setState(prev => ({ ...prev, error: null }));
      }, 4000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [state.error]);
  
  const handleFormSubmit = useCallback(async ({ url }: FormValues) => {
    setState({ loading: true, data: null, error: null });
    try {
      const response = await apiClient.post("/generate_video_summary", { url });
      setState({ loading: false, data: response.data, error: null });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again.";
      setState({ loading: false, data: null, error: errorMessage });
    }
  }, []);

  return { 
    // Props
    state, 

    // Methods
    setState,
    handleFormSubmit,
  };
  
}
