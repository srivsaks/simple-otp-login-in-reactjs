import "./styles.css";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const ref = useRef(null);

  const [curr, setCurr] = useState(0);

  const refWrapper = useCallback((node) => {
    if (node) {
      ref.current = node;
      ref.current.focus();
    }
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.code === "Backspace" && curr !== 0) {
        console.log(e);
        setCurr((prev) => prev - 1);
      }
    },
    [curr]
  );

  const handleChange = useCallback((e) => {
    if (e.target.value !== "") setCurr((prev) => prev + 1);
  }, []);

  /*useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [ref]);*/

  return (
    <div className="container">
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <input
            className="box"
            onInput={handleChange}
            onKeyDown={handleKeyPress}
            ref={index === curr ? refWrapper : null}
          />
        );
      })}
    </div>
  );
}
