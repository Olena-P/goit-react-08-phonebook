import React from "react";
import image from "../images/welcome.png";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "500px",
  },
};

export default function HomeView() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={image} alt="welcome page" />
    </div>
  );
}
