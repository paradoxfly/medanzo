import styles from './index.module.css'

export function Services(){

    return(
        <div className={styles['wrapper']}>
            <div className={styles['header']}>Services</div>
            <div className={styles['sub-header']}>Our company provides the following services</div>

            <div className={styles['sub-wrapper']}>
                <div className={styles['card-wrapper']}>
                    <div className={styles['orange-bg']}></div>
                    <div className={styles['border']}>
                        <div className={styles['orange-border-top-left']}></div>
                        <div className={styles['orange-border-bottom-right']}></div>
                    </div>
                    <div className={styles['card']}>
                        <p>Medical Data Curation</p>
                        <p>Medical Data Abstraction</p>
                        <p>Patient Records Abstraction</p>
                    </div>
                </div>

                <div className={styles['card-wrapper']}>
                    <div className={styles['blue-bg']}></div>
                    <div className={styles['border']}>
                        <div className={styles['blue-border-top-left']}></div>
                        <div className={styles['blue-border-bottom-right']}></div>
                    </div>
                    <div className={styles['card']}>
                        <p>Oncology Data Abstraction</p>
                        <p>EHR Abstraction</p>
                        <p>Medical Data Services</p>
                        <p>Medical Data Review</p>
                    </div>
                </div>

                <div className={styles['card-wrapper']}>
                    <div className={styles['orange-bg']}></div>
                    <div className={styles['border']}>
                        <div className={styles['orange-border-top-left']}></div>
                        <div className={styles['orange-border-bottom-right']}></div>
                    </div>
                    <div className={styles['card']}>
                        <p>Medical Record Retrieval</p>
                        <p>Biomarker Data Abstraction</p>
                        <p>Adverse Event Data Abstraction</p>
                    </div>
                </div>
            </div>

            <div className={styles['footer-text']}>For more information <span className={styles['link']}>Contact Us</span> now</div>
        </div>
    )
}