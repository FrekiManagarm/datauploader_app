import { DragAndDrop } from '../DragAndDrop/DragAndDrop'
import styles from './styles'
import { css } from '@emotion/css'
import { Typography } from '@mui/material'
import arrowImg from '../../../../resources/images/dropdown_arrow.png'
import radioChecked from '../../../../resources/images/radio_checked.png'
import radioUnchecked from '../../../../resources/images/radio_unchecked.png'
import removeFolderImage from '../../../../resources/images/remove_folder.png'
import React, { useState } from 'react'

type DropdownItemProps = {
  title: string;
  defaultIsOpen?: boolean;
  dropInfo: { title: string, name: string }[];
  onDrop: () => void;
  onRemove: (name: any) => void;
  selectedFolder: { site: string }[];
  isAnySelected: boolean;
  isSelected: boolean;
}

const DropdownItem = ({ title, defaultIsOpen = false, dropInfo, onDrop, onRemove, selectedFolder, isAnySelected, isSelected }: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={css(styles.dropdown_container)}>
      <button onClick={toggleDropdown} className={css(styles.dropdown_button)}>
        <img className={css(styles.radio_img)} src={isSelected ? radioChecked.src : radioUnchecked.src} alt="radio" />
        <Typography variant="h3" className={css(styles.button_name)}>
          {title}
        </Typography>
        <img className={isOpen ? css(styles.arrow_up) : css(styles.arrow_down)} src={arrowImg.src} alt="arrow_down" />
      </button>
      {isOpen && (
        <div className={css(styles.container)}>
          {isAnySelected && !isSelected ? (
            <div className={css(styles.remove_folder_container)}>
              <img className={css(styles.remove_folder_icon)} src={removeFolderImage.src} alt={'folder'} />
              <Typography variant="h3" className={css(styles.remove_folder_description)}>
                Remove other dropped folders in order to drop folder here
              </Typography>
            </div>
          ) : (
            <>
              {dropInfo.map(({ title: dropTitle, name }: { title: string, name: any }) => (
                <DragAndDrop
                  selectedFolder={selectedFolder && selectedFolder[name] ? selectedFolder[name]?.site : ''}
                  name={name}
                  key={name}
                  title={title}
                  dropTitle={dropTitle}
                  onDrop={onDrop}
                  onRemove={onRemove}
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export { DropdownItem }
