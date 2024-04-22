import { ArrowDownward, ArrowUpward, Replay, Search } from '@mui/icons-material'
import { CircularProgress, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import classNames from 'classnames'
import { ArchivingStatus, EmptyState, LoginModal, NoteBox, RemoveModal, Status, OfflineModal } from '../../components'
import DeleteIcon from '../../../../resources/images/delete_icon.svg';
import { routes } from '../../constants/routes';
import { useAuth, useUpload } from '../../contexts';
import useOnline from '../../hooks/useOnline';
import styles from './styles';
import { css } from '@emotion/css';
import { setChecks } from '../../lib/localStorage'

export const Upload = () => {
  const isOnline = useOnline()
  const navigate = useRouter()
  const params = useSearchParams()
  const { paths, archivesData, resetUpload, isProcessStarted, onUploadStart, setArchivesData, uploadsData } =
    useUpload()
  const { isLoggedIn, user } = useAuth()
  const [deleteModal, setDeleteModal] = useState(null)
  const [loadingId, setLoadingId] = useState(false)
  const isLoginModalNeeded = params.get('auth') === 'no'
  const [isAuth, setIsAuth] = useState(isLoginModalNeeded)

  useEffect(() => {
    if (isLoginModalNeeded && isLoggedIn && !isProcessStarted) {
      setChecks(null)
      console.log("uploading begin in another place")
      onUploadStart(paths)
    }
  }, [isLoginModalNeeded, isLoggedIn, isProcessStarted, paths.join()])


  const isEmpty = uploadsData.length === 0 && archivesData.length === 0;

  const onDelete = async (id: boolean, isUploaded: boolean) => {
    const itemToDelete = archivesData.find((item: any) => item.id === id)

    if (itemToDelete) {
      // const request = isUploaded ? uploadService.removeUploaded : uploadService.removeUpload

      setLoadingId(id)

      // await request({
      //   creds: {
      //     username: user?.sftp_user,
      //     password: user?.sftp_passwd,
      //   },
      //   wtgs: [{ site: itemToDelete.site, wtg: itemToDelete.wtg }],
      // })

      // setArchivesData((prev) => {
      //   const result = prev.filter((item) => item.id !== itemToDelete.id)
      //   if (result.length === 0) resetUpload()
      //   return result
      // })

      // setLoadingId(null)
    }
  }

  const handleDelete = () => {
    if (!deleteModal) return
    onDelete(deleteModal, false)
    setDeleteModal(null)
  }

  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState('date-ASC') // possible values: date-ASC | date-DESC | name-ASC | name-DESC

  const uploadingData = uploadsData.filter((x: any) => x?.parts?.some((y: any) => 'uploading'.includes(y.status)))

  const uploadedData = uploadsData.filter((item: any) => item.parts.forEach((part: any) => 'uploading_finished'.includes(part.status)))

  // const uploadedData = useMemo(() => {
  //   return uploadsData
  //     .filter((x) => x.parts.every((y) => ['uploading_finished'].includes(y.status)))
  //     .filter((x) => x.site.toLowerCase().includes(search.toLowerCase()))
  //     .sort((a, b) => {
  //       if (sorting === 'date-ASC') {
  //         return a.uploadDate - b.uploadDate
  //       }
  //       if (sorting === 'date-DESC') {
  //         return b.uploadDate - a.uploadDate
  //       }
  //       if (sorting === 'name-ASC') {
  //         return a.site.localeCompare(b.site)
  //       }
  //       if (sorting === 'name-DESC') {
  //         return b.site.localeCompare(a.site)
  //       }
  //     })
  // }, [archivesData, search, sorting])

  return (
    <div className={classNames(styles.upload_page, { "disabled": !isOnline })}>
      <div className="main">
        {isEmpty ? (
          <>
            <EmptyState
              title="There are no data to be uploaded yet"
              subtitle="Here you will see an uploading progress of your checked folders as soon as they appear"
            />
          </>
        ) : (
          <div className={css(styles.content)}>
            <div className={css(styles.tables)}>
              {archivesData.length !== 0 && (
                <div className={css(styles.table_with_title)}>
                  <Typography className={css(styles.main_title)} variant={'h3'}>
                    Archiving Status
                  </Typography>
                  <div className={css(styles.table_wrapper)}>
                    <div className={`${css(styles.table_row)} ${css(styles.table_header)}`}>
                      <div>
                        <Typography>Site name</Typography>
                      </div>
                      <div>
                        <Typography>WTG</Typography>
                      </div>
                      <div>
                        <Typography>Archiving Status</Typography>
                      </div>
                      <div>
                        <Typography>Actions</Typography>
                      </div>
                    </div>
                    {archivesData.map((x: any, index) => (
                      <div key={index} className={css(styles.table_row)}>
                        <div>
                          <Typography variant='h3'>{x.site}</Typography>
                        </div>
                        <div>
                          <Typography variant='h3'>{x.wtg}</Typography>
                        </div>
                        <div>
                          <ArchivingStatus
                            part={x}
                            status={x.status}
                            pendingStatus={'in_progress'}
                          />
                        </div>
                        <div>
                          <IconButton
                            classes={{ colorSecondary: css(styles.delete_button) }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setDeleteModal(x.id)
                            }}
                            style={{ borderRadius: 6 }}
                            disabled={loadingId === x.id}
                            color="secondary"
                          >
                            {loadingId === x.id ? <CircularProgress size={14} /> : <DeleteIcon />}
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {uploadsData.length !== 0 && (
                <div className={css(styles.table_with_title)}>
                  <Typography className={css(styles.main_title)} variant={'h3'}>
                    Uploading status
                  </Typography>
                  <div className={css(styles.table_wrapper)}>
                    <div className={`${css(styles.table_row)} ${css(styles.table_header)}`}>
                      <div>
                        <Typography variant="h3">Site name</Typography>
                      </div>
                      <div>
                        <Typography variant="h3">WTG</Typography>
                      </div>
                      <div>
                        <Typography variant="h3">Upload status</Typography>
                      </div>
                      <div>
                        <Typography variant="h3">Actions</Typography>
                      </div>
                    </div>
                    {uploadsData.map((x: any, index) => (
                      <div key={index} className={css(styles.table_row)}>
                        <div>
                          <Typography variant="h3">{x.site}</Typography>
                        </div>
                        <div>
                          <Typography variant="h3">{x.wtg}</Typography>
                        </div>
                        <div>
                          <Status
                            parts={x.parts}
                            status={x.parts.map((item: any) => item.status)}
                            pendingStatus={'uploading'}
                            isArchiving={false}
                          />
                        </div>
                        <div>
                          {x.parts[0].status.includes('uploading_failed') ? (
                            <IconButton
                              classes={{ colorSecondary: css(styles.delete_button) }}
                              onClick={async (e) => {
                                e.stopPropagation();
                                // await onUploadStart([x.parts[0].path])
                              }}
                            >
                              <Replay />
                            </IconButton>
                          ) : null}
                          <IconButton
                            classes={{ colorSecondary: css(styles.delete_button) }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setDeleteModal(x.id)
                            }}
                            style={{ borderRadius: 6 }}
                            disabled={loadingId === x.id}
                            color="secondary"
                          >
                            {loadingId === x.id ? <CircularProgress size={14} /> : <DeleteIcon />}
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {(uploadingData.length !== 0 || !!search) && (
                <div className={css(styles.table_with_title)}>
                  <div className={css(styles.upload_folders_table_header)}>
                    <Typography className={css(styles.main_title)} variant={'h3'}>
                      Uploaded folders
                    </Typography>
                    <OutlinedInput
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      classes={{
                        input: css(styles.search_input),
                        root: css(styles.search_root),
                        notchedOutline: css(styles.search_notched_outline),
                      }}
                      placeholder="Search"
                      startAdornment={
                        <InputAdornment classes={{ root: css(styles.search_adorned) }} position="start">
                          <Search />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className={css(styles.table_wrapper)}>
                    <div className={`${css(styles.table_row)} ${css(styles.upload_table_row)} ${css(styles.table_header)}`}>
                      <button
                        onClick={() =>
                          setSorting((sort) => {
                            if (sort === 'date-ASC') return 'date-DESC'
                            if (sort === 'date-DESC') return 'date-ASC'
                            else {
                              return 'date-ASC'
                            }
                          })
                        }
                        className={css(styles.sorting_button)}
                      >
                        <Typography variant="h3">Upload date</Typography>
                        {sorting === 'date-ASC' && <ArrowDownward />}
                        {sorting === 'date-DESC' && <ArrowUpward />}
                      </button>
                      <button
                        onClick={() =>
                          setSorting((sort) => {
                            if (sort === 'name-ASC') return 'name-DESC'
                            if (sort === 'name-DESC') return 'name-ASC'
                            else {
                              return 'name-ASC'
                            }
                          })
                        }
                        className={css(styles.sorting_button)}
                      >
                        <Typography variant="h3">Site name</Typography>
                        {sorting === 'name-ASC' && <ArrowDownward />}
                        {sorting === 'name-DESC' && <ArrowUpward />}
                      </button>
                      <div>
                        <Typography variant="h3">WTG</Typography>
                      </div>
                      <div>
                        <Typography variant="h3">Upload status</Typography>
                      </div>
                      <div>
                        <Typography variant="h3">Actions</Typography>
                      </div>
                    </div>
                    {uploadedData.map((x: any) => (
                      <div key={x.id} className={`${css(styles.table_row)} ${css(styles.upload_table_row)}`}>
                        <div>
                          <Typography variant="h2">{x.uploadTime || 'No date'}</Typography>
                        </div>
                        <div>
                          <Typography variant="h2">{x.site}</Typography>
                        </div>
                        <div>
                          <Typography variant="h2">{x.wtg}</Typography>
                        </div>
                        <div>
                          <Status
                            parts={x.parts}
                            status={'uploading_finished'}
                            pendingStatus={'uploading'}
                          />
                        </div>
                        <div>
                          <IconButton
                            classes={{ colorSecondary: css(styles.delete_button) }}
                            onClick={(e) => {
                              e.stopPropagation()
                              onDelete(x.id, true)
                            }}
                            style={{ borderRadius: 6 }}
                            disabled={loadingId === x.id}
                            color="secondary"
                          >
                            {loadingId === x.id ? <CircularProgress size={14} /> : <DeleteIcon />}
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={css(styles.side_section)}>
        {!isEmpty && (
          <div className={css(styles.note_wrapper)}>
            <NoteBox type="warn">
              <Typography variant={'body2'}>
                <b>Remove</b> WTG&apos;s folder from the upload list if you are willing to replace it
              </Typography>
            </NoteBox>
          </div>
        )}
      </div>
      {!isLoggedIn && isOnline && (
        <LoginModal
          open={isAuth}
          onClose={() => {
            setIsAuth(false)
            navigate.push(routes.home)
          }}
        />
      )}

      <RemoveModal open={deleteModal !== null} onClose={() => setDeleteModal(null)} onRemove={handleDelete} />
      <OfflineModal />
    </div>
  )
}
