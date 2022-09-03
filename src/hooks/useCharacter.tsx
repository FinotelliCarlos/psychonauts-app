import React from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

export function useCharacter(){
  return React.useContext(CharacterContext)
}