import Head from 'next/head'
import Image from 'next/image'
import bg from './assets/background.jpg'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <section className='first'>
        <div className="intro">
          <Intro/>
        </div>
      </section>
      <section className='second'>
        <div>
          <h1>this is skills page</h1>
        </div>
      </section>
      <style jsx>{`
        .container{
          padding: 1%;
          width: 100%;
          height: 100vh;
          background-image: url(${bg.src});
          color: white;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }

        section{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;

        }

        .intro{
          width: 50%;
          height: 60%;
        }
      `}</style>
    </div>
  )
}
