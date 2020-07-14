/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import * as yup from 'yup'

export const schema = yup.object().shape({
  fullName: yup.string().required('Este campo é obrigatório'),
  cpf: yup.string().required('Este campo é obrigatório'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Este campo é obrigatório'),
  confirmEmail: yup
    .string()
    .email('Invalid email')
    .test('equal', 'O e-mail deve ser o mesmo', function (val) {
      const ref = yup.ref('email')
      return val === this.resolve(ref)
    })
    .required('Este campo é obrigatório'),
  zipCode: yup.string().required('Este campo é obrigatório'),
  street: yup.string().required('Este campo é obrigatório'),
  numberStreet: yup.string().required('Este campo é obrigatório'),
  complement: yup.string().required('Este campo é obrigatório'),
  neighborhood: yup.string().required('Este campo é obrigatório'),
  city: yup.string().required('Este campo é obrigatório'),
  uf: yup.string().required('Este campo é obrigatório'),
  phone: yup.string().required('Este campo é obrigatório'),
})

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorage(key) {
  return localStorage ? JSON.parse(localStorage.getItem(key)) : null
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key)
}

export const handleGitApi = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`)
  setLocalStorage('githubProfile', res)
  return res
}
