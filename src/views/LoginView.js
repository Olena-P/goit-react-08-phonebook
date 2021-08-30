import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn } from "../redux/auth/auth-operations";
import Button from "../components/Button";

const styles = {
  form: {
    width: 350,
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    backgroundColor: "var(--secondary-color)",
    padding: 25,
  },
  label: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginCottom: 20,
    alignItems: "center",
    fontSize: 18,
    fontWeight: 400,
    color: "var(--title-color)",
    marginBottom: 10,
  },
  input: {
    width: 200,
    padding: 10,
    borderRadius: 10,
    border: "none",
    outline: "none",
    fontSize: 14,
  },
};

export default function LoginView({ onClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("fill out the form");
      return;
    }

    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="olenapavliuk1@gmail.com"
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="********"
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <Button onClick={onClick}>Log in</Button>
      </form>
    </div>
  );
}
