import { getSession, useSession } from 'next-auth/client';
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const MyTasks = () => {
  const [session] = useSession();
  const username = session?.user.name.split(" ")[0]

  return (
    <div className='main-content'>
      <div className="d-flex justify-content-between align-item-center">
        <h3 className='g-title'>Hi {username}!</h3>
        <div className="complete">
          <p className="complete__text">
            15% task completed
          </p>
          <div className="complete__bar"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-5">
          <div className="dashboard-card dashboard-card--red">
            <div className="d-flex justify-content-between align-items-center">
              <div className="dashboard-card__icon">
                <i class="fa-solid fa-lightbulb"></i>
              </div>
              <button className='dashboard-card__more'>
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
            <h3 className='dashboard-card__title'>R&D for New Banking Mobile App</h3>
            <div className="collaborators">
              <div className='collaborators__img'>
                <img src="https://external-preview.redd.it/hWmWtnBtwzuUYvwyKrwF_fMY6DPp0QcRioEogbtobkI.jpg?auto=webp&s=afd433f5211abd7c8a3eed417664bd5d16935f3b" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="https://miro.medium.com/max/720/1*hFxL6hSu3xMbX4nb5AMx0A.jpeg" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="https://external-preview.redd.it/rK_knMShnIzXOi9G92I5AWQEiV83N61DD_Yq60ib5Ok.jpg?auto=webp&s=e6587373c6951fd2ada19038c20591865b92b941" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-7">
          <div className="dashboard-card dashboard-card--purple">
            <div className="dashboard-card__icon">
              <i class="fa-solid fa-key"></i>
            </div>
            <h3 className='dashboard-card__title'>Create Signup <br /> page</h3>
            <div className="collaborators">
              <div className='collaborators__img'>
                <img src="https://external-preview.redd.it/hWmWtnBtwzuUYvwyKrwF_fMY6DPp0QcRioEogbtobkI.jpg?auto=webp&s=afd433f5211abd7c8a3eed417664bd5d16935f3b" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="https://miro.medium.com/max/720/1*hFxL6hSu3xMbX4nb5AMx0A.jpeg" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="https://external-preview.redd.it/rK_knMShnIzXOi9G92I5AWQEiV83N61DD_Yq60ib5Ok.jpg?auto=webp&s=e6587373c6951fd2ada19038c20591865b92b941" alt="" />
              </div>
            </div>
            <img src="/Screenshot from 2022-05-23 14-24-54 (2).png" className='dashboard-card__img' alt="" />
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <h4 className='g-title'>Monthly Tasks</h4>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <button className='g-btn g-btn--gray me-2'>Archive</button>
            <button className='g-btn g-btn--purple'>
              <i class="fa-solid fa-plus"></i>
              New
            </button>
          </div>
        </div>
      </div>

      <div className="tasks">
        <div className="tasks__tab">
          <Tabs defaultActiveKey="activeTasks" className="mb-4">
            <Tab eventKey="activeTasks" title="Active Tasks">
              asd
            </Tab>
            <Tab eventKey="completed" title="Completed">
              asd
            </Tab>
          </Tabs>
        </div>

        <form action="">
          <div className="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default MyTasks

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/register' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}