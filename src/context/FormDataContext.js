import { message } from 'antd'
import React, { useState, useContext, createContext } from 'react'

const FormDataContext = createContext('')

export const useFormDataContext = () => useContext(FormDataContext)

function FormDataProvider({ children }) {
  const [userData, setUserData] = useState({
    user: {
      fullName: 'Luis Felipe Leal',
      cpf: '000.000.000-00',
      email: 'felipelealdefaria@gmail.com',
      confirmEmail: '',
      zipCode: '85660-000',
      street: 'Rua Castro Alves',
      numberStreet: '18',
      complement: 'Apto 302',
      neighborhood: 'Centro Norte',
      city: 'Dois Vizinhos',
      uf: 'PR',
      phone: '+55 (31) 99761-0524',
    },
    payment: {
      method: '',
      name: '',
      number: '',
      expiry: '',
      cvc: '',
    },
  })
  const [payMethod, setPayMethod] = useState(0)
  const [stepCurrent, setStepCurrent] = useState(0)

  const nextStep = () => {
    const aux = stepCurrent + 1
    setStepCurrent(aux)
  }

  const prevStep = () => {
    const aux = stepCurrent - 1
    setStepCurrent(aux)
  }

  const submitData = (data) => {
    message.success('Processing complete!')
    console.log(data)
  }

  return (
    <FormDataContext.Provider
      value={{
        userData,
        setUserData,
        payMethod,
        setPayMethod,
        stepCurrent,
        setStepCurrent,
        nextStep,
        prevStep,
        submitData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}

export default FormDataProvider
