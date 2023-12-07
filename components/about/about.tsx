import React from 'react'
import { Container, Divider, Grid, IconButton } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

const bulletPoints = [
  {
    icon: <ArrowDownward />,
    title: "Criatividade",
    subtitle: "Desenvolvendo Soluções Únicas e Inovadoras"      
  },
  {
    icon: <ArrowDownward />,
    title: "Responsabilidade",
    subtitle: "Comprometimento e Foco na Excelência"
  },
  {
    icon: <ArrowDownward />,
    title: "Resolução de Problemas",
    subtitle: "Soluções Inteligentes para Desafios Complexos"
  }
]

const About = () => {

  return (
    <div className="about fill-on-scroll">
      <Container maxWidth="lg">
        <div className="title">
          <h1>
            Sobre mim
          </h1>
        </div>
        <Divider sx={{ marginBottom: "20px", backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
        <p><strong>Olá! Sou o Patrick,</strong> programador front-end e back-end baseado em Nova Lima - MG.</p>
        
        <h3>Paixão</h3>	

        <p>Desde jovem, vejo na programação não apenas uma profissão, mas uma verdadeira paixão que me impulsiona a explorar e criar soluções únicas e inovadoras.</p>

        <h3>Habilidades</h3>

        <p>Como desenvolvedor fullstack, domino o desenvolvimento de software front-end e back-end. Minhas principais ferramentas incluem React e Node.js. Ao longo dos anos, dediquei-me a projetos que exigiram a aplicação dessas tecnologias, proporcionando-me uma visão abrangente e aprimorando minhas habilidades técnicas.</p>

        <h3>Aprendizado Constante</h3>

        <p>Embora não tenha completado minha formação acadêmica, minha busca por conhecimento é contínua. Caracterizado pelo autodidatismo, minha abordagem vai além da teoria, envolvendo-me ativamente em projetos práticos. Estou aberto a oportunidades que valorizem não apenas a formação acadêmica, mas também a paixão, dedicação e habilidades práticas que desenvolvi ao longo dos anos.</p>
      </Container>
    </div>
  )
}

export default About