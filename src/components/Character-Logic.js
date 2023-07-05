import styled from "styled-components";
import { useState, useEffect } from "react";

export default function CharacterLogic(props) {
    // const [character, setCharacter] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    console.log(props)
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
    margin: 2rem 0;
    padding: 0 4rem;
    background-color: rgba(136, 168, 183, 0.3);
    position: absolute;
    bottom: -10.5%;
    left: 50%;
    transform: translate(-50%);
    &:hover {
        background-color: #eff2f8;
        color: black;
    }
    `

    /*useEffect(() => {
        setCharacter(props.characters)
    }, [props.characters])
    */
    

    function clickCharacter(character) {
        if (!selectedCharacter) {
            setSelectedCharacter(character)
        } else if (selectedCharacter) {
            setSelectedCharacter(null)
        }
    }

    function defineCharacters(character, index) {
            return (
                <>
                 <p onClick={() => clickCharacter(character, index)} key={index + Math.random()}>{(character.name).toUpperCase()}</p>
                </>
            )
    }

    return (
        <>
        <ParentCharacterContainer>
            { !selectedCharacter ? (
                props.characters.map((character, index) => {
                   return defineCharacters(character, index)})  
                    ) : (
                   <>
                    {Object.keys(selectedCharacter).map((key) => (
                        <p>{(key).toUpperCase()} : {(selectedCharacter[key])}</p>
                    ))}
                    <BackCharacterButton onClick={clickCharacter}>BACK</BackCharacterButton>
                   </>)
            }
        </ParentCharacterContainer>
        </>
    )
}
/*
birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: Array(4) [ "https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", … ]
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "https://swapi.dev/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: Array []
starships: Array [ "https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/" ]
url: "https://swapi.dev/api/people/1/"
vehicles: Array [ "https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/" ]
*/