import { Header } from "../Header/Header"
import { css } from "@emotion/css"
import styles from './styles'
import { Navigation } from "../Navigation/Navigation"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.sidebar)}>
        <Navigation />
      </div>
      <div className={css(styles.main)}>
        <Header />

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout