import { useRef } from "react";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <form
      className="w-50 m-auto"
      onSubmit={async (e) => {
        e.preventDefault();

        const user = {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        };

        console.log(user);
      }}
    >
      <div className="form-group mb-3">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          className="form-control"
          id="username"
          ref={usernameRef}
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
