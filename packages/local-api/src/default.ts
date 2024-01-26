export default `/*[markdown:vgLtj]*/
/*# What is JSXLab?
JSXLab is the JavaScript and React equivalent of Jupyter notebooks.

## Key Features

### Code Cell
A code cell serves as a sandbox to test JavaScript scripts. The code is bundled and executed as you type. To visualize a value, simply use the \`show()\` function.
Most frontend libraries should work seamlessly; just import them like this:  
\`import axios from "axios"\`  
Subsequent cells are aware of variables declared in previous ones, allowing you to organize your logic as if they were in separate files.

### Markdown
JSXLab includes a fully-featured Markdown editor. Just click on a Markdown preview to open the editor.

### Diagram 
An embedded version of diagram.io is integrated, making it easy to visualize your ideas and complex logic.

### Persistence
The ultimate goal of this project is to enable you to create notebooks. You can save your work at any time, and it will be stored in a local file that can even be executed if you have code cells.

## Final Notes
This project has helped me understand the logic of React and Redux, and I hope it will be helpful to you as well.
Enjoy!*/

/*[code:WCE0V]*/
const a = "Hello World";
show(a);

/*[code:Oa1Zn]*/
// Variable \`a\` from previous cell is passed to this one
show(a);

/*[code:ANEnn]*/
// Code can be automaticaly formated by clicking on format button -->
                show(a);

/*[diagram:NYzSs]*/
/*data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMjFweCIgaGVpZ2h0PSIxMTRweCIgdmlld0JveD0iLTAuNSAtMC41IDMyMSAxMTQiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtlbWJlZC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyNC0wMS0yNlQxNTowOTowOS44ODJaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMC4wLjAuMCBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7ZDFpTy1oME5CSTlVb2xCcE4yVFImcXVvdDsgdmVyc2lvbj0mcXVvdDsyMy4wLjImcXVvdDsgdHlwZT0mcXVvdDtlbWJlZCZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtyRUliaG9FNXA5Q1pSTEF1dFBzdCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs1WlhOc3Bzd0RJV2ZoajNFSVQ5TElPbnRvbDFsMGJXTEZYQ3ZRUmxqUXRLbnJ3QVJvS1IzZXFmVDZhSnNRRWV5UWQreGpTZVM0dlppNVNYL2pBcU10L0xWelJNSGI3VUtBbjlMdDFhNXMrSnYxNzJTV2ExWUc0V1QvZzVESWF1MVZsRE5DaDJpY2ZveUYxTXNTMGpkVEpQV1lqTXZPNk9adi9VaU0xZ0lwMVNhcGZwRks1ZjM2bTYxSGZXUG9MTjhlSE93MmZlWlFnN0YzRW1WUzRYTlJCSkhUeVFXMGZWUHhTMEIwOUlidVBUalB2d2krL2d3QzZYN3JRSDhIVmRwYW02T1A4emRoMjVCVWZNY29uVTVabGhLY3h6VjJHSmRLbWluOUNrYWF6NGhYa2dNU1B3R3p0M1pTVms3SkNsM2hlR3NrVi9CeERKOXpicXBFalJvS1ZWaTJVNWZPWXV2TUlqZVN2angrckNKS0hQRzBnMjZnck9zRFhVZEx5RXdsd3BybTNKWE8xNDMwbWJBVld4UzIrOWtHSU43QVN6QTJUc1ZXRERTNmV0OE1VaGVVOW1qYnNST0Qweit1UXU3aFFuUndvVTU0eWJYRGs0WDJYWFQwRFo3RDgrek5tWktjeCtHWWZ5TWN4d2x1NFA0aVRQcHgrNTZpL1FWcklQYm14UTVLMEplZ253WXJIMk9tM0ZuQmNOMnlTZTdhdVAvT2ZqOUFuejgzNEFQL3lYNElGaVFqeHFvYUNJU0QxcG1WaFlMSjZneE44YzlCL2VFTWt2UzZLeWtNQ1ZjUUhyY1l0SjBvRWVjS0xSUzNWSDJ6Ti81Q21ndDRZTk1CRXVMa3U3Nk8zdmpFVThzRXM4c0V1KzNpTUx4dDlQbEpuOXZjZndCJmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gMTIwIDgzIEwgMTkzLjYzIDgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYjRkNmEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTk4Ljg4IDgzIEwgMTkxLjg4IDg2LjUgTCAxOTMuNjMgODMgTCAxOTEuODggNzkuNSBaIiBmaWxsPSIjMGI0ZDZhIiBzdHJva2U9IiMwYjRkNmEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjAiIHk9IjUzIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDk1NTViIiBzdHJva2U9IiNiYWM4ZDMiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODNweDsgbWFyZ2luLWxlZnQ6IDFweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0VFRUVFRTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjYwIiB5PSI4NyIgZmlsbD0iI0VFRUVFRSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyMDAiIHk9IjUzIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDk1NTViIiBzdHJva2U9IiNiYWM4ZDMiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODNweDsgbWFyZ2luLWxlZnQ6IDIwMXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRUVFRUVFOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkI8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMjYwIiB5PSI4NyIgZmlsbD0iI0VFRUVFRSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIwIiB5PSIzIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMzE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMThweDsgbWFyZ2luLWxlZnQ6IDFweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0NDQ0NDQzsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAzMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5Bd2Vzb21lIERpYWdyYW08L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTYwIiB5PSIyNyIgZmlsbD0iI0NDQ0NDQyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIzMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bd2Vzb21lIERpYWdyYW08L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kcmF3aW8uY29tL2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4=*/`;