import "./Header.scss"
import logo from "../../assets/logo.png"
import user_avatar from "../../assets/user_avatar.png"

export default function Header(){
    return (
        <header className="header">
            <div className="header__logo header-logo">
                <img src={logo} alt=""/>
                <a href="#" className="header-logo__name">FocusLinker</a>
            </div>
            <ul className="header__navigation header-navigation">
                <li className="header-navigation__item header-navigation__item_active"><a href="#"
                                                                                          className="header-navigation__link">Dashboard</a>
                </li>
                <li className="header-navigation__item"><a href="" className="header-navigation__link">Рабочее
                    пространство</a></li>
                <li className="header-navigation__item"><a href="" className="header-navigation__link">Календарь</a>
                </li>
                <li className="header-navigation__item"><a href="" className="header-navigation__link">Аналитика</a>
                </li>
            </ul>
            <div className="header__user-info header-user-info">
                <a href="" className="header-user-info__username">Иванов И.И.</a>
                <div className="header-user-info__icon">
                    <img src={user_avatar} alt="" srcSet=""/>
                </div>
            </div>
        </header>
    )
}