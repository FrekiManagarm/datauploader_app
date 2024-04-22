import React from 'react'
import noteSignImage from '../../../../resources/images/note-sign.png'
import roundSuccessImage from '../../../../resources/images/success_round.png'
import timerIcon from '../../../../resources/images/timer_icon.png'
import roundWarningImage from '../../../../resources/images/warning_round.png'
import styles from './styles'
import { css } from '@emotion/css'

const getIcon = (icon: string) => {
  switch (icon) {
    case 'warn':
      return roundWarningImage
    case 'success':
      return roundSuccessImage
    case 'note':
      return noteSignImage
    case 'timer':
      return timerIcon
    default:
      return
  }
}

const getColor = (type: string) => {
  switch (type) {
    case 'warn':
      return '#FEF7EC'
    case 'success':
      return '#E8F7E3'
    case 'note':
      return '#F3FAFC'
    default:
      return '#fff'
  }
}

type NoteBoxProps = {
  children: React.ReactNode;
  type: string;
  align?: string;
  className?: string | null;
  icon?: string | null;
}

const NoteBox = ({ children, type, align = 'center', className, icon }: NoteBoxProps) => {
  const defaultIcon = getIcon(type)
  return (
    <div
      style={{ alignItems: align, backgroundColor: getColor(type) }}
      className={`${css(styles.inner_container)} ${className}`}
    >
      <img className={css(styles.warning_sign)} src={icon ? getIcon(icon).src : defaultIcon.src} alt="sign" />
      {children}
    </div>
  )
}

export { NoteBox }