import React from 'react';



function StatsElement(props) {


    return(
        <div className='result'>
            <table className='resultTable infosElement'>
                <tbody>

                    <tr><th className='infosElement' colSpan='2'>Stats do seu Pokemon:</th></tr>

                    <tr>
                        <th className='infosElement'>Hp:</th>
                        <th className='finalStat infosElement'>{props.finalStats.hp}</th>
                    </tr>
                    <tr>
                        <th className='infosElement'>Attack:</th>
                        <th className='finalStat infosElement'>{props.finalStats.attack}</th>
                    </tr>
                    <tr>
                        <th className='infosElement'>Defense:</th>
                        <th className='finalStat infosElement'>{props.finalStats.defense}</th>
                    </tr>
                    <tr>
                        <th className='infosElement'>Sp Attack:</th>
                        <th className='finalStat infosElement'>{props.finalStats.spattack}</th>
                    </tr>
                    <tr>
                        <th className='infosElement'>Sp Defense:</th>
                        <th className='finalStat infosElement'>{props.finalStats.spdefense}</th>
                    </tr>
                    <tr>
                        <th className='infosElement'>Speed:</th>
                        <th className='finalStat infosElement'>{props.finalStats.speed}</th>
                    </tr>
                </tbody>
            </table>
            

            <img className='resultImg' alt='pokemonImg' src={props.imgUrl}></img>
            
            


        </div>
    );
}


export default StatsElement;