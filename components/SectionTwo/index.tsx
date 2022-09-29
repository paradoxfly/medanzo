import styles from './index.module.css'
import { YellowButton } from '../Shared'

export function SectionTwo(){

    return(
        <div className={styles['wrapper']}>
            <div className={styles['header-one']}>we focus on</div>
            <div className={styles['header-two']}>Client&apos;s vision</div>
            <div className={styles['body-text']}>we understand your business</div>
            <div className={styles['body-text']}>we provide the best solutions</div>
            <div className={styles['body-text']}>we are innovative</div>
            <div className={styles['body-text']}>medical data abstraction service provider</div>
            <YellowButton>See more</YellowButton>
        </div>
    )
}