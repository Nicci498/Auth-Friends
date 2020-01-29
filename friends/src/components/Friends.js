import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


class Friends extends React.Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    },
    friendsList: []
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  createFriend = e => {
    axiosWithAuth()
      .post("/friends", this.state.newFriend)
      .then(res => {
        console.log('createFriend', res);
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({ friendsList: res.data });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createFriend}>
          <h2>Add New Friend</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <button type="submit"> Add </button>
        </form>
        {this.state.friendsList.map(friends => {
          return (
            <div key={friends.id}>
              <p>Name: {friends.name}</p>
              <p>Email: {friends.email}</p>
              <p>Age: {friends.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Friends;
