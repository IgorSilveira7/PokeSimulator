import React, {useEffect, useState} from 'react';
import api from './../../service/index';
import StatsElement from '../statsElement/statsElement';
import BaseStatsElement from '../baseStatsElement/baseStatsElement';
import './style.css';

function DataElement() {

    const [pokemon, setPokemon] = useState({});
    const [name, setName] = useState('');
    const [level, setLevel] = useState(1);
    const [nature, setNature] = useState('adamant');
    const [hpIv, setHpIv] = useState(0);
    const [attackIv, setAttackIv] = useState(0);
    const [defenseIv, setDefenseIv] = useState(0);
    const [spAttackIv, setSpAttackIv] = useState(0);
    const [spDefenseIv, setSpDefenseIv] = useState(0);
    const [speedIv, setSpeedIv] = useState(0);
    const [hpEv, setHpEv] = useState(0);
    const [attackEv, setAttackEv] = useState(0);
    const [defenseEv, setDefenseEv] = useState(0);
    const [spAttackEv, setSpAttackEv] = useState(0);
    const [spDefenseEv, setSpDefenseEv] = useState(0);
    const [speedEv, setSpeedEv] = useState(0);
    const [finalStats, setFinalStats] = useState({});
    const [baseStats, setbaseStats] = useState({});
    const [imgUrl, setImgUrl] = useState('');  
    const [showImg, setShowImg] = useState(false); 
   
    
    
    async function handlerSubmit(e) {
        e.preventDefault();
        const response = await api.get(`/${name}`);
        setPokemon(response.data);
    }

    useEffect(() => {
        if(pokemon.stats) {

            var pokemonBases = {speed:pokemon.stats[5].base_stat,
                                spDef:pokemon.stats[4].base_stat,
                                spAtk: pokemon.stats[3].base_stat,
                                def: pokemon.stats[2].base_stat,
                                atk:pokemon.stats[1].base_stat,
                                hp:pokemon.stats[0].base_stat
    
            };

            setbaseStats(pokemonBases);
            setFinalStats(calculaStats(pokemonBases));
            setImgUrl(pokemon.sprites.front_default);
            setShowImg(true);
        }
    }, [pokemon]);


    function calculaStats(pokemon) {
        var hp = (((2 *pokemon.hp + parseInt(hpIv) + Math.floor((parseInt(hpEv) / 4))) * parseInt(level))/100) + parseInt(level) + 10;
        var attack = (((2 * pokemon.atk + parseInt(attackIv) + Math.floor((parseInt(attackEv) / 4))) * parseInt(level))/100) + 5;
        var defense = (((2 * pokemon.def + parseInt(defenseIv) + Math.floor((parseInt(defenseEv) / 4))) * parseInt(level))/100) + 5;
        var spattack = (((2 * pokemon.spAtk + parseInt(spAttackIv) + Math.floor((parseInt(spAttackEv) / 4))) * parseInt(level))/100) + 5;
        var spdefense = (((2 * pokemon.spDef + parseInt(spDefenseIv) + Math.floor((parseInt(spDefenseEv) / 4))) * parseInt(level))/100) + 5;
        var speed = (((2 * pokemon.speed + parseInt(speedIv) + Math.floor((parseInt(speedEv) / 4))) * parseInt(level))/100) + 5;


        if((nature === 'bold') || (nature === 'modest') || (nature === 'calm') || (nature === 'timid')) {
            attack = attack * 0.9;
            attack = attack.toFixed(0);
        }

        if((nature === 'lonely') || (nature === 'mild') || (nature === 'gentle') || (nature === 'hasty')) {
            defense = defense * 0.9;
            defense = defense.toFixed(0);
        }

        if((nature === 'adamant') || (nature === 'impish') || (nature === 'careful') || (nature === 'jolly')) {
            spattack = spattack * 0.9;
            spattack = spattack.toFixed(0);
        }

        if((nature === 'naughty') || (nature === 'lax') || (nature === 'rash') || (nature === 'naive')) {
            spdefense = spdefense * 0.9;
            spdefense = spdefense.toFixed(0);
        }

        if((nature === 'brave') || (nature === 'relaxed') || (nature === 'quiet') || (nature === 'sassy')) {
            speed = speed * 0.9;
            speed = speed.toFixed(0);
        }

        if((nature === 'lonely') || (nature === 'adamant') || (nature === 'brave') || (nature === 'naughty')) {
            attack = attack * 1.1;
            attack = attack.toFixed(0);
        }

        if((nature === 'bold') || (nature === 'impish') || (nature === 'lax') || (nature === 'relaxed')) {
            defense = defense * 1.1;
            defense = defense.toFixed(0);
        }

        if((nature === 'modest') || (nature === 'mild') || (nature === 'rash') || (nature === 'quiet')) {
            spattack = spattack * 1.1;
            spattack = spattack.toFixed(0);
        }

        if((nature === 'calm') || (nature === 'gentle') || (nature === 'careful') || (nature === 'sassy')) {
            spdefense = spdefense * 1.1;
            spdefense = spdefense.toFixed(0);
        }

        if((nature === 'timid') || (nature === 'hasty') || (nature === 'jolly') || (nature === 'naive')) {
            speed = speed * 1.1;
            speed = speed.toFixed(0);
        }

        hp = hp.toFixed(0);

        const allStats = {hp, attack, defense, spattack, spdefense, speed};

        return allStats;
    }


    
    
    
    

    return(
        <div>
            
            
            <hr/>
            <table className='infosElement'>

                <tbody>
                    <tr>
                        <th className='infosElement' colSpan='1'>Nome do Pokemon</th>
                        <td className='infosElement' colSpan='6'><input required value={name} onChange={(e)=> setName(e.target.value)}  type="text" />           </td>
                    </tr>
                    <tr>
                        <th className='infosElement' colSpan='1'>Level</th>
                        <td  className='infosElement'colSpan='6'><input required value={level} onChange={(e)=> setLevel(e.target.value)}  type="text" />   </td>
                        
                    </tr>
                    <tr>
                        <th className='infosElement' colSpan='7'>IVs (Para cada atributo: Min: 0  Max: 31)</th>
                        
                    </tr>

                    <tr>
                        <th className='spanIv infosElement'>Hp: <input className='inputIv' required value={hpIv} onChange={(e)=> setHpIv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Atk: <input className='inputIv' required value={attackIv} onChange={(e)=> setAttackIv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Def: <input className='inputIv' required value={defenseIv} onChange={(e)=> setDefenseIv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Sp Atk: <input className='inputIv' required value={spAttackIv} onChange={(e)=> setSpAttackIv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Sp Def: <input className='inputIv' required value={spDefenseIv} onChange={(e)=> setSpDefenseIv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Speed: <input className='inputIv' required value={speedIv} onChange={(e)=> setSpeedIv(e.target.value)} type='text'/></th>
                    </tr>

                    <tr>
                        <th className='infosElement' colSpan='7'>EVs (Para cada atributo: Min: 0  Max: 255)</th>
                        
                    </tr>

                    <tr>
                        <th className='spanIv infosElement'>Hp: <input className='inputIv' required value={hpEv} onChange={(e)=> setHpEv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Atk: <input className='inputIv' required value={attackEv} onChange={(e)=> setAttackEv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Def: <input className='inputIv' required value={defenseEv} onChange={(e)=> setDefenseEv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Sp Atk: <input className='inputIv' required value={spAttackEv} onChange={(e)=> setSpAttackEv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Sp Def: <input className='inputIv' required value={spDefenseEv} onChange={(e)=> setSpDefenseEv(e.target.value)} type='text'/></th>
                        <th className='spanIv infosElement'>Speed: <input className='inputIv' required value={speedEv} onChange={(e)=> setSpeedEv(e.target.value)} type='text'/></th>
                    </tr>




                    <tr>
                        <th className='infosElement' colSpan='6'>
                            <label>Nature: </label>
                            <select id='nature' value={nature} onChange={(e)=> setNature(e.target.value)}>
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
                        <th className='infosElement' colSpan='6'> <button className='submitBtn' type='submit' onClick={handlerSubmit} > Submit</button></th>
                    </tr>

                </tbody>

            </table>

            <hr/>

            { showImg &&
                <StatsElement
                    finalStats= {finalStats}
                    name = {name}
                    imgUrl = {imgUrl}
                />

            }

            <br/>

            { showImg &&
                <BaseStatsElement
                    baseStats = {baseStats}
                />

            }

           


        </div>

    );

}

export default DataElement;