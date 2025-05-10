import React, { useState } from "react";
import "./SubmitBody.css";
import { useNavigate } from "react-router-dom";

function SubmitBody() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/eventpage");
      setIsLoading(false);
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="submitBody">
        <div className="submitBody-info">
          <input
            type="text"
            value={name}
            placeholder="Event Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            value={password}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="submitBody-button">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SubmitBody;
