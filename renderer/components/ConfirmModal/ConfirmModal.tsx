import { Modal, Typography, Button, Checkbox } from '@mui/material'
import closeIcon from '../../../../resources/images/close_icon.png'
import CommentIcon from '../../../../resources/images/comment_drone.svg'
import React, { useState } from 'react'
import './confirmmodal.css'
import styles from './styles';
import { css } from '@emotion/css'


type ConfirmModalProps = {
  onClose: () => void;
  onConfirm: () => void;
  open: boolean;
}

const ConfirmModal = ({ onClose, onConfirm, open }: ConfirmModalProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event: any) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            <button className={css(styles.close_icon)} onClick={onClose}>
              <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
            </button>
            <CommentIcon />

            <Typography className={css(styles.title)} variant={'h3'}>
              Confirm sending data
            </Typography>

            <div className="checkboxWrapper">
              <Checkbox style={{ padding: 0 }} checked={isChecked} onChange={handleChange} />
              <Typography color="secondary.light" align="left">
                I acknowledge the level of quality and have accepted to send the data despite the alerts shown by the
                application.
              </Typography>
            </div>

            <Typography color="secondary.light" align="center" className={css(styles.subtitle)}>
              Please note that Singulair may plan to rework bad quality images.
            </Typography>

            <div className={css(styles.buttons)}>
              <Button onClick={onClose} variant="outlined" color="primary" fullWidth>
                Cancel
              </Button>
              <Button disabled={!isChecked} onClick={onConfirm} variant="contained" color="primary" fullWidth>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </>
    </Modal>
  )
}

export { ConfirmModal }
