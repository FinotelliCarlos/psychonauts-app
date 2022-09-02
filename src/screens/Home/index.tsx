import styled from "styled-components";
import * as Component from "../../components";

export function Home(){
  return(
    <HomeContainer>
      <Component.Header />
      <p>Tela de todos personagens</p>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`