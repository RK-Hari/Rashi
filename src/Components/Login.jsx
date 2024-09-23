import React, { useState } from "react";
import '../Styles/Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [php, setPhp] = useState(false);  // PHP is false by default

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { username, password };

    try {
      if (!php) {
        const response = await axios.post("http://localhost:8080/users/add", formData);
        console.log("User added:", response.data);
      } else {
        const response = await axios.post("https://your-api-url.com/login", { username, password });
        console.log("Login successful:", response.data);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome, Please Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>

        <br/><br/>
        <div>
          <input
            type="checkbox"
            id="php"
            checked={php} 
            onChange={() => setPhp(!php)} 
          />
          <label htmlFor="php">PHP</label>
        </div>
      </form>
    </div>
  );
};

export default Login;
