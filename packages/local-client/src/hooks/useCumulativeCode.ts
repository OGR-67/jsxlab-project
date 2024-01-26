import { RootState } from "@/store";
import { useSelector } from "react-redux";

/** This hooks is use to retrieve an array of previous cells code and the
 * current one to variables can be pass through.
 * It also defines the show() function which helps to show values on the
 * preview window.
 */
export const useCumulativeCode = (cellId: string) => {
  return useSelector((state: RootState) => {
    const { order, data } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    // The show helper function helps to show values on the preview window
    // React is imported by default so the preview window gives no error if
    // import is missing. No name collision due to _. eslint bundler is tweaked
    // to use _React and _ReactDOM instead of React and ReactDOM.
    const showFunc = ` 
        import _React from "react";
        import _ReactDOM from "react-dom";

        show = (value) => {
          const root = document.querySelector("#root"); 
          if (typeof value === "object") {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root)
            } else {
            root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        }

      `;
    // To avoid showing the result of a show() call of a previous cell,
    // show() is redeclared on each previous cell to do nothing.
    const showFuncNoop = "var show = () => {}";

    const cumulativeCode: string[] = [];
    for (const c of orderedCells) {
      const isCurrent = c.id === cellId;
      if (c.type === "code") {
        cumulativeCode.push(showFuncNoop);
        isCurrent && cumulativeCode.push(showFunc);
        cumulativeCode.push(c.content);
      }
      if (isCurrent) break;
    }
    return cumulativeCode.join("\n");
  });
};
