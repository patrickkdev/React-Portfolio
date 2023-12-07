/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import React from 'react';
import Header from '@/components/header/header';
import Projects from '@/components/projects/projects';
import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Services from '@/components/services/services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrick Ferreira - Desenvolvedor Fullstack</title>
        <meta name="description" content="Portfólio de Patrick Ferreira. Desenvolvedor Fullstack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}
