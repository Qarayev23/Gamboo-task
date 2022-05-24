import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client';

const Sidebar = () => {
    const [session] = useSession();

    return (
        <div className="sidebar">
            <div className="user-info">
                <img className='user-avatar' src={session?.user.image} alt={session?.user.name} />
                <div className='d-flex flex-column'>
                    <h4 className='user-name'>{session?.user.name}</h4>
                    <h4 className='user-position'>Front-end developer</h4>
                </div>
            </div>
            <h5 className="sidebar__caption">
                Menu
            </h5>
            <ul className='sidebar-nav'>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link sidebar-nav__link--active">
                            <i class="fa-solid fa-list-check"></i>
                            My tasks
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link">
                            <i class="fa-solid fa-inbox"></i>
                            Inbox
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link">
                            <i class="fa-solid fa-diagram-project"></i>
                            Projects
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link">
                            <i class="fa-regular fa-clock"></i>
                            Standups
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link">
                            <i class="fa-regular fa-calendar-minus"></i>
                            Meetings
                        </a>
                    </Link>
                    <span className='sidebar-nav__notification'>5</span>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/">
                        <a className="sidebar-nav__link">
                            <i class="fa-solid fa-sliders"></i>
                            Settings
                        </a>
                    </Link>
                </li>
            </ul>
            <h5 className="sidebar__caption">
                Favorites
            </h5>
            <ul className='favorites'>
                <li className='favorites__item'>
                    <span className='favorites__icon'></span>
                    <p className='favorites__text'>Redwhale Design</p>
                </li>
                <li className='favorites__item'>
                    <span className='favorites__icon'></span>
                    <p className='favorites__text'>Mobile App Mockup</p>
                </li>
                <li className='favorites__item'>
                    <span className='favorites__icon'></span>
                    <p className='favorites__text'>UI Design Revision</p>
                </li>
            </ul>

            <button type='button' className='add-task'>
                <i class="fa-solid fa-plus"></i>
            </button>

            <p className='copyright-text'>2022 Nijat Garayev License</p>
        </div>
    )
}

export default Sidebar