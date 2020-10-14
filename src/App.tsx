import * as React from "react";
import "./styles.css";
import { Button } from "@fluentui/react-button";
import { ThemeProvider } from "@fluentui/react-theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Button>I am a button</Button>
        <Button primary>I am a primary button</Button>
        <Button disabled>I am a disabled button</Button>
      </div>
    </ThemeProvider>
  );
}
