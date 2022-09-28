import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { TopNav } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TopNav />
      <p>A blah blah blah</p>
    </div>
  )
}

export default Home
