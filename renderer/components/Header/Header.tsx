import { routes } from '../../constants/routes'
import useOnline from '../../hooks/useOnline'
import emptyAvatar from '../../../../resources/images/empty_avatar.png'
import styles from './styles';
import { css } from '@emotion/css';
// import { getUserAvatar } from './utils'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button, Typography } from '@mui/material'
import { useAuth } from "../../contexts";
import OfflineIcon from '../../../../resources/images/no-connection.svg';
import React, { useMemo } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router';

const Header = () => {
  const isOnline = useOnline()

  const navigate = useRouter()
  const { user, isLoggedIn } = useAuth()

  const handleLogout = () => {
    // resetState()
    localStorage.clear()
    navigate.push(routes.login)
  }

  const userName = user?.firstname ? `${user.firstname} ${user.lastname}` : 'user'

  // const avatar = isOnline ? getUserAvatar(user?.avatar) : emptyAvatar

  const Icon = useMemo(() => {
    return isLoggedIn ? LogoutIcon : LoginIcon
  }, [isLoggedIn])

  return (
    <div className={css(styles.header)}>
      <div className={css(styles.user)}>
        <img className={css(styles.avatar)} src={emptyAvatar.src} alt="user avatar" />
        <Typography>
          Hello, <strong>{userName.toLowerCase()}</strong>
        </Typography>

        {!isOnline && (
          <div className={css(styles.noConnection)}>
            <OfflineIcon />
            <Typography color="error.dark" variant={'body2'}>
              No connection
            </Typography>
          </div>
        )}
      </div>

      <Button size="small" className={css(styles.logOut)} onClick={handleLogout}>
        <Icon color="secondary" />
        <Typography variant="body1">{isLoggedIn ? 'Log out' : 'Log in'}</Typography>
      </Button>
    </div>
  )
}

export { Header }