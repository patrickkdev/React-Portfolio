import React from 'react';
import Typewriter from 'typewriter-effect';
import useOnScreen from '../hooks/is-on-screen';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';

const services = [
  {
    title: "Aplicações Web",
    description: "Construção de aplicações web dinâmicas e interativas, utilizando as últimas tecnologias para garantir uma experiência de usuário intuitiva."
  },
  {
    title: "Websites Responsivos",
    description: "Criação de websites modernos e responsivos, adaptados para proporcionar uma experiência envolvente em diferentes dispositivos."
  },
  {
    title: "Aplicações Desktop",
    description: "Desenvolvimento de aplicações desktop personalizadas, oferecendo soluções específicas para atender às necessidades do seu negócio ou projeto."
  },
  {
    title: "APIs e Automação",
    description: "Criação de APIs robustas, facilitando a comunicação entre diferentes sistemas e plataformas, juntamente com automação de tarefas para atender às necessidades do seu negócio ou projeto."
  },
  {
    title: "E-commerce",
    description: "Implementação de soluções de comércio eletrônico, desde a criação de carrinhos de compras até a integração de gateways de pagamento, garantindo uma experiência de compra segura e eficiente."
  },
  {
    title: "Sistemas de Gerenciamento de Conteúdo (CMS)",
    description: "Construção de sistemas que permitem a fácil criação, edição e publicação de conteúdo online, proporcionando autonomia na gestão de informações."
  },
  {
    title: "Integração de Terceiros",
    description: "Integração de APIs de terceiros para ampliar as funcionalidades da sua aplicação, aproveitando serviços externos e otimizando processos."
  },
]

const Services = () => {

  const ref = React.useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref);

  const [hoveredService, setHoveredService] = React.useState<number | null>(null);

  return (
    <div ref={ref} className={"services fill-on-scroll"}>
      <Container maxWidth="xl">
        <h1>Serviços</h1>
        {
          isVisible && (
            <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString("Com o que eu posso te ajudar?")
                .start();
              }}
              options={{
                delay: 40,
                cursor: "",
              }}
            />
          )
        }
        <Divider sx={{ marginTop: "20px", backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
        <div className="service_cards_content">
        {
          services.map((service, index) => (
            <div className={`service_card ${hoveredService === index ? "hovered-service" : ""}`} onMouseEnter={() => setTimeout(() => setHoveredService(index), 0)} key={index}>
              <h2>{service.title}</h2>
              <p>
                {service.description}
              </p>
            </div>
          ))
        }
        </div>
      </Container>
    </div>
  );
};

export default Services;
