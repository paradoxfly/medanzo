import styles from './index.module.css'
import { YellowButton } from '../Shared'
import { AiFillCheckCircle} from 'react-icons/ai'

const SubText = ({ children}: any) => {
    return(
        <div className={styles['sub-text']}>
            <AiFillCheckCircle className={styles['icon']}/>
            { children }
        </div>
    )
}

export function SectionThree(){
    return(
        <div className={styles['wrapper']}>
            <div className={styles['top-text']}>SuperCharge your Business with Us!</div>
            <div className={styles['header-one']}>why</div>
            <div className={styles['header-two']}>medanzo</div>
            <div className={styles['header-three']}>healthcare solutions</div>
            <div className={styles['sub-text-line']}>
                <SubText>Quality assurance</SubText>
                <SubText>Data privacy</SubText>
            </div>
            <div className={styles['sub-text-line']}>
                <SubText>Micro level review</SubText>
                <SubText>Timely delivery</SubText>
                <SubText>Expert team</SubText>
            </div>
            <YellowButton>Contact Us</YellowButton>
        </div>
    )
}