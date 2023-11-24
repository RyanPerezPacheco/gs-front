import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 12rem;

  min-width: 100%;
  height: 8vh;
  
  background-color: #f8f8ff;
  
  h1 {
    font-weight: 600;
  }

@media (max-width: 850px) {
  
  p{
    font-size: 1.25rem;
  }

  header{
    gap: 1rem;
    display: flex;
    justify-content: center;
  }

  h1{
    font-size: 1.7rem;
  }

}

@media (max-width: 650px) {
  
  header p{
    font-size: 1.1rem;
  }

  header{
    gap: 1rem;
    display: flex;
    justify-content: center;
  }

  header h1{
    font-size: 1.5rem;
  }

}

`