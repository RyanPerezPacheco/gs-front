import { Container, LoginContainer } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

export function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  function ProceedLogin() {

    if(validate()) {
      function handleUserId() {
        fetch(`http://localhost:3000/users?username=${username}`)
        .then((res) => res.json())
        .then((users) => {
          if (users.length > 0) {
            const userId = users[0].id;

            fetch('http://localhost:3000/users/' + userId).then((res) => {
              return res.json()
            }).then((resp) => {
              if(Object.keys(resp).lenght === 0) {
                alert('Credenciais invalidas.')
              } else {
                if (resp.password === password) {
                  sessionStorage.setItem('username', username)
                  navigate('/')
                } else {
                  alert('Credenciais invalidas.')
                }
              }
            }).catch((err) => {
              alert(err)
            })
          }
        })
      }

      handleUserId()
    }
  }

  const validate = () => {
    let result = true

    if(username === '' || password === '') {
      result = false
      alert('Credenciais invalidas.')
    }

    return result
  }


  return (
    <Container>
      <Header />

      <div>
        <LoginContainer>
          <div className='input-wrapper'>
            <label>Usuario</label>
            <Input 
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder="Nome de usuario"
            />
          </div>
          <div className='input-wrapper'>
            <label>Senha</label>
            <Input
              type="password"
              id="senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Sua senha"
            />
          </div>
          <button
            type="button"
            onClick={ProceedLogin}
          > 
            Entrar
          </button>
          <Link to="/register">
            Ainda nao possuo uma conta
          </Link>
        </LoginContainer>
      </div>

    </Container>
  )
}