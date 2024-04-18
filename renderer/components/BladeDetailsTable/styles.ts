export default {
  WTGContainer: {
    width: "100%",
    margin: "10px 0 10px 16px",
    padding: "16px 20px",
    display: "flex",
    flexDirection: "column" as "column",
    rowGap: "10px",
    backgroundColor: "white",
    borderRadius: "24px",
    color: "black",
  },
  wtgHeader: {
    display: "flex",
    columnGap: "20px",
    marginBottom: "20px",
    alignItems: "center",

    p: {
      fontWeight: "bold",
      cursor: "pointer",
    },

    img: {
      width: "20px",
      height: "20px",
    },
  },
  blade_table: {
    width: "90%",
    border: "none",
    borderCollapse: "collapse" as "collapse",

    thead: {
      borderRadius: "10px",

      th: {
        height: "48px",
        paddingLeft: "12px",
        backgroundColor: "#f2f2f3",
        border: "1px solid #dfe1e2",
        textAlign: "left" as "left",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "130%",
        letterSpacing: "0.15px",
        color: "#48515d",
      },
    },

    tbody: {
      td: {
        height: "48px",
        paddingLeft: "12px",
        border: "1px solid #dfe1e2",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "130%",
        letterSpacing: "0.15px",
        color: "#1a2634",
      },
    },
  },
  bladeIssues: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
  },
  issue: {
    display: "flex",
    flexDirection: "row" as "row",
  },
};
