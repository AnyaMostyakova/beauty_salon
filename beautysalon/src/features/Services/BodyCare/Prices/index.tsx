import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import bodyCare_block1 from "@images/уход для тела прозрачный рисоунок1.png";
import bodyCare_block2 from "@images/уход для тела прозрачный рисунок 2.png";


export const PricesBodyCare = () => {
    return (
        <div>
            <div className={styles.PriceBodyCareContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Уход за телом</h3>
                        <p>Классический массаж всего тела для полного расслабления.</p>
                        <p>от 2500 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Обертывание для тела</h3>
                        <p>Эффективная процедура для упругости и гладкости кожи.</p>
                        <p>от 3000 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Пилинг для тела</h3>
                        <p>Глубокое очищение и омоложение кожи всего тела.</p>
                        <p>от 3500 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={bodyCare_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={bodyCare_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};