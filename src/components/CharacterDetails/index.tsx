import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterPsychonautsDTO } from '../../DTOs/CharacterPsychonautsDTO'
import { api } from '../../services/api'

export function CharacterDetails() {
  const { name } = useParams()
  const [singleCharacter,setSingleCharacter] = useState<CharacterPsychonautsDTO[]>({} as CharacterPsychonautsDTO[])

  console.log(singleCharacter)

  async function handleGetSingleCharacter() {
    const response = await api.get(`/characters?name=${name}`)
    setSingleCharacter(response.data)
  }

  useEffect(() => {
    handleGetSingleCharacter()
  }, [name])

  return <h1>Detalhes do personagem</h1>
}
