import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--secondary-color)",
    backdropFilter: "blur(9px)",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
