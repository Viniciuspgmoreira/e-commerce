import React from 'react'
import './sign-in.styles.scss'
import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error.message)
    }
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
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          ></FromInput>

          <div className="buttons">
            <CustomButton isGoogleSignIn={false} type="submit">
              Sign in
            </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Google Sign in
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
