import styles from './index.module.css'

function WhyCard ({heading, image, bodyText}: any){
    return(
        <div className={styles['card-wrapper']}>
            <picture className={styles['image-wrapper']}>
                <source srcSet={image} type='image/jpg'/>
                <img className={styles['image']} src={image} alt={heading} />
            </picture>
            <div className={styles['card-header']}>{heading}</div>
            <div className={styles['card-body']}>{bodyText}</div>
        </div>
    )
}
export function WhyMedanzo(){
    return(
        <div className={styles['wrapper']}>
            <div className={styles['header-text']}>why medanzo</div>

            <div className={'card-section'}>
                
            </div>
        </div>
    )
}