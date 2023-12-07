/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { WhatsApp } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import Navbar from '../navbar/navbar';
import SkilLDisplay from './skill-display';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="hero">
          <h1>
            Patrick Ferreira
          </h1>
          <h3>
            Desenvolvedor Fullstack
          </h3>
          <Button
            variant='contained'
            className="gradient-background"
            color="success"
            href="https://api.whatsapp.com/send?phone=5531996442788&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho."
            target="_blank"
            rel="noreferrer"
            endIcon={<WhatsApp />}
          >
            Contato
          </Button>
          <SkilLDisplay />
        </div>
      </div>
    </div>
  )
}

export default Header