import { CircularProgress, Modal, Typography } from '@mui/material'
import sampleFolder from '../../../../resources/images/sampleFolder.png'
import styles from './styles';
import { css } from '@emotion/css';
import React from 'react'

type CheckErrorModalProps = {
  open: boolean;
  onClose: () => void;
  onRemove: () => void;
  loading?: boolean;
}

const CheckErrorModal = ({ open, onClose, onRemove, loading }: CheckErrorModalProps) => {
  const handleClose = () => {
    if (loading) return

    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            <Typography className={css(styles.title)} variant={'h3'}>
              Architecture Folder Error
            </Typography>
            <Typography className={css(styles.subtitle)} variant={'h3'}>
              Your folder are not set up correctly.
              <br />
              Please check the example above, make the perfect folder and try again.
            </Typography>
            <img className={css(styles.sample_folder_img)} src={sampleFolder.src} alt={'remove'} />
            <div className={css(styles.buttons)}>
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
                    Remove folder and try again
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

export { CheckErrorModal }
