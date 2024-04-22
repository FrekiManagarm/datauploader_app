import { Modal, Typography, Button } from "@mui/material";
import closeIcon from '../../../../resources/images/close_icon.png';
import DroneIcon from '../../../../resources/images/offline_drone.svg';
import React, { useEffect, useState } from "react";
import useOnline from "../../hooks/useOnline";
import styles from './styles';
import { css } from "@emotion/css";

const OfflineModal = () => {
  const isOnline = useOnline();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(!isOnline)
  }, [isOnline]);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.container)}>
          <button className={css(styles.close_icon)} onClick={onClose}>
            <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
          </button>

          <DroneIcon />

          <Typography className={css(styles.title)} variant={'h3'}>
            No connection
          </Typography>

          <Typography color="secondary.light" align="left">
            Check your connection and continue to upload
          </Typography>

          <div className={css(styles.buttons)}>
            <Button onClick={onClose} variant="contained" color="primary" fullWidth>
              Ok
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export { OfflineModal }