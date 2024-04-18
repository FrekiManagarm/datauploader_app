export default {
  wrapper: {
    display: "flex",
    flexDirection: "column" as "column",
    overflow: "auto",
    borderRadius: "12px",
    height: "calc(100% - 33px)",
  },
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    overflow: "auto",
  },
  table_wrapper: {
    borderRadius: "12px",
    border: "1px solid #dfe1e2",
  },
  table: {
    "td, th": {
      fontFamily: "Inter, sans-serif",

      "&:not(:last-child)": {
        borderRight: "1px solid #dfe1e2",
      },
    },

    th: {
      fontSize: "12px",
      lineHeight: "130%",
      letterSpacing: "0.15px",
      color: "#48515d",
      height: "48px",
      paddingLeft: "12px",
      backgroundColor: "#f2f2f3",
      textAlign: "left" as "left",
      fontWeight: "500",

      "&:last-child": {
        width: "100%",
        borderRadius: "0 12px 0 0",
      },

      "&:first-child": {
        borderRadius: "12px 0 0 0",
      },
    },

    td: {
      fontSize: "14px",
      letterSpacing: "0.15px",
      color: "#1a2634",
      height: "48px",
      paddingLeft: "12px",
      fontStyle: "normal",
      fontWeight: "500",
    },
  },
  row_disabled: {
    cursor: "not-allowed",
  },
  row_enabled: {
    cursor: "pointer",
  },
  footer: {
    marginTop: "auto",
    width: "calc(100% + 32px)",
    marginLeft: "-16px",
    display: "flex",
    justifyContent: "flex-end",
    borderTop: "1px solid #dfe1e2",
    padding: "12px 16px 0",
  },
  uploadButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    span: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.4px",
      color: "#48515d",
    },
  },
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(-360deg)",
    },
  },
  pending: {
    animation: "rotation 2s linear infinite",
  },
  comment: {
    path: {
      fill: "red",
    },
  },
  emptyBadge: {
    backgroundColor: "#f2f2f3",
    border: "1px solid #a3a8ae",

    div: {
      backgroundColor: "#48515d",
    },

    h5: {
      color: "#48515d",
    },
  },
};
