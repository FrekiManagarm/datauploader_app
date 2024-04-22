import React from 'react'
import { CircularProgress, Modal, Typography } from '@mui/material'
import closeIcon from '../../../../resources/images/close_icon.png'
import removeFolderImage from '../../../../resources/images/remove_folder_img.png'
import styles from './styles';
import { css } from '@emotion/css';

type RemoveModalProps = {
  open: boolean;
  onClose: () => void;
  onRemove: () => void;
  loading?: boolean;
}

const RemoveModal = ({ open, onClose, onRemove, loading }: RemoveModalProps) => {
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
              Remove a folder
            </Typography>
            <Typography className={css(styles.subtitle)} variant={'h3'}>
              Are you sure you want to remove folder?
              <p className={css(styles.warn)}>Removing a folder can&apos;t be undone</p>
            </Typography>
            <div className={css(styles.buttons)}>
              <button disabled={loading} onClick={onClose} className={css(styles.cancel_btn)}>
                <Typography className={css(styles.cancel_btn_title)} variant={'h3'}>
                  Cancel
                </Typography>
              </button>
              <button
                onClick={() => {
                  onRemove()
                  onClose()
                }}
                disabled={loading}
                className={css(styles.remove_btn)}
              >
                {loading ? (
                  <CircularProgress size={16} style={{ color: '#fff', margin: 'auto' }} />
                ) : (
                  <Typography className={css(styles.remove_btn_title)} variant={'h3'}>
                    Remove folder
                  </Typography>
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    </Modal>
  )
}

export { RemoveModal }