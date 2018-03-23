import React from 'react';
import { SIGNUP_URL } from 'shared/constants';

const SidebarNewUsers = () => (
    <div className="c-sidebar__module">
        <div className="c-sidebar__header">
            <h3 className="c-sidebar__h3">Новичку</h3>
        </div>
        <div className="c-sidebar__content">
            <ul className="c-sidebar__list">
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/welcome">
                        Быстрый старт
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="https://vox.community">
                        Блокчейн
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/faq.html">
                        ЧАВО
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href={SIGNUP_URL}>
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default SidebarNewUsers;
