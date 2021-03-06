import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const Sidebar = ({ show, MenuClose }) => {
    const [session] = useSession();
    const router = useRouter();
 
    return (
        <div className={show ? "sidebar active" : "sidebar"}>
            <div className="user-info">
                <img className='user-avatar' src={session?.user.image} alt={session?.user.name} />
                <div className='d-flex flex-column'>
                    <h4 className='user-name'>{session?.user.name}</h4>
                    <h4 className='user-position'>Front-end developer</h4>
                </div>
                <button type='button' className='menu-close' onClick={() => MenuClose(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <h5 className="sidebar__caption">
                Menu
            </h5>
            <ul className='sidebar-nav'>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/my-tasks">
                        <a className={router.pathname == "/dashboard/my-tasks" ? "active" : ""} onClick={() => MenuClose(false)}>
                            <i className="fa-solid fa-list-check"></i>
                            My tasks
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/inbox">
                        <a className={router.pathname == "/dashboard/inbox" ? "active" : ""} onClick={() => MenuClose(false)}>
                            <i className="fa-solid fa-inbox"></i>
                            Inbox
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/projects" >
                        <a className={router.pathname == "/dashboard/projects" ? "active" : ""} onClick={() => MenuClose(false)}>
                            <i className="fa-solid fa-diagram-project"></i>
                            Projects
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/standups" >
                        <a className={router.pathname == "/dashboard/standups" ? "active" : ""} onClick={() => MenuClose(false)}>
                            <i className="fa-regular fa-clock"></i>
                            Standups
                        </a>
                    </Link>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/meetings" >
                        <a className={router.pathname == "/dashboard/meetings" ? "active" : ""} onClick={() => MenuClose(false)}>
                            <i className="fa-regular fa-calendar-minus"></i> 
                            Meetings
                        </a>
                    </Link>
                    <span className='sidebar-nav__notification'>5</span>
                </li>
                <li className="sidebar-nav__item">
                    <Link href="/dashboard/settings" >
                        <a className={router.pathname == "/dashboard/settings" ? "active" : ""} onClick={() => MenuClose(false)}> 
                            <i className="fa-solid fa-sliders"></i>
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
                <i className="fa-solid fa-plus"></i>
            </button>

            <p className='copyright-text'>2022 Nijat Garayev License</p>
        </div>
    )
}

export default Sidebar