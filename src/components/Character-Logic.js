import styled from "styled-components";
import { useState, useEffect } from "react";

export default function CharacterLogic(props) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        setCharacter(props.characters)
    }, [props.characters])

    const ParentCharacterContainer = styled.div`
    margin: 3rem 0;
    position: relative;
    p {
        margin: 2rem 10%;
        background-color: rgba(136, 168, 183, 0.3);
        &:hover {
            background-color: #eff2f8;
            color: black;
        }
    display: flex;
    justify-content: center;
    }
    `

    const BackCharacterButton = styled.div`
    padding: 0 2rem;
    background-color: rgba(136, 168, 183, 0.3);
    position: absolute;
    bottom: -26.5%;
    left: 50%;
    transform: translate(-50%)
    `


    
    return (
        <>
        <ParentCharacterContainer>
            {
              character.map(character => {
            return <p>{(character.name).toUpperCase()}</p>   
            })    
            }
            <BackCharacterButton>
            BACK
            </BackCharacterButton>
        </ParentCharacterContainer>
        </>
    )
}