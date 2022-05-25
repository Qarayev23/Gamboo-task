import { useSession } from 'next-auth/client';
import Head from 'next/head'
import { useState } from 'react';
import Helperbar from './helperbar'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  const [session] = useSession();
  const username = session?.user.name.split(" ")[0]
  const [show, setShow] = useState(false)

  function MenuToggle() {
    setShow(!show)
  }

  function MenuClose(par) {
    setShow(par)
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <section className='dashboard'>
        <div className="dashboard__wrapper">
          <Sidebar show={show} MenuClose={MenuClose} />
          <div className='main-content'>
            <div className="d-flex justify-content-between align-item-center">
              <div className="d-flex gap-4 align-items-center">
                <button type='button' className='menu-toggle' onClick={() => MenuToggle()}>
                  <i className="fa-solid fa-bars"></i>
                </button>
                <h3 className='g-title'>Hi {username}!</h3>
              </div>
              <div className="complete">
                <p className="complete__text">
                  15% task completed
                </p>
                <div className="complete__bar"></div>
              </div>
            </div>
            {children}
          </div>
          <Helperbar />
        </div>
      </section>

      <div
        className={show ? "backdrop active" : "backdrop"}
        onClick={() => MenuClose(false)}>
      </div>
    </>
  )
}