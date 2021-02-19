import React from 'react';
import Character from './Character'

const Characters = (props) =>{
    const {charactersInfo} = props;

    return(
        <div>
            {charactersInfo.map(character =>{
                return <Character key = {character.name} character = {character}/>
            })
            }
        </div>
    )
}

export default Characters;