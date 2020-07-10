/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import * as yup from 'yup'

export const schema = yup.object().shape({
  // firstName: yup.string().required('This field is required'),
  // lastName: yup.string().required('This field is required'),
  // email: yup.string().email('Invalid email').required('This field is required'),
  // fullName: yup.string().required('This field is required'),
  // cpf: yup.string().required('This field is required'),
  // email: yup.string().email('Invalid email'),
  // confirmEmail: yup.string().email('Invalid email'),
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
