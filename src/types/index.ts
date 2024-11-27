import { ReactNode } from "react";

export type BaseProps = {
    children: ReactNode;
};

export type FormValues = {
    url: string;
}

export type InitialState = {
    loading: boolean;
    data: null | DataResponse;
    error: null | string;
}  

export type DataResponse = {
    title: string;
    channel: string;
    thumbnail: string;
    transcription: string;
    summary: string;
    audio_download_link: string;
}