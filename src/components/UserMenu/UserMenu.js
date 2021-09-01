import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import Button from "../Button";
import { HiUser } from "react-icons/hi";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  svg: {
    marginRight: 12,
    color: "var(--title-color)",
    filter: "drop-shadow(1px 0 7px var(--secondary-color))",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: "var(--title-color)",
    textShadow: "var(--secondary-color) 1px 0 10px",
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <HiUser style={styles.svg} />
      <span style={styles.name}>Welcome, {name}!</span>

      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
}
