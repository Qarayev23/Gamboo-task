import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Helperbar = () => {
  return (
    <div className='helperbar'>
      <div className="d-flex justify-content-between">
        <h3 className='g-title'>Today&apos;s Scheudle</h3>
        <div className="scheudle-icons">
          <i className="fa-solid fa-list"></i>
          <i className="fa-solid fa-calendar-days"></i>
        </div>
      </div>

      <div className="call section-gap">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <p className="call__text">30 minutes call with Client</p>
            <h5 className='call__title'>Project Discovery Call</h5>
          </div>
          <button className='invite-btn'>
            <i className="fa-solid fa-plus"></i>
            Invite
          </button>
        </div>
        <div className="call__box section-gap">
          <div className="collaborators">
            <div className='collaborators__img'>
              <img src="/img/col-1.webp" alt="" />
            </div>
            <div className='collaborators__img'>
              <img src="/img/col-2.jpeg" alt="" />
            </div>
            <div className='collaborators__img'>
              <img src="/img/col-3.webp" alt="" />
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

      <div className="task-status section-gap">
        <div className="d-flex justify-content-between">
          <h5 className='task-status__title'>Design Project</h5>
          <span className='decor'>..</span>
        </div>

        <div className="d-flex mt-2">
          <i className="fa-solid fa-fire-flame-curved task-status__icon"></i>
          <p className='g-subtitle'>In Progress</p>
        </div>

        <div className="d-flex justify-content-between section-gap">
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
                <img src="/img/col-1.webp" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="/img/col-2.jpeg" alt="" />
              </div>
              <div className='collaborators__img'>
                <img src="/img/col-3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between section-gap">
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
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/img/smile.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <span className='g-subtitle d-block mt-3 mb-md-2 mb-3'>Add Collaborators</span>

      <div className="add-collaborators">
        <div className="add-collaborators__chip add-collaborators__chip--purple">
        <img src="/img/col-1.webp" alt="" />
          Angela
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="add-collaborators__chip add-collaborators__chip--green">
        <img src="/img/col-1.webp" alt="" />
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