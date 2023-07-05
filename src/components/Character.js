// Write your Character component here
import styled from 'styled-components'
import CharacterLogic from './Character-Logic'

export default function Character(props) {
    
    return (
           <CharacterLogic characters={props.characters} setCharacters={props.setCharacters} /> 
    )
}