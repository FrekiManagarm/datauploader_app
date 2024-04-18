import bottomImage from "../../../resources/images/bg_image_home.svg";

export default {
  wrap: {
    boxSizing: "border-box" as "border-box",
    display: "flex",
    height: "100vh",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "36px 64px",
    width: "50%",
    backgroundColor: "#F8FCFD",
    backgroundImage: `url(${bottomImage})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "50%",
  },
  wrapper: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    height: "100%",
    maxWidth: "345px",
    width: "100%",
    marginTop: "auto",
    "& > img": {
      marginLeft: "auto",
    },
  },
  formWrapper: {
    margin: "auto",
  },
  form: {
    width: "100%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "16px",
  },
  link: {
    display: "flex",
    justifyContent: "center",
  },
};
