import React from 'react'
import Form from './form';

const Contact = () => {

  return (
    <div className="contact fill-on-scroll">
      <div className="call-to-action">
        <h1>
          Bora conversar?
        </h1>
        <p>
          Envie uma mensagem e eu retornarei o mais rápido possível.
        </p>
      </div>
      <div className="contact-form">
        <Form />
      </div>
    </div>
  )
}

export default Contact