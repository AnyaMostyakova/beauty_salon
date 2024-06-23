import { Link } from 'react-router-dom';
import styles from './index.module.sass';

export const ButtonRecord = () => {
    return (
        <Link to="/record" className={styles.buttonRecord}>
            Записаться
        </Link>
    );
};
