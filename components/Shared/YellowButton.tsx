import classNames from 'classnames'
import styles from './index.module.css'

export function YellowButton({className, children}: any){

    return(
        <button className={classNames(className, styles['button'])}>
            { children }
        </button>
    )
}