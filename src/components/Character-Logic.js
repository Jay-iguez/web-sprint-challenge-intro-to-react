import styled from "styled-components";
import { useState, useEffect } from "react";

export default function CharacterLogic(props) {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        setCharacter(props.characters)
    }, [props.characters])
    
    return (
        character.map(character => {
            return (
                <p>{character.name}</p>
            )
        })
    )
}