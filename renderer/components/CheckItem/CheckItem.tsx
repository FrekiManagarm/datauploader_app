import { IconButton } from '@mui/material'
import EmptyCommentIcon from '../../../../resources/images/comment_icon.svg'
import DeleteIcon from '../../../../resources/images/delete_icon.svg'
import FilledCommentIcon from '../../../../resources/images/filled_comment_icon.svg'
import PendingIcon from '../../../../resources/images/pending_icon.svg'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Badge from '../Badge/Badge';
import { routes } from '../../constants/routes'
import { useCheck } from '../../contexts/CheckContext'
import { getGeneralScore } from '../../utils'
import { checkStatusIcons, spaceSeparator, variableSeparator, visibleParts } from '../config';
import styles from './styles';
import { css } from '@emotion/css'

// const getScoreIcon = (scores: any, name: string) => {
//   if (!scores?.length) {
//     return PendingIcon
//   }

//   const bladeScores = scores.find((score: any) => score.name === name)

//   return checkStatusIcons[getGeneralScore(bladeScores)]
// }

type CheckItemProps = {
  check: { site: string, name: string, parts: [], scores: [], comment: string };
  index: number;
  onComment: (e: any, check: any, index: number) => void;
  onDelete: (e: any, index: number) => void;
}

export const CheckItem = ({ check, index, onComment, onDelete }: CheckItemProps) => {
  const { getScore } = useCheck()
  const checkName = `${check.site}/${check.name}`
  const navigate = useRouter()
  const isChecked =
    check.parts.filter((item: any) => item.status === 'check' || item.status === 'currently_in_check').length === 0

  useEffect(() => {
    if (isChecked && check?.scores?.length === 0) {
      getScore(`${check.site}/${check.name}`)
    }
  }, [isChecked])

  const onClick = () => {
    if (!isChecked) return
    const path = checkName.replaceAll('/', variableSeparator).replaceAll(' ', spaceSeparator)
    isChecked && navigate.push(`${routes.check}/${path}`)
  }

  const getPartCell = (partName: any) => {
    const part = check.parts.find((item: any) => item.name === partName)

    if (!part)
      return (
        <td>
          <Badge className={css(styles.emptyBadge)} title="N/A" />
        </td>
      )

    // const Icon = getScoreIcon(check.scores, partName)
    // return (
    //   <td>
    //     <Icon />
    //   </td>
    // )
  }

  return (
    <tr className={isChecked ? css(styles.row_enabled) : css(styles.row_disabled)} onClick={onClick}>
      <td>{check.site}</td>
      <td>{check.name}</td>

      {visibleParts.map((part: any) => (
        <React.Fragment key={part}>{getPartCell(part)}</React.Fragment>
      ))}

      <td>
        <IconButton disabled={!isChecked} onClick={(e) => onComment(e, check, index)} style={{ borderRadius: 6 }}>
          {check?.comment ? <FilledCommentIcon /> : <EmptyCommentIcon />}
        </IconButton>

        <IconButton disabled={!isChecked} onClick={(e) => onDelete(e, index)} style={{ borderRadius: 6 }} color="error">
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  )
}
