import React from 'react'
import './sign-in.styles.scss'
import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FromInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          ></FromInput>

          <FromInput
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          ></FromInput>

          <div className="buttons">
            <CustomButton google={false} type="submit">
              Sign in
            </CustomButton>
            <CustomButton google={true} onClick={signInWithGoogle}>
              <i className="fab fa-google"></i>
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
