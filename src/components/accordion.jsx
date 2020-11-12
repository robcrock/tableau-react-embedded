import React, { useState } from "react";

export function Accordion() {
  const [isToggled, setIsToggled] = useState(false);

  // I'm using this approach because I can imagine the element I want to
  // show/hide on my screen becoming quite unwieldy.
  const showMe = isToggled && <h3>Show Me</h3>;

  return (
    <div>
      {/* 
      How to add conditional logic within React:
      If the boolean value of isToggled is true
      then display the h3 otherwise return null
      */}
      {showMe}
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}
