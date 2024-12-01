import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function DisplayComponent({ message }) {
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
        <div id="result-section" className="mt-3 text-success">
            <div id="result-component" className="d-flex align-items-center">
                <span id="result-span" className="me-2">{message}</span>
                <button 
                    onClick={handleCopy} 
                    id="cliboardButton"
                    className="btn btn-outline-secondary btn-sm"
                    title="Copy to Clipboard"
                >
                    📋
                </button>
            </div>
            {copyStatus && <small className="text-muted mt-1">{copyStatus}</small>}
        </div>
    );
}
