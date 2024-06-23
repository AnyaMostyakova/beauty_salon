import styles from './index.module.sass';
import { Link } from 'react-router-dom';

export const Services = () => {
    const words = [
        { text: 'Маникюр', link: '/service_manicure' },
        { text: 'Педикюр', link: '/service_pedicure' },
        { text: 'Брови', link: '/service_brows' },
        { text: 'Уход за телом', link: '/service_bodycare' },
        { text: 'Стрижки', link: '/service_haircuts' },
        { text: 'Окрашивания', link: '/service_coloring' },
        { text: 'Макияжи и причёски', link: '/service_makeup_hairstyle' },
        { text: 'Косметология', link: '/service_cosmetology' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                {words.slice(0, 4).map((word, index) => (
                    <div key={index} className={styles.word}>
                        <div className={styles.bullet} />
                        <Link to={word.link}>{word.text}</Link>
                    </div>
                ))}
            </div>
            <div className={styles.column}>
                {words.slice(4).map((word, index) => (
                    <div key={index + 4} className={styles.word}>
                        <div className={styles.bullet} />
                        <Link to={word.link}>{word.text}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
