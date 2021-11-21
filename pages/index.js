import Image from 'next/image'
import Header from '../components/Layout/Header'
import styles from '../styles/Home.module.css'

// images
import ColorBlur from '../assets/image/home/color-blur.png'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <Layout title="Home" description="Ini home page">

      <section >
        <Image src={ColorBlur} alt="Picture of the author" />
      </section>

      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>

    </Layout>
  )
}
