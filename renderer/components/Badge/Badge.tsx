import React from 'react';
import styles from './styles';
import { css } from '@emotion/css';
import { Typography } from '@mui/material';

const Badge = ({ className, title }: { className: string, title: string }) => {
  return (
    <div className={`${css(styles.badge)} ${className}`}>
      <Typography variant='h5'>{title}</Typography>
    </div>
  )
}

export default Badge