import { getSession, useSession } from 'next-auth/client';
import { wrapper } from "../../store/store";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { addTask } from '../../store/tasksSlice';
import { useSelector } from 'react-redux';

const MyTasks = () => {

  const { tasks } = useSelector((state) => state.tasks);
  const [data] = tasks

  return (
    <>
      <div className="row mt-5">
        <div className="col-5">
          <div className="dashboard-card dashboard-card--red">
            <div className="d-flex justify-content-between align-items-center">
              <div className="dashboard-card__icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <button className='dashboard-card__more'>
                <i className="fa-solid fa-ellipsis"></i>
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
              <i className="fa-solid fa-key"></i>
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
              <i className="fa-solid fa-plus"></i>
              New
            </button>
          </div>
        </div>
      </div>

      <div className="search-box">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" placeholder='Search' />
      </div>

      <div className="tasks">
        <div className="tasks-tab">
          <Tabs defaultActiveKey="activeTasks" id="uncontrolled-tab-example" className="mb-4">
            <Tab eventKey="activeTasks" title="Active Tasks">
              <ul className='tasks-tab__list'>
                {
                  data.map(item => {
                    if (item.completed) {
                      return <li className='tasks-tab__item' key={item.id}>
                        <img src="https://cdn-icons-png.flaticon.com/128/839/839608.png" className='tasks-tab__icon' alt="" />
                        <div className="d-flex flex-column">
                          <h3 className='tasks-tab__title'>
                            {item.title}
                          </h3>
                          <p className="tasks-tab__text">
                            {item.description}
                          </p>
                        </div>
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
                      </li>
                    }
                  })
                }
              </ul>
            </Tab>
            <Tab eventKey="completed" title="Completed">
              <ul className='tasks-tab__list'>
                <li className='tasks-tab__item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/839/839608.png" className='tasks-tab__icon' alt="" />
                  <div className="d-flex flex-column">
                    <h3 className='tasks-tab__title'>
                      Uber
                    </h3>
                    <p className="tasks-tab__text">
                      App Design and Upgrades with new features - in Progress 16 days
                    </p>
                  </div>
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
                </li>
                <li className='tasks-tab__item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/839/839608.png" className='tasks-tab__icon' alt="" />
                  <div className="d-flex flex-column">
                    <h3 className='tasks-tab__title'>
                      Uber
                    </h3>
                    <p className="tasks-tab__text">
                      App Design and Upgrades with new features - in Progress 16 days
                    </p>
                  </div>
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
                </li>
                <li className='tasks-tab__item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/839/839608.png" className='tasks-tab__icon' alt="" />
                  <div className="d-flex flex-column">
                    <h3 className='tasks-tab__title'>
                      Uber
                    </h3>
                    <p className="tasks-tab__text">
                      App Design and Upgrades with new features - in Progress 16 days
                    </p>
                  </div>
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
                </li>
              </ul>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, params }) => {
    const session = await getSession({ req });
    if (!session) {
      return {
        redirect: {
          destination: '/register',
          permanent: false,
        },
      };
    }

    const response = await fetch(
      `https://gamboo-db.herokuapp.com/tasks`
    );
    const data = await response.json();
    store.dispatch(addTask(data));
    return { props: { data } }
  })

export default MyTasks