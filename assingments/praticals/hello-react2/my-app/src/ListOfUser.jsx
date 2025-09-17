import React, { Component } from "react";

class ListOfUser
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],   // store fetched data
      loading: true,
      error: null
    };
  }

  // Fetch data when component mounts
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // sample API
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data,
          loading: false
        })
      )
      .catch((error) =>
        this.setState({
          error: "Failed to fetch data",
          loading: false
        })
      );
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <h3>Loading users...</h3>;
    }

    if (error) {
      return <h3 style={{ color: "red" }}>{error}</h3>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>User List (Fetched from API)</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ margin: "8px 0" }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListOfUser;
