export default {
  logo: {
    maxWidth: "100%",
  },
  listWrap: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    a: {
      padding: "9px 8px",
      marginBottom: "8px",
      fontFamily: "Inter",
      borderRadius: "6px",
      color: "#1a2634",
      fontWeight: "500",
      fontSize: "14px",
      textDecoration: "none",

      "&:hover": {
        backgroundColor: "#f3fafc",
      },

      "&.active": {
        color: "#55bbd2 !important",
        backgroundColor: "#f3fafc",

        ".MuiSvgIcon-root": {
          color: "#55bbd2 !important",
        },
      },
    },
  },
  linkContent: {
    display: "flex",
    alignItems: "center",
  },
  linkIcon: {
    marginRight: "8px",
  },
  bottomLogo: {
    marginTop: "auto",
    img: {
      width: "160px",
      height: "16px",
    },
  },
};
