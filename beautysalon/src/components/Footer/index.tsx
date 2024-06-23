import styles from "./index.module.sass";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_block_1}>
                <p>Студия красоты "Можно Всё!"</p>
            </div>
            <div className={styles.footer_block_2}>
                <Link to="/service_manicure"><p>Маникюр</p></Link>
                <Link to="/service_pedicure"><p>Педикюр</p></Link>
                <Link to="/service_brows"><p>Брови</p></Link>
                <Link to="/service_bodycare"><p>Уход за телом</p></Link>
            </div>
            <div className={styles.footer_block_3}>
                <Link to="/service_haircuts"><p>Стрижки</p></Link>
                <Link to="/service_coloring"><p>Окрашивания</p></Link>
                <Link to="/service_makeup_hairstyle"><p>Макияж и причёски</p></Link>
                <Link to="/service_cosmetology"><p>Косметология</p></Link>
            </div>
        </footer>
    );
};
