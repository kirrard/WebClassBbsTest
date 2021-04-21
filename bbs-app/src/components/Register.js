import React, { Component } from "react";

class Register extends Component {
  state = {
    id: "",
    password: "",
    name: "",
    phone: "",
    email: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      id: "asdf",
      password: "",
      name: "",
      phone: "",
      email: "",
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        아이디<input onChange={this.handleChange} name="id"></input>
        <br></br>
        비밀번호<input onChange={this.handleChange} name="password"></input>
        <br></br>
        전화번호<input onChange={this.handleChange} name="phone"></input>
        <br></br>
        이름<input onChange={this.handleChange} name="name"></input>
        <br></br>
        이메일<input onChange={this.handleChange} name="email"></input>
        <br></br>
        <button>확인</button> <button>취소</button>
      </form>
    );
  }
}

export default Register;
