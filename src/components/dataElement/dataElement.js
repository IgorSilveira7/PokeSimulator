import React from "react";
import "./style.css";

function DataElement(props) {
  return (
    <div className="dataElement">
      <table id="tableId" className="infosElement">
        <tbody>
          <tr>
            <th className="infosElement" colSpan="1">
              Level
            </th>
            <td className="infosElement" colSpan="6">
              <input
                className="inputIv"
                required
                value={props.level}
                onChange={(e) => props.setLevel(e.target.value)}
                type="text"
              />{" "}
            </td>
          </tr>
          <tr>
            <th className="infosElement" colSpan="7">
              IVs (Para cada atributo: Min: 0 Max: 31)
            </th>
          </tr>

          <tr>
            <th className="spanIv infosElement">
              Hp:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.hpIv}
                onChange={(e) => props.setHpIv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Atk:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.attackIv}
                onChange={(e) => props.setAttackIv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Def:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.defenseIv}
                onChange={(e) => props.setDefenseIv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Sp Atk:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.spAttackIv}
                onChange={(e) => props.setSpAttackIv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Sp Def:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.spDefenseIv}
                onChange={(e) => props.setSpDefenseIv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Speed:{" "}
              <input
                className="inputIv"
                required
                defaultValue="0"
                value={props.speedIv}
                onChange={(e) => props.setSpeedIv(e.target.value)}
                type="text"
              />
            </th>
          </tr>

          <tr>
            <th className="infosElement" colSpan="7">
              EVs (Para cada atributo: Min: 0 Max: 255)
            </th>
          </tr>

          <tr>
            <th className="spanIv infosElement">
              Hp:{" "}
              <input
                className="inputIv"
                required
                value={props.hpEv}
                onChange={(e) => props.setHpEv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Atk:{" "}
              <input
                className="inputIv"
                required
                value={props.attackEv}
                onChange={(e) => props.setAttackEv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Def:{" "}
              <input
                className="inputIv"
                required
                value={props.defenseEv}
                onChange={(e) => props.setDefenseEv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Sp Atk:{" "}
              <input
                className="inputIv"
                required
                value={props.spAttackEv}
                onChange={(e) => props.setSpAttackEv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Sp Def:{" "}
              <input
                className="inputIv"
                required
                value={props.spDefenseEv}
                onChange={(e) => props.setSpDefenseEv(e.target.value)}
                type="text"
              />
            </th>
            <th className="spanIv infosElement">
              Speed:{" "}
              <input
                className="inputIv"
                required
                value={props.speedEv}
                onChange={(e) => props.setSpeedEv(e.target.value)}
                type="text"
              />
            </th>
          </tr>

          <tr>
            <th className="infosElement" colSpan="6">
              <label>Nature: </label>
              <select
                id="nature"
                value={props.nature}
                onChange={(e) => props.setNature(e.target.value)}
              >
                <option value="adamant">Adamant</option>
                <option value="bashful">Bashful</option>
                <option value="brave">Brave</option>
                <option value="bold">Bold</option>
                <option value="calm">Calm</option>
                <option value="careful">Careful</option>
                <option value="docile">Docile</option>
                <option value="gentle">Gentle</option>
                <option value="hardy">Hardy</option>
                <option value="hasty">Hasty</option>
                <option value="impish">Impish</option>
                <option value="jolly">Jolly</option>
                <option value="lax">Lax</option>
                <option value="lonely">Lonely</option>
                <option value="mild">Mild</option>
                <option value="modest">Modest</option>
                <option value="naive">Naive</option>
                <option value="naughty">Naughty</option>
                <option value="quiet">Quiet</option>
                <option value="quirky">Quirky</option>
                <option value="rash">Rash</option>
                <option value="relaxed">Relaxed</option>
                <option value="sassy">Sassy</option>
                <option value="serious">Serious</option>
                <option value="timid">Timid</option>
              </select>
            </th>
          </tr>

          <tr>
            <th className="infosElement" colSpan="6">
              {" "}
              <button
                className="submitBtn"
                type="submit"
                onClick={props.handlerSubmit}
              >
                {" "}
                Calcular
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataElement;
