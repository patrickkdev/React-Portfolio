/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ChevronRight, GitHub } from '@mui/icons-material';
import { Button, Card, Grid, Typography } from '@mui/material';
import ProjectDisplay, { Project } from './project-display';
import { Colors } from '@/pages/_app';
import Typewritter from 'typewriter-effect';
import useOnScreen from '../hooks/is-on-screen';

const projects: Project[] = [
  {
    accentColor: Colors.Green,
    title: "ChatMaster",
    image: "chatmaster-mockup.png",
    techStack: ["React", "Node.js", "Electron", "MySQL"],
    description: "O ChatMaster é um aplicativo desktop para automação de WhatsApp. Desenvolvido com React, Node.js e Electron, o ChatMaster oferece funcionalidades como automação de respostas (chatbot) e envio de mensagens em massa. Usa banco de dados MySQL e servidor Python para gestão de acesso dos usúarios. O servidor libera automaticamente o acesso para usuários que realizaram o pagamento da licença.",
    link: "https://chatmaster.vercel.app",
    visibility: "private",
  },
  {
    accentColor: Colors.Green,
    title: "Site do ChatMaster",
    image: "chatmaster-website-mockup.png",
    techStack: ["React", "Next.js"],
    description: "O site do ChatMaster é uma vitrine virtual que destaca todas as funcionalidades e benefícios dessa poderosa ferramenta de automação para o WhatsApp. Desenvolvido utilizando React e Next.js, o site oferece uma visão abrangente do ChatMaster, incluindo casos de uso, depoimentos e informações essenciais para os usuários.",
    link: "https://chatmaster.vercel.app",
    visibility: "private",
  },
  {
    accentColor: Colors.Orange,
    title: "Meu Delivery",
    image: "meudelivery-mockup.jpg",
    techStack: ["React", "Next.js", "MySQL"],
    description: "O Meu Delivery é uma plataforma completa para donos de delivery. Ela permite que donos de restaurantes criem uma página para exibir seus produtos e receber pedidos dos seus clientes. Possui integração com a API do Google Maps para calculo do valor da entrega do pedido com base na distancia entre o restaurante e o cliente. Fullstack com Next.js e MySQL.",
    link: "https://meudelivery.vercel.app",
    visibility: "private",
  },
  {
    accentColor: Colors.Blue,
    title: "2Gain",
    image: "2gain-desktop-mockup.png",
    techStack: ["React", "Electron", "MySQL"],
    description: "Com mais de 400 licenças vendidas, A 2Gain é uma ferramenta de cálculo destinada a traders do mercado de Opções Binárias. Desenvolvido com React e Electron. A ferramenta simplifica o processo de tomada de decisões financeiras para os usuários. Usa banco de dados MySQL e servidor Python para gestão de acesso dos usúarios. O servidor libera automaticamente o acesso para usuários que realizaram o pagamento da licença.",
    link: "https://gerenciamentodebanca.netlify.app",
    visibility: "private",
  },
  {
    accentColor: Colors.Blue,
    title: "Site do 2Gain",
    image: "2gain-website-mockup.png",
    techStack: ["React", "Next.js"],
    description: "O site do 2Gain é destaca as funcionalidades e a importância da calculadora para traders do mercado de Opções Binárias. Desenvolvido com React e Next.js, o site fornece aos usuários uma visão abrangente do 2Gain, incluindo casos de uso, depoimentos e informações essenciais para os usuários.",
    link: "https://gerenciamentodebanca.netlify.app",
    visibility: "private",
  },
]

const Projects = () => {

  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className="projects-section">
      <div className="section-title">
        <h1 ref={ref}>
          {
            isVisible && (
              <Typewritter 
                onInit={(typewriter) => {
                  typewriter
                  .pauseFor(250)
                  .typeString("Veja alguns dos meus trabalhos :)")
                  .start();
                }}
                options={{
                  delay: 50,
                }}
              />
            )
          }
        </h1>
      </div>
      {
        projects.map((project, index) => {
          return (
            <ProjectDisplay project={project} key={index} index={index}/>
          )
        })
      }
    </div>
  )
}

export default Projects