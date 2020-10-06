import React from "react";
import "./styles.css";

function Abilities(props) {
  return (
    <div className="abilities">
      <h2>skills</h2>
      <ul>
        {props.abilities.length > 0 &&
          props.abilities.map((a, idx) => {
            if (a.is_hidden) {
              return <li>{`${a.ability.name}(hidden): ${a.description}`}</li>;
            } else {
              return <li>{`${a.ability.name}: ${a.description}`}</li>;
            }
          })}
      </ul>
    </div>
  );
}

export default Abilities;
