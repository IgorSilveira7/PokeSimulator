import React from 'react';

function StatsElement(props) {
  const { finalStats, imgUrl } = props;

  return (
    <div className="result">
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

      <img className="resultImg" alt="pokemonImg" src={imgUrl} />
    </div>
  );
}

export default StatsElement;
