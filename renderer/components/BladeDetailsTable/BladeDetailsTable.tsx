import React from 'react'
import arrowRight from '../../../../resources/images/arrowRight.png';
import bladeA from '../../../../resources/images/bladeA.png'
import bladeB from '../../../../resources/images/bladeB.png'
import bladeC from '../../../../resources/images/bladeC.png'
import statusExcellent from '../../../../resources/images/statusExcellent.png';
import statusFair from '../../../../resources/images/statusFair.png';
import statusGood from '../../../../resources/images/statusGood.png';
import statusPoor from '../../../../resources/images/statusPoor.png';
import statusVeryPoor from '../../../../resources/images/statusVeryPoor.png';
import styles from './styles';
import { css } from '@emotion/css';


const BladeDetailsTable = ({ bladeInfo, switchTables }: { bladeInfo: any, switchTables: () => void }) => {

  const defineStatus = (score: number) => {
    switch (score) {
      case 1:
        return statusVeryPoor
      case 2:
        return statusPoor
      case 3:
        return statusFair
      case 4:
        return statusGood
      case 5:
        return statusExcellent
    }
  }

  return (
    <div className={css(styles.WTGContainer)}>
      <div>
        <div className={css(styles.wtgHeader)}>
          <p onClick={switchTables}>Checking folders</p>
          <img src={arrowRight.src} alt="arrow to the right" />
          <span>
            {bladeInfo[1]['site']} - {bladeInfo[1]['station']}
          </span>
        </div>
        <table className={css(styles.blade_table)}>
          <thead>
            <tr>
              <th>Blade</th>
              <th>Rectitude</th>
              <th>Distance</th>
              <th>Pitch</th>
              <th>Rotation</th>
              <th>Overlap</th>
              <th>Missings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={bladeA.src} alt='letter A' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['rectitude']['score']).src} alt='status' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['distance']['score']).src} alt='status' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['pitch']['score']).src} alt='status' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['rotation']['score']).src} alt='status' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['overlap']['score']).src} alt='status' />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][0]['missings']['score']).src} />
              </td>
            </tr>
            <tr>
              <td>
                <img src={bladeB.src} alt="letter B" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['rectitude']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['distance']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['pitch']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['rotation']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['overlap']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][1]['missings']['score']).src} alt="status" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={bladeC.src} alt="letter C" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['rectitude']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['distance']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['pitch']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['rotation']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['overlap']['score']).src} alt="status" />
              </td>
              <td>
                <img src={defineStatus(bladeInfo[0][2]['missings']['score']).src} alt="status" />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <div className={css(styles.bladeIssues)}>
            <h3>Blade A</h3>
            {Object.keys(bladeInfo[0][0]).map((paramName, i) =>
              bladeInfo[0][0][paramName]['issues']?.length ? (
                <div key={i} className={css(styles.issue)}>
                  <div>
                    <strong>{paramName}: </strong>
                    {bladeInfo[0][0][paramName]['issues'].map((issue: any) => (
                      <p key={issue[1]}>{issue[1]}</p>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )
            )}
            <h3>Blade B</h3>
            {Object.keys(bladeInfo[0][1]).map((paramName, i) =>
              bladeInfo[0][1][paramName]['issues']?.length ? (
                <div key={i} className={css(styles.issue)}>
                  <div>
                    <strong>{paramName}: </strong>
                    {bladeInfo[0][1][paramName]['issues'].map((issue: any) => (
                      <p key={issue[1]}>{issue[1]}</p>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )
            )}
            <h3>Blade C</h3>
            {Object.keys(bladeInfo[0][2]).map((paramName, i) =>
              bladeInfo[0][2][paramName]['issues']?.length ? (
                <div key={i} className={css(styles.issue)}>
                  <div>
                    <strong>{paramName}: </strong>
                    {bladeInfo[0][2][paramName]['issues'].map((issue: any) => (
                      <p key={issue[1]}>{issue[1]}</p>
                    ))}
                  </div>
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BladeDetailsTable