import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import coloring_block1 from "@images/стрижки и прически прозрачный рисунок.png";
import coloring_block2 from "@images/окрашивание прозрачный рисунок.png";


export const PricesColoring = () => {
    return (
        <div>
            <div className={styles.PriceColoringContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Окрашивание волос</h3>
                        <p>Стойкое окрашивание волос в модные оттенки.</p>
                        <p>от 2500 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Мелирование волос</h3>
                        <p>Создадим игру цвета и объема на ваших локонах.</p>
                        <p>от 3000 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Тонирование волос</h3>
                        <p>Нежные и натуральные оттенки для вашей прически.</p>
                        <p>от 2000 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={coloring_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={coloring_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};