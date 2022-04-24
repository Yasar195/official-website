import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <h1>hello</h1>
      <style jsx>{`
        .container{
          padding: 1%;
          width: 100%;
          height: 100vh;
          background-color: #1C2833  ;
          color: white;
        }
      `}</style>
    </div>
  )
}
