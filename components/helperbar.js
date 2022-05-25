import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Helperbar = () => {
  return (
    <div className='helperbar'>
      <div className="d-flex justify-content-between mb-5">
        <h3 className='g-title'>Today's Scheudle</h3>
        <div className="scheudle-icons">
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-calendar-days"></i>
        </div>
      </div>

      <div className="call mb-5">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <div className="d-flex flex-column">
            <p className="call__text">30 minutes call with Client</p>
            <h5 className='call__title'>Project Discovery Call</h5>
          </div>
          <button className='invite-btn'>
            <i className="fa-solid fa-plus"></i>
            Invite
          </button>
        </div>
        <div className="call__box">
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
          <span className='call__time'>28:35</span>
          <div className="d-flex gap-3">
            <button className='call__icon'>
              <i className="fa-solid fa-phone-flip"></i>
            </button>
            <button className='call__icon'>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="task-status">
        <div className="d-flex justify-content-between">
          <h5 className='task-status__title'>Design Project</h5>
          <span className='decor'>..</span>
        </div>

        <div className="d-flex mt-2">
          <i className="fa-solid fa-fire-flame-curved task-status__icon"></i>
          <p className='g-subtitle'>In Progress</p>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex flex-column">
            <p className="g-subtitle">Completed</p>
            <span className='task-status__number task-status__number--green'>114</span>
          </div>
          <div className="d-flex flex-column">
            <p className="g-subtitle">In Progress</p>
            <span className='task-status__number task-status__number--red'>24</span>
          </div>
          <div className="d-flex flex-column">
            <p className="g-subtitle mb-1">Team members</p>
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
      </div>

      <div className="d-flex justify-content-between mt-5">
        <h5 className='g-title'>New Task</h5>
        <span className='decor'>..</span>
      </div>

      <span className='g-subtitle d-block my-3'>Task Title</span>

      <div className="new-task">
        <input type="text" className='add-task-in' placeholder='Add task ...' />
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={8}
          navigation
          className='new-task__slide'
        >
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <span className='g-subtitle d-block mt-3 mb-2'>Add Collaborators</span>

      <div className="add-collaborators">
        <div className="add-collaborators__chip add-collaborators__chip--purple">
          <img src="https://external-preview.redd.it/hWmWtnBtwzuUYvwyKrwF_fMY6DPp0QcRioEogbtobkI.jpg?auto=webp&s=afd433f5211abd7c8a3eed417664bd5d16935f3b" alt="" />
          Angela
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="add-collaborators__chip add-collaborators__chip--green">
          <img src="https://external-preview.redd.it/hWmWtnBtwzuUYvwyKrwF_fMY6DPp0QcRioEogbtobkI.jpg?auto=webp&s=afd433f5211abd7c8a3eed417664bd5d16935f3b" alt="" />
          Chris
          <i className="fa-solid fa-xmark"></i>
        </div>
        <button className="add-collaborators__btn">
          +
        </button>
        <button className="add-collaborators__enter">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Helperbar