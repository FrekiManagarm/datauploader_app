import React from 'react'
import { FormControl, InputLabel, MenuItem, Modal, Select, Typography, Button, TextField } from '@mui/material'
import closeIcon from '../../../../resources/images/close_icon.png'
import CommentIcon from "../../../../resources/images/comment_drone.svg"
import { Controller, useForm } from 'react-hook-form'
import styles from './styles'
import { css } from '@emotion/css'

const FAILED_INSPECTION_REPORT = 'FAILED_INSPECTION_REPORT'
const GPS_COORDINATES = 'GPS_COORDINATES'
const OTHER = 'OTHER'

const CommentType = {
  [FAILED_INSPECTION_REPORT]: {
    label: 'Failed Inspection Report',
    value: FAILED_INSPECTION_REPORT,
  },
  [GPS_COORDINATES]: {
    label: 'GPS coordinates',
    value: GPS_COORDINATES,
  },
  [OTHER]: {
    label: 'Other',
    value: OTHER,
  },
}

type CommentModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  defaultValues?: {
    type: string;
    body: {};
  };
}

const CommentModal = ({ onClose, onSubmit, defaultValues }: CommentModalProps) => {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      type: defaultValues?.type ?? '',
      body: defaultValues?.body ?? '',
    },
  })

  const type = watch('type')
  const body = watch('body')

  const isDisabled = !type || !body

  return (
    <Modal open onClose={onClose}>
      <>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.container)}>
            <button className={css(styles.close_icon)} onClick={onClose}>
              <img className={css(styles.close_icon_img)} src={closeIcon.src} alt={'close'} />
            </button>
            <CommentIcon />

            <Typography className={css(styles.title)} variant={'h3'}>
              Leave a comment
            </Typography>

            <form className={css(styles.form)} onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="select">Cause type</InputLabel>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Select value={value} onChange={onChange} label="Cause type" labelId="select">
                      {Object.values(CommentType).map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  defaultValue=""
                />
              </FormControl>

              <TextField
                fullWidth
                label="Leave a comment"
                variant="outlined"
                multiline
                rows={3}
                {...register('body', { required: true })}
              />

              <div className={css(styles.buttons)}>
                <Button onClick={onClose} type="submit" variant="outlined" color="primary" fullWidth>
                  Cancel
                </Button>
                <Button type="submit" disabled={isDisabled} variant="contained" color="primary" fullWidth>
                  Leave a comment
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    </Modal>
  )
}

export { CommentModal }
