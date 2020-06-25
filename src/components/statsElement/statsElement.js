import React from "react";
import "./style.css";

function StatsElement(props) {
  const { finalStats, imgUrl } = props;

  const typeSpans = () => {
    return props.types.map((e) => (
      <span className={`typeLayout ${e.type.name}`}>
        {e.type.name.slice(0, 1).toUpperCase() +
          e.type.name.slice(1, e.type.name.length)}
      </span>
    ));
  };

  return (
    <div className="statsElement">
      <div className="statsTable">
        <table className="resultTable infosElement">
          <tbody>
            <tr>
              <th className="infosElement" colSpan="2">
                Stats do seu Pokemon:
              </th>
            </tr>

            <tr>
              <th className="infosElement">Hp:</th>
              <th className="finalStat infosElement">{finalStats.hp}</th>
            </tr>
            <tr>
              <th className="infosElement">Attack:</th>
              <th className="finalStat infosElement">{finalStats.attack}</th>
            </tr>
            <tr>
              <th className="infosElement">Defense:</th>
              <th className="finalStat infosElement">{finalStats.defense}</th>
            </tr>
            <tr>
              <th className="infosElement">Sp Attack:</th>
              <th className="finalStat infosElement">{finalStats.spattack}</th>
            </tr>
            <tr>
              <th className="infosElement">Sp Defense:</th>
              <th className="finalStat infosElement">{finalStats.spdefense}</th>
            </tr>
            <tr>
              <th className="infosElement">Speed:</th>
              <th className="finalStat infosElement">{finalStats.speed}</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="imgContainer">
        <img className="resultImg" alt="pokemonImg" src={imgUrl} />
        <span className="type">{typeSpans()}</span>
      </div>
    </div>
  );
}

export default StatsElement;
