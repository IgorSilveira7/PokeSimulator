import React from "react";
import "./style.css";

function BaseStatsElement(props) {
  function setColor(value) {
    let color = "";

    if (value <= 30) {
      color = "#f34444";
    } else if (value <= 60) {
      color = "#ff7f0f";
    } else if (value <= 90) {
      color = "#ffdd57";
    } else if (value <= 120) {
      color = "#a0e515";
    } else if (value <= 150) {
      color = "#23cd5e";
    } else {
      color = "#00c2b8";
    }

    return color;
  }

  function setBarWidth(value) {
    let width = (value * 100) / 180;

    if (width > 100) return "100%";

    return `${width}%`;
  }

  return (
    <div className="baseStats">
      <h2>Stats Base</h2>
      <table className="baseStatsTable">
        <tbody>
          <tr>
            <th>HP</th>
            <td className="cellNum">{props.baseStats.hp}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.hp)}`,
                  backgroundColor: `${setColor(props.baseStats.hp)}`,
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Attack</th>
            <td className="cellNum">{props.baseStats.atk}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.atk)}`,
                  backgroundColor: `${setColor(props.baseStats.atk)}`,
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Defense</th>
            <td className="cellNum">{props.baseStats.def}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.def)}`,
                  backgroundColor: `${setColor(props.baseStats.def)}`,
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Sp. Atk</th>
            <td className="cellNum">{props.baseStats.spAtk}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.spAtk)}`,
                  backgroundColor: `${setColor(props.baseStats.spAtk)}`,
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Sp. Def</th>
            <td className="cellNum">{props.baseStats.spDef}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.spDef)}`,
                  backgroundColor: `${setColor(props.baseStats.spDef)}`,
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Speed</th>
            <td className="cellNum">{props.baseStats.speed}</td>
            <td className="cellBarchart">
              <div
                className="barchartBar"
                style={{
                  width: `${setBarWidth(props.baseStats.speed)}`,
                  backgroundColor: `${setColor(props.baseStats.speed)}`,
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStatsElement;
