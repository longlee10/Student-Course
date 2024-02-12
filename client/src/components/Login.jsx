import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  return (
    <form
      className="w-50 m-auto"
      onSubmit={async (e) => {
        e.preventDefault();

        const user = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        await axios.post("http://localhost:5000/auth", user);

        navigate("/courses");
      }}
    >
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          ref={passwordRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
