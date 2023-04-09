import React from "react";
import "./App.css";
import Login from "./components/Login";
import Hello from "./components/Hello";

class App extends React.Component {
  state = {
    isAuthenticated: false,
    message: "",
  };

  handleLogin = (message) => {
    this.setState({ isAuthenticated: true, message });
  };

  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? (
          <Hello message={this.state.message} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;