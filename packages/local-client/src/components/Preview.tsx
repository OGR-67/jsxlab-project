import { useEffect, useRef } from "react";
import "./Preview.css";

interface PreviewProps {
  code: string;
  error: string;
}

const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>html { background-color: whitesmoke; }</style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const handleError = (err) => {
          const root = document.querySelector("#root")
          root.innerHTML = "<div style='color: red;'><h4>Runtime Error</h4>" + err + "</div>"
          console.error(err);
      };

      window.addEventListener("error", (event) => {
        event.preventDefault();
        handleError(event.error);
      });

      window.addEventListener("message", (event) => {
        try {
          const error = event.data.error;
          if (!error) {
            eval(event.data.code);
          } else {
            handleError(event.data.error)
          }
        } catch (err) {
          handleError(err);
        }
      }, false);
    </script>
  </body>
  </html>
`;

const Preview = ({ code, error }: PreviewProps) => {
  const iframe = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframe.current) {
      iframe.current.srcdoc = html;
      setTimeout(() => {
        iframe.current?.contentWindow?.postMessage({ code, error }, "*");
      }, 50);
    }
  }, [code, error]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        srcDoc={html}
        sandbox="allow-scripts"
        title="preview"
      />
    </div>
  );
};

export default Preview;
