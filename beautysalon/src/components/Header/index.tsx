import styles from './index.module.sass';
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <div className={styles.navigation}>
            <nav className={styles.navigation_words}>
                <div className={styles.navigations__link}>
                    <Link to ="/" className={styles.navigation__button}>Главная</Link>
                    <Link to ="#team" className={styles.navigation__button}>Команда</Link>
                    <Link to="#reviews" className={styles.navigation__button}>Отзывы</Link>
                    <Link to="#contacts" className={styles.navigation__button}>Контакты</Link>
                </div>
                <div className={styles.navigation__labels}>
                    <a href="tel:+79534862110" className={styles.navigation__label}>+7 (953)4-862-110</a>
                    <address className={styles.navigation__label}> Москва, Калашный пер., 5</address>
                </div>
            </nav>
        </div>
    );
};