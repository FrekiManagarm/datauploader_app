import { Typography } from '@mui/material'
import { CheckErrorModal, DropdownItem, NoteBox, RemoveModal } from '../';
import checkButtonIcon from '../../../resources/images/check_button_icon.png'
import checkButtonIconDisabled from '../../../resources/images/check_button_icon_disabled.png'
import droneImage from '../../../resources/images/drone_image.png'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { routes } from '../../constants/routes'
import { useCheck, useDrop } from '../../contexts'
import styles from './styles';
import { css } from '@emotion/css';
// import { unifyChecks } from '../../utils'

export const wtgDropInfo = { label: 'Whole WTG or site', info: [{ title: 'folder here', name: 'wtg' }] }
const doorAndBladesDropInfo = {
  label: 'Door, Blades data',
  info: [
    { title: 'Door', name: 'door' },
    { title: 'Blade A', name: 'bladeA' },
    { title: 'Blade B', name: 'bladeB' },
    { title: 'Blade C', name: 'bladeC' },
  ],
}
const towerDropInfo = { label: 'Tower data', info: [{ title: 'folder here', name: 'tower' }] }
const otherOptionsDropInfo = { label: 'Other options', info: [{ title: 'folder here', name: 'other' }] }

const Drop = () => {
  const navigate = useRouter()
  const { folderInfo, isAnySelected, onFolderDropChange, onFolderRemove, onReset } = useDrop()
  const { updateChecks } = useCheck()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  const selectedFolderName = useRef(null)

  const onModalClose = useCallback(() => {
    setIsModalOpen(false)
    selectedFolderName.current = null
    onReset()
  }, [])

  const onModalOpen = useCallback((name: any) => {
    selectedFolderName.current = name
    setIsModalOpen(true)
  }, [])

  const onErrorClose = useCallback(() => {
    setIsError(false)
  }, [])

  const onErrorOpen = useCallback(() => {
    setIsError(true)
  }, [])

  useEffect(() => {
    async function fetchMyAPI() {
      if (folderInfo) {
        const folders = Object.values(folderInfo)
          .filter((item) => typeof item !== 'string')
          .map((item: any) => item.path)
        // const response = await folderService.checkFolderIntegrity(folders)
        // if (response.length > 0) {
        //   onErrorOpen()
        // }
      }
    }
    fetchMyAPI()
  }, [folderInfo])

  const handleCheckFolders = async () => {
    if (folderInfo && folderInfo.selected) {
      const folders = Object.values(folderInfo)
        .filter((item) => typeof item !== 'string')
        .map((item: any) => item.path)
      // const response = await checkService.runCheck(folders)

      //   if (response && Array.isArray(response)) {
      //     const unifiedChecks = unifyChecks(response)

      //     // updateChecks(
      //     //   unifiedChecks.map((x) => ({
      //     //     ...x,
      //     //     parts: x.parts.map((y) => ({ name: y, site: x.site, status: 'check', wtg: x.name })),
      //     //     scores: [],
      //     //   }))
      //     // )

      //     onReset(true)
      //     navigate(routes.check)
      //   }

      //   console.log('Response from CHECK endpoint', response)
      // } else {
      //   console.log('No folder selected')
      // }
    }
  }
  return (
    <>
      <div className={css(styles.drop_page)}>
        <div className={css(styles.drop_container)}>
          <Typography className={css(styles.drop_container_title)} variant="h3">
            Drop your files here
          </Typography>
          <div className={css(styles.container)}>
            <DropdownItem
              isAnySelected={isAnySelected}
              isSelected={folderInfo?.selected === wtgDropInfo.label}
              onRemove={onModalOpen}
              defaultIsOpen
              title={wtgDropInfo.label}
              onDrop={onFolderDropChange}
              dropInfo={wtgDropInfo.info}
              selectedFolder={folderInfo?.selected === wtgDropInfo.label ? folderInfo : null}
            />
            <DropdownItem
              isAnySelected={isAnySelected}
              isSelected={folderInfo?.selected === doorAndBladesDropInfo.label}
              onRemove={onModalOpen}
              title={doorAndBladesDropInfo.label}
              onDrop={onFolderDropChange}
              dropInfo={doorAndBladesDropInfo.info}
              selectedFolder={folderInfo?.selected === doorAndBladesDropInfo.label ? folderInfo : null}
            />
            <DropdownItem
              isAnySelected={isAnySelected}
              isSelected={folderInfo?.selected === towerDropInfo.label}
              onRemove={onModalOpen}
              title={towerDropInfo.label}
              onDrop={onFolderDropChange}
              dropInfo={towerDropInfo.info}
              selectedFolder={folderInfo?.selected === towerDropInfo.label ? folderInfo : null}
            />
            <DropdownItem
              isAnySelected={isAnySelected}
              isSelected={folderInfo?.selected === otherOptionsDropInfo.label}
              onRemove={onModalOpen}
              title={otherOptionsDropInfo.label}
              onDrop={onFolderDropChange}
              dropInfo={otherOptionsDropInfo.info}
              selectedFolder={folderInfo?.selected === otherOptionsDropInfo.label ? folderInfo : null}
            />
          </div>

          <div className={css(styles.drop_page_footer)}>
            <button disabled={!isAnySelected} onClick={handleCheckFolders} className={css(styles.check_folder_button)}>
              <img
                className={css(styles.check_button_icon)}
                src={isAnySelected ? checkButtonIcon.src : checkButtonIconDisabled.src}
                alt="check"
              />
              <Typography className={css(styles.check_button_text)} variant="h3">
                Check folders
              </Typography>
            </button>
          </div>
        </div>
        <div className={css(styles.side_section)}>
          <div className={css(styles.note_wrapper)}>
            <NoteBox type={'warn'}>
              <Typography className={css(styles.warning_title)} variant="h3">
                Important note
              </Typography>
              <Typography className={css(styles.warning_subtitle)} variant="h3">
                Make sure that your folder properly named
              </Typography>
              <Typography className={css(styles.warning_subtitle)} variant="h3">
                For example:
              </Typography>
              <Typography className={css(styles.warning_example)} variant="h3">
                Site name/WTG/Blade
              </Typography>
            </NoteBox>
          </div>
          <img className={css(styles.drone_image)} src={droneImage.src} alt="Drone Image" />
        </div>
      </div>
      <RemoveModal
        open={isModalOpen}
        onClose={onModalClose}
        onRemove={() => {
          onFolderRemove()
        }} />
      <CheckErrorModal
        open={isError}
        onClose={onErrorClose}
        onRemove={() => {
          onFolderRemove()
        }} />
    </>
  )
}

export { Drop }
