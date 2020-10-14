import * as React from "react";
import { render } from "react-dom";
import { initializeMergeStyles } from "./initializeMergeStyles";
import App from "./App";

initializeMergeStyles();
const rootElement = document.getElementById("root");
render(<App />, rootElement);
