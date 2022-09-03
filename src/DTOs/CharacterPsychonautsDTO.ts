export type PsiPowersDTO = {
  description: string
  img: string
  _id: string
  name: string
}

export type CharacterPsychonautsDTO = {
  gender: string
  img: string
  _id: string
  name: string
  psiPowers: PsiPowersDTO[]
}
