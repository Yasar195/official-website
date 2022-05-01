import Head from 'next/head'
import Image from 'next/image'
import bg from './assets/background.jpg'
import Intro from '../components/Intro'
import skills from './assets/skills.svg';

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
      <section>
        <Image className='skill' src={skills} alt="skills"/>
      </section>
      <section>

      </section>
      <style jsx>{`
        .container{
          width: 100%;
          height: 100vh;
        }

        section{
          padding: 1%;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          background-image: url(${bg.src});
          color: white;
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          overflow: hidden;
        }

        .skill{
          width: 50%;
          height: 50%;
        }

        .intro{
          width: 50%;
          height: 60%;
        }
      `}</style>
    </div>
  )
}
