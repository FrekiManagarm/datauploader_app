export default {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    width: "100%",
    height: "100%",
    padding: "10px 12px",
    gap: "7px",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
  },
  labels: {
    display: "flex",
    gap: "4px",
  },
  label: {
    color: "#767d85",
    fontWeight: "500",
    display: "flex",
  },
  label_done: {
    color: "#55bbd2",
  },
  pending: {
    animation: "colorAnimation 2s ease-in infinite",
  },
  "@keyframes colorAnimation": {
    from: {
      color: "#767d85",
    },
    "50%": {
      color: "#55bbd2",
    },
    to: {
      color: "#767d85",
    },
  },
  progress: {
    width: "100%",
    background: "#f3fafc",
    borderRadius: "50px",
    height: "6px",
    display: "flex",

    figure: {
      transition: "width 0.6s linear",
      display: "block",
      height: "100%",
      background: "#55bbd2",
      borderRadius: "50px",
    },
  },
};
