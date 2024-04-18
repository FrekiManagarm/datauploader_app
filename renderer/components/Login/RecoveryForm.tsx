import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { recoverySchema } from '../../../lib/credentialsSchema';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { NoteBox } from '../NoteBox/NoteBox';
import { fontWeight } from '../../theme/theme';
import Link from 'next/link';
import { routes } from '../../constants/routes';
import MuiLink from '@mui/material/Link';
import { css } from '@emotion/css';
import styles from './styles';

type RecoveryFormProps = {
  isModal?: boolean;
  onBackToLoginModal?: () => void;
}

const RecoveryForm = ({ isModal = false, onBackToLoginModal }: RecoveryFormProps) => {
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(recoverySchema)
  })

  const submit = async (values: any) => {
    setLoading(true);

    try {

    } catch (err: any) {
      if (err.response?.data?.ERROR.includes('invalid email')) {
        setError('email', { message: "Email is not found" })
      }
    } finally {
      setLoading(false)
    }
  }

  if (isSent) {
    return (
      <div className={css(styles.form)}>
        <div className={css(styles.formContainer)}>
          <Typography align={isModal ? 'center' : 'left'} variant='h1'>
            Password recovery
          </Typography>

          <NoteBox type="success" align={isModal ? 'center' : 'flex-start'}>
            <Typography variant="h5" align={isModal ? 'center' : 'left'}>
              Email has been sent
            </Typography>
            <Typography variant="body2" align={isModal ? 'center' : 'left'} color="secondary.light">
              We sent email to <b>{getValues('email')}</b>. Check&nbsp;your inbox and click on the confirmation link
              to&nbsp;continue.
            </Typography>
            <Typography
              fontWeight={fontWeight.BOLD}
              variant="body2"
              align={isModal ? 'center' : 'left'}
              color="secondary.light"
            >
              <b>You should use Fieldops™ Mobile App to change your password</b>
            </Typography>
          </NoteBox>

          {isModal ? (
            <Button fullWidth onClick={onBackToLoginModal} variant={'text'}>
              Back to Log in
            </Button>
          ) : (
            <Button component={Link} to={routes.login} disabled={loading} variant="outlined" color="primary" fullWidth>
              Back to Log in
            </Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <form className={css(styles.form)}>
      <div className={css(styles.formContainer)}>
        <Typography align='center' variant='h1'>
          Password recovery
        </Typography>

        <Typography align={'center'}>
          Lost your password? Please enter your email address. You will receive a link to create a new password via
          email
        </Typography>

        <NoteBox type="warn" align={isModal ? 'center' : 'flex-start'}>
          <Typography variant="h5" align={isModal ? 'center' : 'left'}>
            Important note
          </Typography>
          <Typography variant="body2" align={isModal ? 'center' : 'left'} color="secondary.light">
            You should use Fieldops™ Mobile App to change your password
          </Typography>
        </NoteBox>

        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <Button disabled={loading} type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
        <Grid item xs={12} className={css(styles.link)}>
          {isModal ? (
            <Button fullWidth onClick={onBackToLoginModal} variant={'text'}>
              Back to Log in
            </Button>
          ) : (
            <MuiLink component={Link} to={routes.login} variant="body1">
              Back to Log in
            </MuiLink>
          )}
        </Grid>
      </div>
    </form>
  )
}

export default RecoveryForm