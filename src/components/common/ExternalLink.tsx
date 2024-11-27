import { BaseProps } from "../../types";

type FooterLinkProps = BaseProps & {
    url: string;
}

export const ExternalLink = ({ url, children }: FooterLinkProps) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-600 font-semibold inline-flex items-center space-x-2 transition duration-300"
    >
        {children}
    </a>
);
  