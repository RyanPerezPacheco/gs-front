import { Container } from './styles'

import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import celularidoso from '../../assets/celularidoso.jpg'

export function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      navigate('/login')
    }
  }, [])

  function Logout() {
    return navigate('/login')
  }

  return (
    <Container>
      <Header />
      
      <div className="container">
        <div className='containercontent'>
      <main className='containerimage'>
        <img src={celularidoso} alt="Imagem Principal" className='imgprincipal'/>
      </main>
      <div className='containertitle'>
      <div className="titulo">
        <h1>Gerenciamento de Saúde Pessoal</h1>
      </div>
      <div className="solucao">
        <p>
          O aplicativo Hapvida revoluciona a gestão de saúde pessoal, sincronizando alarmes de medicamentos, indicando dietas personalizadas e incentivando atividades físicas para uma vida mais saudável e equilibrada.</p>
      </div>
      </div>
      <div className="botao">
  
      <button
        type="button"
        className="logout"
        onClick={Logout}
      >
        Logout
      </button>
      <h1>Vantagens</h1>
      <button className="informacoes">Mais informações</button>
      </div>
      </div>
      <aside className='containercard'>
        <div className="card">
          <h2>Problema</h2>
          <p>O problema a ser solucionado engloba a ineficiência na administração de medicamentos, o desperdício associado ao consumo de descartáveis e a falta de monitoramento personalizado da saúde. A solução proposta, por meio de alertas de medicamentos e gestão proativa da saúde pessoal, visa otimizar o processo, reduzindo o desperdício e oferecendo uma abordagem mais eficaz à saúde individual.</p>
        </div>
        <div className="card">
          <h2>Solução</h2>
          <p>A solução proposta é um aplicativo inovador de gerenciamento de saúde pessoal em parceria com a Hapvida. Os usuários terão acesso a um sistema proativo que oferece lembretes personalizados para medicamentos, monitoramento de atividades físicas e sugestões de dieta personalizada, alem de insights sobre saúde
          </p>
        </div>
        <div className="card">
          <h2>Função</h2>
          <p>O aplicativo será responsável por controlar as atividades físicas do usuário, acompanhando passos, distância, calorias queimadas, etc. Além disso, auxiliará na escolha de uma dieta personalizada, levando em consideração preferências e necessidades individuais. Fornecerá também receitas saudáveis e sugestões de refeições. Alem de emitir alertas para lembrar o usuário de tomar medicamentos nos horários adequados.</p>
          </div>
      </aside>
    </div>
    <div className="vantagens">
      <div className="cardvantagens">
        <p>O aplicativo proporciona vantagens significativas ao oferecer alarmes precisos para o controle de medicamentos na hora certa e na dose correta. Isso garante que os usuários sigam rigorosamente seus regimes de medicamentos, promovendo a eficácia do tratamento e evitando esquecimentos.</p>
      </div>
      <div className="cardvantagens">
        <p>O aplicativo fornece uma vantagem adicional ao oferecer indicações de dieta personalizadas. Com base nos dados biométricos e preferências, os usuários recebem insights valiosos para uma nutrição adequada, promovendo hábitos alimentares saudáveis.</p>
      </div>
      <div className="cardvantagens">
        <p>O aplicativo destaca-se ao proporcionar controle e monitoramento eficaz da atividade física. Com recursos integrados, os usuários recebem orientações personalizadas, estabelecem metas alcançáveis e acompanham seu progresso, incentivando um estilo de vida ativo e melhorando a saúde global.</p>
      </div>
    </div>
    </Container>
  )
}