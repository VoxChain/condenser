import React from 'react';
import SvgImage from 'app/components/elements/SvgImage';
import { Link } from 'react-router';
import Icon from 'app/components/elements/Icon';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div className="Header__top header">
                    <div className="columns">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li className="Header__top-logo">
                                    <Link to="/">
                                        <Icon name="vox" size="2x" />
                                    </Link>
                                </li>
                                <li className="Header__top-steemit show-for-medium noPrint">
                                    <a href="/">
                                        vox<span className="beta">
                                            beta
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="NotFound float-center">
                    <div>
                        <Icon name="vox" size="4x" />
                        <h4 className="NotFound__header">
                            Страница не найдена.
                        </h4>
                        <p>
                            Не беспокойтесь. Вы можете вернуться назад{' '}
                            <a style={{ fontWeight: 800 }} href="/">
                                главную страницу
                            </a>, или посмотреть другие посты.
                        </p>
                        <ul className="NotFound__menu">
                            <li>
                                <a href="/created">Новое</a>
                            </li>
                            <li>
                                <a href="/hot">Горячее</a>
                            </li>
                            <li>
                                <a href="/trending">Тренды</a>
                            </li>
                            <li>
                                <a href="/promoted">Продвигаемые</a>
                            </li>
                            <li>
                                <a href="/active">Активные</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: '*',
    component: NotFound,
};
