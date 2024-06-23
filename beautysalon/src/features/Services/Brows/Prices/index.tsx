import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import brows_block1 from "@images/прозрачный рисунок brows.png";
import brows_block2 from "@images/косметология прозрачный рисунок.png";


export const PricesBrows = () => {
    return (
        <div>
            <div className={styles.PriceBrowsContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Брови</h3>
                        <p>Коррекция формы бровей по классической технологии.</p>
                        <p>от 600 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Окрашивание бровей</h3>
                        <p>Придадим вашим бровям насыщенный цвет и четкие контуры.</p>
                        <p>от 800 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Ламинирование бровей</h3>
                        <p>Инновационная процедура для идеального изгиба бровей.</p>
                        <p>от 1500 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={brows_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={brows_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};