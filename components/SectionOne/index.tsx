import { YellowButton } from '../Shared'
import styles from './index.module.css'

export function SectionOne(){
    return(
        <div className={styles['wrapper']}>
            <div className={styles['header-one']}>healthcare solutions for</div>
            <div className={styles['header-two']}>data abstraction</div>
            <div className={styles['body-text']}>oncology data | medical chart | patient record</div>
            <div className={styles['body-text']}>biomarker data | adverse event data | electronic health records</div>
            <YellowButton>See more</YellowButton>
        </div>
    )
}