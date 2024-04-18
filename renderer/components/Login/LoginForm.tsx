import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import MuiLink from '@mui/material/Link';
import { TextField, Typography, Grid, FormControlLabel, Button, IconButton, InputAdornment, Checkbox } from '@mui/material';
import { loginSchema } from '../../../lib/credentialsSchema';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { css } from '@emotion/css';
import styles from './styles';
import Link from 'next/link';

import { useAuth } from '../../contexts';
import { routes } from '../../constants/routes';
import { loginRequest, getUserInfo } from '../../services/auth.service';

type LoginFormProps = {
  isModal?: boolean;
  onRecoveryModal?: () => void
}

const LoginForm = ({ isModal = false, onRecoveryModal }: LoginFormProps) => {
  const { updateState } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordExpired, setIsPasswordExpired] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const submit = async (values: { email: string, password: string }) => {
    setLoading(true)

    try {
      // TODO method for handling login for the app
      const authInfo = await loginRequest(values);
      const userInfo = await getUserInfo();

      console.log({ authInfo, userInfo });

      updateState({
        ...authInfo,
        user: userInfo,
        isLoggedIn: true,
      })
    } catch (e: any) {
      if (e?.response?.status === 403) {
        setError('password', { message: "Your password has expired" })
        setIsPasswordExpired(true);
      }
      if (e.response?.data?.error === "invalid_credentials") {
        setError('email', { type: 'custom' })
        setError('password', { message: 'Incorrect email or password' })
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={css(styles.form)}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography
            style={isModal ? { width: 'fit-content', margin: '0 auto 16px' } : undefined}
            sx={{ mb: 2 }}
            variant="h1"
          >
            Log in
          </Typography>
          <TextField
            // css={styles}
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...register('email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register('password')}
          />
        </Grid>
        {/* {!isPasswordExpired && (
          <Grid sx={isModal ? { ml: 1.5 } : undefined} item xs={12}>
            <FormControlLabel control={<Checkbox {...register('rememberMe')} />} label="Remember me" />
          </Grid>
        )} */}
        <Grid item xs={12}>
          {isPasswordExpired ? (
            isModal ? (
              <Button onClick={onRecoveryModal} variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                Reset Password
              </Button>
            ) : (
              <Button
                component={Link}
                to={routes.passwordRecovery}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Reset Password
              </Button>
            )
          ) : (
            <Button disabled={loading} type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
              Log in
            </Button>
          )}
          {isPasswordExpired ? undefined : isModal ? (
            <Button fullWidth variant={'text'} onClick={onRecoveryModal} color="primary">
              Forgot your password?
            </Button>
          ) : (
            <Button component={Link} to={routes.home} disabled={loading} variant="outlined" color="primary" fullWidth>
              Continue without log in
            </Button>
          )}
        </Grid>
        {!isModal && !isPasswordExpired && (
          <Grid item xs={12} className={css(styles.link)}>
            <MuiLink component={Link} to={routes.passwordRecovery} variant="body1">
              Forgot your password?
            </MuiLink>
          </Grid>
        )}
      </Grid>
    </form>
  )
}

export default LoginForm