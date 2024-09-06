import { Component } from "react";
import Context from "./Context";
import Service from "./WrappedAxious";

const API_URL = process.env.REACT_APP_API_URL;

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: new Service(),
      isLoggedIn: true
    };
  }

  render() {
    const handlers = {

    };
    return (
      <Context.Provider value={{ globalstate: this.state, handlers: handlers }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
