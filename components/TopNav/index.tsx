import styles from './index.module.css'
import { FaBars } from 'react-icons/fa'
import classNames from 'classnames'
import { useState } from 'react'

export function TopNav(){
    const [ open, setOpen ] = useState(false)

    return(
        <div className={styles['topnav-wrapper']}>
            <picture className={styles['logo']}>
                <source srcSet='/medanzo-logo.jpg' type='image/jpg'/>
                <img className={styles['logo-image']} src='/medanzo-logo.jpg' alt='medanzo logo' />
            </picture>

            <FaBars onClick={() => setOpen(e => !e)} className={styles['nav-caret']}/>
            
            <div className={ open ? classNames(styles['nav-buttons'], styles['open']) : classNames(styles['nav-buttons'], styles['close'])} >
                <div className={styles['nav-button']}>Home</div>
                <div className={styles['nav-button']}>Services</div>
                <div className={styles['nav-button']}>Why us</div>
                <div className={styles['nav-button']}>Our team</div>
                <div className={styles['nav-button']}>About us</div>
                <div className={styles['contact-us-button']}>Contact Us</div>
            </div>
        </div>
    )
}