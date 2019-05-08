import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav.js";
import Home from "./Pages/Home/Home.js";
import Cities from "./Pages/Cities/Cities.js";
import BecameAMember from "./Pages/Member/Create/Create.js";
import Login from "./Pages/Member/Login/Login.js";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer.js";

import "./App.css";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div id="page-wrap">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Cities" component={Cities} />
              <Route path="/BecomeAMember" component={BecameAMember} />
              <Route path="/Login" component={Login} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
