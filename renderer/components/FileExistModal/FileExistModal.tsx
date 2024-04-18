import styles from './styles';
import { css } from '@emotion/css';
import { CircularProgress, Modal, Typography, Button } from '@mui/material'
import closeIcon from '../../../../resources/images/close_icon.png'
import CommentIcon from '../../../../resources/images/warning_drone.svg'
import React from 'react'

type FileExistModalProps = {
  loading: boolean;
  onClose: () => void;
  open: boolean;
  folders: any;
  onChooseOne: () => void;
  onChooseAll: () => void;
}

const FileExistModal = ({ loading, onClose, open, folders, onChooseOne, onChooseAll }: FileExistModalProps) => {
  const isMoreThanOneFolder = folders.length > 1

  const handleClose = () => {
    if (!loading) {
      onClose()
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            <button className={css(styles.close_icon)} onClick={handleClose}>
              <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
            </button>
            <CommentIcon />

            <Typography className={css(styles.title)} variant={'h3'}>
              Target {isMoreThanOneFolder ? 'files' : 'file'} already exist
            </Typography>

            {isMoreThanOneFolder ? (
              <Typography align="center" className={css(styles.subtitle)}>
                &quot;{folders[0]}&quot; and {folders.length - 1} more folders already exist. Do you want to overwrite
                it?
              </Typography>
            ) : (
              <Typography align="center" className={css(styles.subtitle)}>
                &quot;{folders[0]}&quot; folder already exist. Do you want to overwrite it?
              </Typography>
            )}

            <Typography align="center" className={css(styles.hint)}>
              Overwriting a folder can&apos;t be undone
            </Typography>

            {loading ? (
              <div className={css(styles.loadingWrapper)}>
                <CircularProgress />
              </div>
            ) : (
              <div className={css(styles.buttons)}>
                <Button onClick={onClose} variant="outlined" color="primary" fullWidth>
                  Cancel
                </Button>
                {isMoreThanOneFolder ? (
                  <>
                    <Button onClick={onChooseAll} variant="contained" fullWidth>
                      Overwrite ALL folders
                    </Button>
                    <Button onClick={onChooseOne} variant="contained" fullWidth>
                      Overwrite ONLY this folder
                    </Button>
                  </>
                ) : (
                  <Button onClick={onChooseAll} variant="contained" fullWidth>
                    Yes
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    </Modal>
  )
}

export { FileExistModal }
