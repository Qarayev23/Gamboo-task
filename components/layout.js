import Head from 'next/head'
import Helperbar from './helperbar'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <section className='dashboard'>
        <div className="dashboard__wrapper">
          <Sidebar />
          {children}
          <Helperbar />
        </div>
      </section>
    </>
  )
}