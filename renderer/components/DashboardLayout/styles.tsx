export default {
  container: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    height: "100vh",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column" as "column",
    maxWidth: "190px",
    padding: "18px 15px",
    borderRight: "1px solid #dfe1e2",
  },
  main: {
    display: "flex",
    flexDirection: "column" as "column",
    height: "calc(100% - 65px)",
    flex: "1",
    background: "#f8fcfd",
  },
};
