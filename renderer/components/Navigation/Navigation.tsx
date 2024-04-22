import { routes } from "../../constants/routes";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Box from "@mui/material/Box";
import logoImage from '../../../../resources/images/filedrops_logo_sm.png';
import powered from '../../../../resources/images/powered_by_sm.png';
import React from "react";
import Link from "next/link";
import './navigation.css'
import styles from './styles';
import { css } from "@emotion/css";

const Navigation = () => {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <img src={logoImage.src} className={css(styles.logo)} alt="singulair company logo" />
      </Box>
      <nav>
        <ul className={css(styles.listWrap)}>
          <li className={css(styles.link)}>
            <Link href={routes.home} className={css(styles.linkContent)}>
              <HomeIcon color="secondary" className={css(styles.linkIcon)} />
              <span>Home</span>
            </Link>
          </li>
          <li className={css(styles.link)}>
            <Link href={routes.drop} className={css(styles.linkContent)}>
              <DriveFolderUploadIcon color="secondary" className={css(styles.linkIcon)} />
              <span>Drop</span>
            </Link>
          </li>
          <li className={css(styles.link)}>
            <Link href={routes.check} className={css(styles.linkContent)}>
              <LibraryAddCheckIcon color="secondary" className={css(styles.linkIcon)} />
              <span>Check</span>
            </Link>
          </li>
          <li className={css(styles.link)}>
            <Link href={routes.upload} className={css(styles.linkContent)}>
              <CloudUploadIcon color="secondary" className={css(styles.linkIcon)} />
              <span>Upload</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Box className={css(styles.bottomLogo)}>
        <img src={powered.src} alt="powered by logo" />
      </Box>
    </>
  )
}

export { Navigation }