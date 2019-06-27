import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      skillLevel: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // const target = e.target;
    // const value = target.value;
    // const name = target.name;
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // call addAttendd function from App
  // make sure to pass the function down from App
  handleSubmit() {
    this.props.addAttendee(this.state);
  }

  render() {
    return (
      <div>
        <h2>Register Attendee</h2>
      <form>


        <label>First Name: </label>
          <input
            type="text"
            id="firstName"
            onChange={this.handleChange}
          />

        <label>Last Name: </label>
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
          />

        <label>Email: </label>
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
          />

        <label>Skill Level: </label>
          <select onChange={this.handleChange} id={"skillLevel"} >
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>

        <button
          onClick={this.handleSubmit}>
          REGISTER
        </button>
      </form>
      </div>
    );
  }
}

export default Form;