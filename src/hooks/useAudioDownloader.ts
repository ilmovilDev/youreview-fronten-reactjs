import { useState, useRef, useEffect } from "react";
import { apiClient } from "../services";

export const useAudioDownloader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (error) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => setError(null), 4000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [error]);

  const downloadAudio = async (link: string, title: string, onError: (message: string) => void) => {
    try {
      setLoading(true);
      const response = await apiClient(link, { responseType: "blob" });
      const blob = response.data;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${title.replace(/\s+/g, "_").toLowerCase()}.mp3`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setIsDownloaded(true);
    } catch {
      onError("There was an error while trying to download the audio.");
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {
    // Props
    loading,
    error,
    isDownloaded,
    
    // Methods
    setError,
    downloadAudio,
    resetError,
  };
};
