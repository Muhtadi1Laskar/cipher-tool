/* eslint-disable react/prop-types */
export default function DownlaodButton({ content }) {
    function downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      return (
        <button
        onClick={() => downloadFile('result.txt', content)}
        className="btn btn-primary"
        style={{
          width: "9rem"
        }}
        >
            Download
        </button>
      )
  }
  
 