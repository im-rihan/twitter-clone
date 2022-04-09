import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Login from '../components/Login'
import Modal from '../components/Modal'
import { getProviders, getSession, useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Widgets from '../components/Widgets'

const Home = ({ providers, trendingResults, followResults }) => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
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
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
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
