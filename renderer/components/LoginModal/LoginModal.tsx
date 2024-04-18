import { Modal, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import closeIcon from '../../../../resources/images/close_icon.png'
import loginModalImage from '../../../../resources/images/login_modal.png';
import React, { useState } from 'react'
import { routes } from '../../constants/routes'
import LoginForm from '../Login/LoginForm'
import RecoveryForm from '../Login/RecoveryForm'
import styles from './styles';
import { css } from '@emotion/css';
import Link from 'next/link';

type LoginModalProps = {
  open: boolean;
  onClose: () => void
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [path, setPath] = useState('index') // 'index' | 'login' | 'restore'

  return (
    <Modal open={open} onClose={onClose}>
      <div className={css(styles.wrapper)}>
        <div className={css(styles.container)}>
          <button className={css(styles.close_icon)} onClick={onClose}>
            <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
          </button>
          {path === 'index' && (
            <>
              <img className={css(styles.remove_img)} src={loginModalImage.src} alt={'log in'} />
              <Typography className={css(styles.title)} variant={'h3'}>
                Log in please
              </Typography>
              <Typography className={css(styles.warn)} variant={'h3'}>
                In order to upload folders you must log in
              </Typography>
              <div className={css(styles.buttons)}>
                <Button component={Link} to={routes.home} variant="outlined" color="primary" fullWidth>
                  Cancel
                </Button>
                <Button onClick={() => setPath('login')} variant="contained" color="primary" fullWidth>
                  Log in
                </Button>
              </div>
            </>
          )}
          {path === 'login' && <LoginForm isModal onRecoveryModal={() => setPath('restore')} />}
          {path === 'restore' && <RecoveryForm isModal onBackToLoginModal={() => setPath('login')} />}
        </div>
      </div>
    </Modal>
  )
}

export { LoginModal }