export default {
  wrapper: {
    width: "auto",
    height: "auto",
    background: "#ffffff",
    borderRadius: "16px",
    position: "absolute" as "absolute",
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
  sample_folder_img: {
    width: "590px",
    height: "360px",
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
    textAlign: "center" as "center",
  },
  buttons: {
    width: "100%",
    display: "flex",
    gap: "8px",

    button: {
      cursor: "pointer",
      transition: "opacity .3s",

      "&:disabled": {
        opacity: "0.7",
        cursor: "default",
      },
    },
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
