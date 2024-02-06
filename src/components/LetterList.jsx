import React from 'react'
import styled from 'styled-components'
import fakeData from "fakeData.json"
import LetterCard from './LetterCard';


export default function LetterList(activeMember, letters) {

  const filteredLetters = fakeData.filter(letter => letter.writedTo === activeMember)

  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
      <LetterCard letter={letter}/>
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
`