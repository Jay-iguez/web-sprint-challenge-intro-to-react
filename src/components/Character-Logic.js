import styled from "styled-components";
import { useState, useEffect } from "react";

export default function CharacterLogic(props) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        setCharacter(props.characters)
    }, [props.characters])

    const ParentCharacterContainer = styled.div`
    margin: 3rem 0;
    p {
        margin: 2rem 10%;
        background-color: rgba(136, 168, 183, 0.3);
    }
    `
    
    return (
        <ParentCharacterContainer>
            {
              character.map(character => {
            return <p>{character.name}</p>   
            })    
            }
        </ParentCharacterContainer>
    )
}