import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Login from '../components/Login'
import { getProviders, getSession, useSession } from 'next-auth/react'

const Home = ({ providers, trendingResults, followResults }) => {
  const { data: session } = useSession()
  if (!session) return <Login providers={providers} />

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

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)

  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )

  return {
    props: {
      providers,
      session,
      trendingResults,
      followResults,
    },
  }
}
