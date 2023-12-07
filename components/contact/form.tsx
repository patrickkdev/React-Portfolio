import { Colors } from '@/pages/_app';
import { ChevronRight, Done, Error } from '@mui/icons-material';
import { Button, ButtonOwnProps, ButtonTypeMap, CircularProgress, ExtendButtonBase, TextField, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'

enum AsyncStatus {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Blue,
    },
  },
})

const telegramToken = '6743135294:AAHtwclBu7DNcL6M19RDwDkrxPrDWNjpES0'

const Form = () => {

  const [status, setStatus] = React.useState<AsyncStatus>(AsyncStatus.IDLE)

  const [data, setData] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const [dataError, setDataError] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  function checkFormData () {
    const errors = {
      name: '',
      email: '',
      message: '',
    }
  
    if (!data.name) errors.name = 'Por favor, insira seu nome'
    if (!data.email) errors.email = 'Por favor, insira seu email'
    if (!data.message) errors.message = 'Por favor, insira sua mensagem'
  
    setDataError(errors)

    if (!data.name || !data.email || !data.message) {
      return false
    }
    
    return true
  }

  async function handleFormSubmit() {
    const isFormValid = checkFormData()

    if (!isFormValid) return

    setStatus(AsyncStatus.PENDING)
    
    //telegram api
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: 2025697594,
        text: `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem: ${data.message}`
      })
    })

    if (response.ok) {
      setStatus(AsyncStatus.SUCCESS)
      return;
    }

    setStatus(AsyncStatus.ERROR)
    setTimeout(() => {
      setStatus(AsyncStatus.IDLE)
    }, 3000)
  }

  const submitButtonProps = {
    onClick: handleFormSubmit,
    disabled: status !== AsyncStatus.IDLE,
    color: status === AsyncStatus.SUCCESS ? "success" : status === AsyncStatus.ERROR ? "error" : "primary",
    endIcon:  status === AsyncStatus.PENDING ? 
                <CircularProgress size={20}/> 
              : status === AsyncStatus.SUCCESS ?
                <Done /> 
              : status === AsyncStatus.ERROR ? 
                <Error /> 
              : 
              <ChevronRight />,
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="form">
        <TextField
          error={dataError.name ? true : false}
          helperText={dataError.name}
          autoComplete='name'
          fullWidth
          id="filled-basic"
          label="Nome *"
          variant="filled"
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
        <TextField
          error={dataError.message ? true : false}
          helperText={dataError.message}
          fullWidth
          id="filled-multiline-static"
          label="Mensagem *"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={data.message}
          onChange={(e) => setData({...data, message: e.target.value})}
        />
        <TextField
          autoComplete='email'
          error={dataError.email ? true : false}
          helperText={dataError.email}
          fullWidth
          id="filled-basic"
          label="Email *"
          variant="filled"
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        />
        <Button
          size='large'
          variant="contained"
          fullWidth 
          {...submitButtonProps as ButtonOwnProps}
        >
          {status === AsyncStatus.PENDING ? 'Enviando...' : status === AsyncStatus.SUCCESS ? 'Enviado' : 'Enviar'}
        </Button>
        {
          status !== AsyncStatus.PENDING && 
          status !== AsyncStatus.IDLE && 
          (
            status === AsyncStatus.SUCCESS ?
            <p>Sua mensagem foi enviada com sucesso</p>
            :
            <p>Ops, algo deu errado</p>
          )
        }
      </div>
    </ThemeProvider>
  )
}

export default Form