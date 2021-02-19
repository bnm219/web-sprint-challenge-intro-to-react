import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const StyledNames = styled.div`
    background-color:tan;
    width: 50%;
    margin:auto;
    padding:10px;
    border: 3px solid black;
`

const Characters = (props) =>{
    const {charactersInfo} = props;

    return(
        <div>
            {charactersInfo.map(character =>{
                return (
                <StyledNames>
                <Character key = {character.name} character = {character}/>
                </StyledNames>
                )
            })
            }
        </div>
    )
}

export default Characters;