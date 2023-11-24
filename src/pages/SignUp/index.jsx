import { Container, LoginContainer } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  function handleRegister() {
    if(username === '' || password === '') {
      alert('Credenciais invalidas.')
      
      return
    } else {
      let userObject = {username, password}
    
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(userObject)
      }).then((res) => {
        alert('Registrado com sucesso.')
        navigate('/')
      }).catch((err) => {
        console.error(err)
      })
    }
  }

  return (
    <Container>
      <Header />

      <div>
        <LoginContainer>
          <div className='input-wrapper'>
            <label>Usuario</label>
            <Input
              type='text'
              placeholder="Nome de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label>Senha</label>
            <Input
              type="password" 
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleRegister}
          > 
            Cadastrar
          </button>
          <Link to="/">
            Voltar para o login
          </Link>
        </LoginContainer>
      </div>

    </Container>
  )
}