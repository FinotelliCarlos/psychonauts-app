import { WarningCircle } from "phosphor-react";
import * as S from './styles'

type AlertProps = {
  title: string
}

export function Alert({title}:AlertProps){
  return(
    <S.Alert>
      <WarningCircle /> {title}
  </S.Alert>
  )
}