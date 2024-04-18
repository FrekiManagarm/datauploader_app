import { Typography } from '@mui/material'
import { useDrop, useUpload } from '../../contexts';
import blue_folder_icon from '../../../../resources/images/blue_folder.png'
import React, { EventHandler, useEffect, useRef } from 'react'
import folderUploadIcon from '../../../../resources/images/folder_upload_icon.png'
import './draganddrop.css'
import styles from './styles';
import { css } from '@emotion/css'
import { useDropzone } from 'react-dropzone'
import useDragAndDrop from '../../hooks/useDragAndDrop'

type DragAndDropProps = {
  title: string;
  dropTitle: string;
  selectedFolder: string;
  name: string;
  onDrop: (drop: any, name: string, title: string) => void;
  onRemove: (name: string) => void;
}

const DragAndDrop = ({ title, dropTitle, onRemove, selectedFolder, name }: DragAndDropProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const isDoors = name === 'door'
  const { setDragOver, onDragOver, onDragLeave } = useDragAndDrop()
  const { setTurbinePath } = useUpload()
  const { setFoldersLocation } = useDrop()

  useEffect(() => {
    if (inputRef.current !== null) {
      // 2. set attribute as JS does
      inputRef.current.setAttribute("directory", "");
      inputRef.current.setAttribute("webkitdirectory", "");
    }
    // 3. monitor change of your ref with useEffect
  }, [inputRef]);

  const onDragDrop = async (e: any) => {
    e.preventDefault()

    setDragOver(false)
    if (isDoors) {
      const paths = Array.from(e?.dataTransfer?.files).map((item: any) => item.path)
      await getDoorsInformation('drop', paths)
      return
    }
    const path = e?.dataTransfer?.files[0].path
    await getFolderInformation('drop', path)
  }

  const getFolders = async (folder_path: any) => {
    if (folder_path) {
      // return await folderService.getFolders(folder_path)
    } else {
      console.log('No folder selected')
    }
  }

  const getDoors = async (doors_path: any) => {
    if (doors_path) {
      // return await pythonService.getDoors(doors_path)
    } else {
      console.log('No doors selected')
    }
  }

  const getDoorsInformation = async (eventType: string, paths: string[], relativePath?: string) => {
    const result = await getDoors(paths)

    // if (!result) {
    //   return
    // }

    const isWindows = navigator.userAgent.indexOf('Windows') >= 0
    const separator = isWindows ? '\\' : '/'
    const fileNames = paths.map((path) => path.split(separator).reverse()[0])
    const path = paths[0]
    let folderPath
    if (eventType === 'select') {
      const topFolderName = relativePath?.split('/')[0]

      folderPath = `${path.split(`${separator}${topFolderName}${separator}`)[0]}${separator}${topFolderName}`
    }
    if (eventType === 'drop') {
      folderPath = path
    }
    // onDrop(
    //   {
    //     path: folderPath,
    //     site: 'Door',
    //     WTG: fileNames,
    //   },
    //   name,
    //   title
    // )
  }

  const getFolderInformation = async (eventType: string, path: string, relativePath?: string) => {
    const isWindows = navigator.userAgent.indexOf('Windows') >= 0
    const separator = isWindows ? '\\' : '/'
    const parts = path.split(separator)
    let folderName
    let folderPath
    if (eventType === 'select') {
      const topFolderName = relativePath?.split('/')[0]

      folderName = topFolderName
      folderPath = `${path.split(`${separator}${topFolderName}${separator}`)[0]}${separator}${topFolderName}`
    }
    if (eventType === 'drop') {
      folderName = parts.reverse()[0]
      folderPath = path
    }
    const folders = await getFolders(folderPath)
    // if (!folders) {
    //   return
    // }
    setTurbinePath(folderPath as string)
    // setFoldersLocation(folders);
    // onDrop(
    //   {
    //     path: folderPath,
    //     site: folderName,
    //     WTG: folders,
    //   },
    //   name,
    //   title
    // )
  }

  const handleFolderSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputRef.current?.files, 'files');
    inputRef.current?.webkitdirectory
    inputRef.current?.dir
    const { files } = event.target;
    const selectedFiles = files as FileList
    if (isDoors) {
      const paths = Array.from(selectedFiles).map((item: any) => item.path)
      await getDoorsInformation('drop', paths)
      return
    }
    const path = selectedFiles[0].path
    const relativePath = selectedFiles[0].webkitRelativePath

    await getFolderInformation('select', path, relativePath)
  }

  const onButtonClick = (e: any) => {
    e.preventDefault()
    inputRef.current?.click()
  }

  const { getInputProps } = useDropzone({
    onDrop(acceptedFiles, fileRejections, event) {

    },
    multiple: false,
  })

  return (
    <>
      {selectedFolder ? (
        <div className={`${css(styles.container)} ${!!selectedFolder && css(styles.filled_container)}`}>
          <img className={css(styles.folder_icon)} src={blue_folder_icon.src} alt="blue folder icon" />
          <Typography className={css(styles.selected_folder)} variant="h3">
            {selectedFolder}
          </Typography>
          <button className={`${css(styles.remove_button)} ${css(styles.browse_button)}`} onClick={() => onRemove(name)}>
            <Typography className={css(styles.browse_button_text)} variant="h3">
              Remove
            </Typography>
          </button>
        </div>
      ) : (
        <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDragDrop} className={css(styles.container)}>
          <input
            style={{ display: 'none', height: '0', width: '0' }}
            ref={inputRef}
            type="file"
            multiple
            dir=''
            // dir={isDoors ? undefined : 'true'}
            // accept='image/*'
            // webkitdirectory=""
            onChange={handleFolderSelect}
          // {...getInputProps}
          />
          <img className={css(styles.folder_icon)} src={folderUploadIcon.src} alt="folder" />
          <Typography className={css(styles.drag_text)} variant="h3">
            Drag & drop {dropTitle}
          </Typography>
          <Typography className={css(styles.drag_text_separator)} variant="h3">
            OR
          </Typography>
          <button className={css(styles.browse_button)} onClick={onButtonClick}>
            <Typography className={css(styles.browse_button_text)} variant="h3">
              Browse files
            </Typography>
          </button>
        </div>
      )}
    </>
  )
}

export { DragAndDrop }

