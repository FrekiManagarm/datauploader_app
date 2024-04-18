import React from 'react'
import styles from './styles';
import { css } from '@emotion/css';
import { Typography } from '@mui/material'
import noDataImage from '../../../../resources/images/no_data.png';

export const EmptyState = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className={css(styles.wrapper)}>
      <img src={noDataImage.src} alt="empty box" />
      <Typography variant='h3'>{title}</Typography>
      <Typography color="secondary.light" variant="body1">
        {subtitle}
      </Typography>
    </div>
  )
}