import React, {useEffect, useState} from 'react'
import { useStringValidator } from 'use-validation-hooks'

export default () => {
  const [name, setName] = useState('')
  const [nameFieldError, setNameValidity] = useState(null)

  const validateName = useStringValidator({ label: 'Name', required: true, min: 6, max: 12 });

  const onNameChange = ({ target: { value } }) => setName(value);

  useEffect(() => {
    setNameValidity(validateName(name))
  }, [name])

  return (
    <div>
      <h1>{ !nameFieldError ? 'Name is  VALID' : nameFieldError  }</h1>
      <input type={'text'} value={name} onChange={onNameChange} />
    </div>
  )
}
