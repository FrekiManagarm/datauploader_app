import React from 'react'
import { Typography } from '@mui/material'
import styles from './styles'
import { css } from '@emotion/css'

type StatusProps = {
  parts: any;
  status: string;
  pendingStatus: string;
  isArchiving?: boolean
}

export const Status = ({ parts, status, pendingStatus, isArchiving }: StatusProps) => {

  const getItemStatus = (status: string) => {
    switch (status) {
      case "uploading":
        return "Uploading"
      case "uploading_finished":
        return "Uploading finished"
      case "archived":
        return "Archived"
      case "in_progress":
        return "Archiving in progress"
      case "waiting_for_archiving":
        return "Waiting for archiving"
      case "uploading_failed":
        return "Uploading failed"
    }
  }

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.info)}>
        <div className={css(styles.label)}>
          {parts.map((part: any, index: number) => (
            <Typography
              className={`${css(styles.label)} ${status.includes(part.status) && css(styles.label_done)}`}
              variant='body2'
              key={index}
            >
              {pendingStatus && part.status === pendingStatus ? (
                <span className={css(styles.pending)}>{part.part}</span>
              ) : (
                part.part
              )}
            </Typography>
          ))}
        </div>
        <Typography className={css(styles.label)} variant='body2'>
          {getItemStatus(status[0])}
        </Typography>
      </div>
    </div>
  )
}

export const ArchivingStatus = ({ part, status, pendingStatus }: { part: any, status: string, pendingStatus: string }) => {
  const getArchivingStatus = (archiveStatus: string) => {
    switch (archiveStatus) {
      case "waiting_for_archiving":
        return "Waiting for archiving";
      case "in_progress":
        return "Archiving in progress";
      case "archived":
        return "Archived";
      default:
        return "Status unknown"
    }
  }

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.info)}>
        <div className={css(styles.label)}>
          <Typography className={`${css(styles.label)} ${css(styles.label_done)}`}>
            {pendingStatus && status === pendingStatus ? (
              <span className={css(styles.pending)}>
                {part.part}
              </span>
            ) : (
              part.part
            )}
          </Typography>
        </div>
        <Typography className={css(styles.label)} variant={'body2'}>
          {getArchivingStatus(part.status)}
        </Typography>
      </div>
    </div>
  )
}