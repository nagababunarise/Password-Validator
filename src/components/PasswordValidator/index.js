import {useState} from 'react'

import {
  BgContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  InputElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(true)

  const onChangeHandle = e => {
    setPassword(e.target.value)
    if (password.length >= 7) {
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <BgContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          type="password"
          value={password}
          onChange={onChangeHandle}
        />
        {error ? (
          <p style={{color: 'red', fontSize: '10px', paddingTop: '5px'}}>
            Your password must be at least 8 characters
          </p>
        ) : null}
      </PasswordContainer>
    </BgContainer>
  )
}
export default PasswordValidator
