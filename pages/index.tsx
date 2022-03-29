import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black ">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home
