import { useState } from "react";
import DownlaodButton from "./DownloadComponent";

// eslint-disable-next-line react/prop-types
export default function DisplayComponent({ fileType, message }) {
    const [copyStatus, setCopyStatus] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(message).then(() => {
            setCopyStatus("Copied!");
            setTimeout(() => setCopyStatus(""), 500);
        }).catch(() => {
            setCopyStatus("Failed to copy.");
        });
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center"
        }}>
            <div id="result-section" className="mt-3 text-success">
                <div id="result-component" className="d-flex align-items-center">
                    <span id="result-span" className="me-2">{message}</span>
                </div>
                {copyStatus && <small className="text-muted mt-1">{copyStatus}</small>}
            </div>
            <div id="result-button">
                <DownlaodButton fileName={fileType} content={message} />
                <button
                    onClick={handleCopy}
                    id="cliboardButton"
                    className="btn btn-primary"
                    title="Copy to Clipboard"
                    style={{
                        width: "9rem"
                    }}
                >
                    Copy 📋
                </button>
            </div>
        </div>
    );
}
