export default {
  wrapper: {
    width: "370px",
    height: "360px",
    background: "#ffffff",
    borderRadius: "16px",
    position: "aboslute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column" as "column",
  },
  container: {
    position: "relative" as "relative",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    gap: "16px",
    padding: "24px",
  },
  close_icon: {
    position: "absolute" as "absolute",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    right: "12px",
    top: "12px",
  },
  close_icon_img: {
    width: "24px",
    height: "24px",
  },
  remove_img: {
    height: "156px",
    width: "140px",
  },
  title: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "150%",
  },
  subtitle: {
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "150%",
  },
  warn: {
    marginTop: "8px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#48515d",
  },
  buttons: {
    width: "100%",
    display: "flex",
    gap: "8px",

    button: {
      cursor: "pointer",
      transition: "opacity 0.3s",

      "&:disabled": {
        opacity: "0.7",
        cursor: "default",
      },
    },
  },
  cancel_btn: {
    width: "100%",
    border: "1px solid #55bbd2",
    borderRadius: "6px",
    backgroundColor: "transparent",
    padding: "5px 0",
  },
  cancel_btn_title: {
    color: "#55bbd2",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
  },
  remove_btn: {
    width: "100%",
    padding: "6px 0",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#e41e1e",
  },
  remove_btn_title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
  },
};
