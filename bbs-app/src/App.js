import "./App.css";
import React, { Component } from "react";
import Register from "./components/Register";

class App extends Component {
  state = {
    information: [{
      id: "",
      password: "",
      name: "",
      phone: "",
      email: "",
      }
    ]
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id:data.id, password: data.password, phone: data.phone, name: data.name, email:data.email})
    })
  }

  render() {
    const {information} =this.state;
    return (
      <div>
        <Register onCreate={this.handleCreate}></Register>
        {JSON.stringify(information)}
      </div>
    )}
}

export default App;
//회원가입
//목록 추가
//삭제 ->없어지게