export default {
  wrapper: {
    width: "734px",
    background: "#ffffff",
    borderRadius: "16px",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
  title: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "150%",
  },
  subtitle: {
    fontWeight: "600",
  },
  hint: {
    color: "var(--grays-gray-500, #48515d)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
  },
  warn: {
    marginTop: "8px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#48515d",
  },
  buttons: {
    width: "100%",
    display: "flex",
    gap: "8px",
  },
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
  },
};
