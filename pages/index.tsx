import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SectionOne, SectionThree, SectionTwo, Services, TopNav } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TopNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Services />
    </div>
  )
}

export default Home
