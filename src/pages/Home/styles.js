import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  width: 100%;
  height: 70vh;
  gap: .5rem;
  margin-top: 1rem;
  padding: 0 6rem;
}

.containercontent {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}

.containertitle {
  display: flex;
  gap: 1rem;
}

.containerimage {
  width: 110vh;
  height: 41vh;
}

.containerimage img {
  width: 100%;
  height: 100%;
  object-fit: stretch;
}

.containercard {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.card {
  border-radius: 1rem;
  background-color: #ccc4;
  margin-bottom: 3px;
  padding: 10px;
}

.card h2 {
  color: #000;
}

.card p {
  color: #fff;
}

.containertitle {
  gap: 1rem;
  height:50%;
}

.titulo {
  max-width: 28%
}

.titulo h1 {
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
}

.solucao {
  background-color: #ccc4;
  width: 64.5rem;
  padding: 1.2rem;
  color: #fff;
  border-radius: 1rem;
}

.solucao p {
  font-size:2.2rem
}

.botao {
  display: flex;
  justify-content: space-between;
}

.botao h1 {
  color: #fff;
}

.logout {
  border: none;
  outline: none;
  border-radius: .8rem;
  height: 4rem;
  background-color: #fff;
  font-size: 1.5rem;
  width: 10rem;

}

.informacoes {
  border: none;
  outline: none;
  border-radius: .8rem;
  height: 4rem;
  background-color: #fff;
  font-size: 1.5rem;
  width: 15rem;
}

.vantagens {
  height: 20vh;
  padding: 1rem 6rem;
  display: flex;
  gap: 0.5rem;
}

.cardvantagens {
  background-color: #ccc4;
  padding: 1.5rem;
  color: #fff;
  border-radius: 1rem;
}

@media only screen and (max-width: 1925px) {

}
`