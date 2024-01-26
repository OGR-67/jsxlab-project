import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { useEffect, useState } from "react";
import "./Resizable.css";

interface ResizableProps {
	direction: "horizontal" | "vertical";
	height?: number;
	children: React.ReactNode;
}

const constants = {
	MAX_WIDTH_MULTIPLIER: 0.75,
	MIN_WIDTH_MULTIPLIER: 0.2,
	MAX_HEIGHT_MULTIPLIER: 0.95,
	MIN_HEIGHT: 53, // to fit the format button
	DEBOUNCING_TIMEOUT: 80,
};

const Resizable = ({ direction, children, height }: ResizableProps) => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [innerHeight, setInnerHeight] = useState(height || window.innerHeight);
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
				setInnerHeight(height || window.innerHeight);
				if (window.innerWidth * constants.MAX_WIDTH_MULTIPLIER < width) {
					setWidth(window.innerWidth * constants.MAX_WIDTH_MULTIPLIER);
				}
			}, constants.DEBOUNCING_TIMEOUT);
		};
		window.addEventListener("resize", listener);

		return () => {
			window.removeEventListener("resize", listener);
		};
	}, [width, height]);

	let props: ResizableBoxProps = {
		minConstraints: [Infinity, constants.MIN_HEIGHT],
		maxConstraints: [
			Infinity,
			innerHeight * constants.MAX_HEIGHT_MULTIPLIER + 300,
		],
		height: height || innerHeight,
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
