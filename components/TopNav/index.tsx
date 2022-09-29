import styles from './index.module.css'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

export function TopNav(){
    const [ open, setOpen ] = useState(false)

    useEffect(() => {
        if(open){
            document.body.style.overflowY = "hidden"
        }
        else{
            document.body.style.overflowY = "scroll"
        }
    }, [open])

    return(
        <div className={styles['topnav-wrapper']}>
            <picture className={styles['logo']}>
                <source srcSet='/medanzo-logo.png' type='image/png'/>
                <img className={styles['logo-image']} src='/medanzo-logo.png' alt='medanzo logo' />
            </picture>

            {
                open ?
                <GrClose onClick={() => setOpen(e => !e)} className={styles['nav-caret']}/>
                :
                <FaBars onClick={() => setOpen(e => !e)} className={styles['nav-caret']}/>
            }
            
            
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