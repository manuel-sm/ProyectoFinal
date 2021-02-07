class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
  }

}

export default Component;