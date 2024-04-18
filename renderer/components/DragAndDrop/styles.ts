export default {
  upload_form: {
    margin: "0 12px 12px",
    padding: "50px 100px",
    border: "2px dashed #a3a8ae",
    borderRadius: "6px",
    position: "relative" as "relative",

    input: {
      display: "none",
    },
  },
  drag_file_element: {
    position: "absolute" as "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
  },
  drag_and_drop_area: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    color: "black",

    p: {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "130%",
      textAlign: "center" as "center",
      letterSpacing: "0.15px",
      color: "#1a2634",

      span: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "130%",
        textAlign: "center" as "center",
        letterSpacing: "0.15px",
        color: "#48515d",
      },
    },
  },
  upload_button: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    width: "95px",
    height: "30px",
    border: "1px solid #55bbd2",
    borderRadius: "6px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.46px",
    color: "#55bbd2",
  },
  file_list: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
  },
  drop_container: {
    padding: "50px",
    display: "flex",
    justifyContent: "center",
  },
  folder_group: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
  },
  file_upload: {
    zIndex: "1",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.46px",
    color: "#55bbd2",
  },
  remove_folder_button: {
    zIndex: "1",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.46px",
    color: "#55bbd2",
  },
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    width: "100%",
    border: "2px dashed #a3a8ae",
    borderRadius: "6px",
    gap: "4px",
    padding: "24px 0",
  },
  filled_container: {
    padding: "30px 0",
    border: "2px solid #f3fafc",
    backgroundColor: "#f3fafc",
  },
  folder_icon: {
    width: "32px",
    height: "32px",
  },
  selected_folder: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "130%",
    margin: "3px 0",
  },
  drag_text: {
    fontSize: "14px",
    lineHeight: "130%",
  },
  drag_text_separator: {
    fontWeight: "400",
    fontSize: "12px",
  },
  browse_button: {
    border: "1px solid #55bbd2",
    borderRadius: "6px",
    background: "transparent",
    padding: "4px 10px",
    zIndex: "2",
  },
  remove_button: {
    marginTop: "auto",
  },
  browse_button_text: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "22px",
    color: "#55bbd2",
  },
};