import React from "react";

import FormInput from "../form-input/formInput";
import CostumButton from "../custom-button/customButton";

import "./signIn.scss";

class SignIn extends React.Component {
  constructor() {
    super ()

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: "", passwoord: ""})
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render () {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CostumButton type="submit">Sign In</CostumButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
