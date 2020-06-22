import React, { useState, useEffect, useContext, createContext } from 'react'
import { getLocalStorage } from '../utils'

const FormDataContext = createContext('')

export const useFormDataContext = () => useContext(FormDataContext)

function FormDataProvider({ children }) {
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    setProfileData(getLocalStorage('githubProfile') || {})
  }, [])

  return (
    <FormDataContext.Provider
      value={{
        profileData,
        setProfileData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}

export default FormDataProvider
