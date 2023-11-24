import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15rem;
`;

export const LoginContainer = styled.div`
  width: 48rem;
  height: 48rem;

  background-color: #f8f8ff;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 8rem;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }

  button {
    margin-top: 3rem;

    border: none;
    outline: none;
    border-radius: .8rem;

    width: 100%;
    height: 5.6rem;

    background-color: #262529;

    color: #fff;

    font-size: 1.5rem;
  }

  label {
    font-weight: 500;
    font-size: 1.5rem;
  }

  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;

    margin-top: 1rem;
    text-align: center;
  }
`