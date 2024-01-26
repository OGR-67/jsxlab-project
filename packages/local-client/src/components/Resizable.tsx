import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { useEffect, useState } from "react";
import "./Resizable.css";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const constants = {
  MAX_WIDTH_MULTIPLIER: 0.75,
  MIN_WIDTH_MULTIPLIER: 0.2,
  MAX_HEIGHT_MULTIPLIER: 0.95,
  DEFAULT_HEIGHT: 300,
  MIN_HEIGHT: 45, // 45 for 2 lines height without in-editor scroll
  DEBOUNCING_TIMEOUT: 80,
};

const Resizable = ({ direction, children }: ResizableProps) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(
    window.innerWidth * constants.MAX_WIDTH_MULTIPLIER,
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
        if (window.innerWidth * constants.MAX_WIDTH_MULTIPLIER < width) {
          setWidth(window.innerWidth * constants.MAX_WIDTH_MULTIPLIER);
        }
      }, constants.DEBOUNCING_TIMEOUT);
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [width]);

  let props: ResizableBoxProps = {
    minConstraints: [Infinity, constants.MIN_HEIGHT],
    maxConstraints: [Infinity, innerHeight * constants.MAX_HEIGHT_MULTIPLIER],
    height: constants.DEFAULT_HEIGHT,
    width: Infinity,
    resizeHandles: ["s"],
  };

  if (direction === "horizontal") {
    props = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * constants.MAX_WIDTH_MULTIPLIER, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
      onResizeStop: (_, data) => setWidth(data.size.width),
    };
  }

  return <ResizableBox {...props}>{children}</ResizableBox>;
};

export default Resizable;
