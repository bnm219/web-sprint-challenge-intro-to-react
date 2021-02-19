import React from 'react';

const Character = (props) =>{
const {character} = props;

return(
    <div>
        {character.name}
    </div>
)
}

export default Character;