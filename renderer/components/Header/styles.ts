export default {
  header: {
    boxSizing: "border-box" as "border-box",
    display: "flex",
    width: "100%",
    padding: "16px 14px",
    justifyContent: "space-between",
    borderBottom: "1ps solid #dfe1e2",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "14px",

    strong: {
      display: "inline-block",
      textTransform: "capitalize" as "capitalize",
    },
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover" as "cover",
    border: "1px solid #d1d4d6",
  },
  logOut: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  noConnection: {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};
