export default {
  upload_page: {
    backgroundImage:
      "url('../../../../resources/images/drone_image_upload.png')",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    padding: "12px 16px",
    gap: "16px",

    "&.disabled": {
      pointerEvents: "none",
      opacity: "0.4",
    },
  },
  side_section: {
    maxWidth: "252px",
    width: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
  },
  upload_folders_table_header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search_input: {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    height: "32px",
    padding: "0 !important",
  },
  search_root: {
    width: "200px",
    borderRadius: "6px",
    paddingLeft: "12px",
  },
  search_notched_outline: {
    border: "1px solid #a3a8ae",
  },
  search_adorned: {
    marginRight: "4px",
  },
  main: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column" as "column",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  note_wrapper: {
    padding: "16px",
    backgroundColor: "#fff",
    borderRadius: "12px",
  },
  main_title: {
    fontWeight: "700",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
    padding: "16px 0 16px 16px",
    gap: "12px",
    height: "100%",
  },
  tables: {
    display: "flex",
    height: "100%",
    paddingRight: "16px",
    flexDirection: "column" as "column",
    gap: "24px",
    overflow: "auto",
  },
  table_wrapper: {
    display: "flex",
    flexDirection: "column" as "column",
    borderRadius: "12px",
    border: "1px solid #dfe1e2",
  },
  table_with_title: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "12px",
  },
  table_row: {
    display: "grid",
    height: "48px",
    gridTemplateColumns: "1fr 120px 1fr 72px",

    "&:not(:last-child)": {
      borderBottom: "1px solid #dfe1e2",
    },

    "> div": {
      display: "flex",
      alignItems: "center",
      height: "100%",

      "&:not(:first-child)": {
        borderLeft: "1px solid #dfe1e2",
      },
      paddingLeft: "12px",

      "&:last-child": {
        justifyContent: "center",
        paddingLeft: "0",
      },

      h3: {
        fontWeight: "500",
        fontSize: "12px",
        color: "#48515d",
      },
      h2: {
        fontWeight: "500",
        fontSize: "14px",
      },
    },
    "&:hover": {
      "&:not(first-child)": {
        backgroundColor: "#f3fafc",
      },
      "&:last-child": {
        borderRadius: "0 0 12px 12px",
      },
    },
  },
  archivation_table_row: {
    gridTemplateColumns: "48px 1fr 120px 1fr",
  },
  upload_table_row: {
    gridTemplateColumns: "16% 26% 1fr 32.3% 72px",
  },
  sorting_button: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderLeft: "1px solid #dfe1e2",
    paddingLeft: "12px",

    h3: {
      fontWeight: "500",
      fontSize: "12px",
      color: "#48515d",
    },

    svg: {
      marginLeft: "6px",
      width: "16px",
      height: "16px",
      fill: "rgba(0, 0, 0, 0.57)",
    },
  },
  table_header: {
    "&:not(:last-child)": {
      borderRadius: "12px 12px 0 0",
    },
    "&:last-child": {
      borderRadius: "12px",
    },
    div: {
      "&:last-child": {
        justifyContent: "flex-start",
        paddingLeft: "12px",
      },
    },
    backgroundColor: "#f2f2f3",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    tr: {
      "&:not(:last-child)": {
        borderBottom: "1px solid #dfe1e2",
      },
    },
    "th, td": {
      height: "48px",
      fontFamily: "Inter, sans-serif",
      "&:not(:last-child)": {
        borderRight: "1px solid #dfe1e2",
      },
    },
    th: {
      textTransform: "capitalize",
      fontSize: "12px",
      lineHeight: "130%",
      letterSpacing: "0.15px",
      color: "#48515d",
      backgroundColor: "f2f2f3",
      textAlign: "left" as "left",
      fontWeight: "500",
      paddingLeft: "12px",
      "&:first-child": {
        borderRadius: "12px 0 0 0",
      },
      "&:last-child": {
        borderRadius: "0 12px 0 0",
      },
    },
  },
  checkbox_cell: {
    width: "48px",
    span: {
      margin: "0 auto",
    },
  },
  wtg_call: {
    width: "80px",
  },
  actions_cell: {
    width: "84px",
  },
  status_cell: {
    minWidth: "120px",
    width: "100%",
    maxWidth: "240px",
  },
  play_pause_button: {
    "&:hover": {
      backgroundColor: "#55bbd21a",
      svg: {
        path: {
          fill: "#55bbd2",
        },
      },
    },
  },
  delete_button: {
    "&:hover": {
      backgroundColor: "#fef6f6",
      "> svg": {
        "> path": {
          fill: "#e41e1e",
        },
      },
    },
  },

  footer: {
    marginTop: "auto",
    display: "flex",
    width: "calc(100% + 16px)",
    marginLeft: "-16px",
    justifyContent: "flex-end",
    gap: "10px",
    borderTop: "1px solid #dfe1e2",
    padding: "12px 16px 0",
  },

  multi_button: {
    svg: {
      width: "16px",
      height: "16px",
      marginRight: "8px",
    },
  },
};
