import styled from "styled-components";
import * as Component from "../../components";

export function Favorites(){
  return(
    <FavoritesContainer>
      <Component.Header />
      <p>Tela de todos favoritos</p>
    </FavoritesContainer>
  )
}

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`