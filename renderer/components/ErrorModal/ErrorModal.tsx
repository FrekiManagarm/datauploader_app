import { Modal, Typography } from '@mui/material'
import closeIcon from '../../../../resources/images/close_icon.png'
import removeFolderImage from '../../../../resources/images/remove_folder_img.png'
import styles from './styles'
import { css } from '@emotion/css'
import React from 'react'

type ErrorModalProps = {
  open: boolean;
  onClose: () => void;
  loading: boolean;
}

const ErrorModal = ({ open, onClose, loading }: ErrorModalProps) => {
  const handleClose = () => {
    if (loading) return

    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            <button className={css(styles.close_icon)} onClick={onClose}>
              <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
            </button>
            <img className={css(styles.remove_img)} src={removeFolderImage.src} alt={'remove'} />
            <Typography className={css(styles.title)} variant={'h3'}>
              Error you haven&apos;t credentials to send files to Singulair
            </Typography>
            <Typography className={css(styles.subtitle)} variant={'h3'}>
              Try to contact Singulair for more informations
            </Typography>
            <div className={css(styles.buttons)}>
              <button disabled={loading} onClick={onClose} className={css(styles.cancel_btn)}>
                <Typography className={css(styles.cancel_btn_title)} variant={'h3'}>
                  Cancel
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </>
    </Modal>
  )
}

export { ErrorModal }