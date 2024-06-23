import styles from './index.module.sass';
import changes1 from "@images/фото_изменений1.png";
import changes2 from "@images/фото_изменений2.png";
import changes3 from "@images/фото_изменений3.png";
import changes4 from "@images/фото_изменений4.png";
import changes5 from "@images/фото_изменений5 1.png";
import changes6 from "@images/фото_изменений6.png";
import changes7 from "@images/фото_изменений7.png";

export const Changes = () => {
    return (
        <div className={styles['Changes-container']}>
            <p>
                Не бойтесь меняться
            </p>
            <p>
                Помогаем найти стиль, который отражает вас.
                Посмотрите как мы это делаем.
            </p>
            <div className={styles.container}>
                <img className={styles['image-container']} src={changes1} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes5} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes4} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes2} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes3} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes6} alt="Фотография_изменений"/>
                <img className={styles['image-container']} src={changes7} alt="Фотография_изменений"/>
            </div>
        </div>
    );
};
