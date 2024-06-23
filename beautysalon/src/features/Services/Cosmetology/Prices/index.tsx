import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import cosmetology_block1 from "@images/косметология прозрачный рисунок.png";
import cosmetology_block2 from "@images/прозрачный рисунок brows.png";


export const PricesCosmetology = () => {
    return (
        <div>
            <div className={styles.PriceCosmetologyContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Косметология</h3>
                        <p>Профессиональная чистка лица для сияющей кожи.</p>
                        <p>от 2000 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Массаж лица</h3>
                        <p>Омолаживающий массаж для упругости и свежести кожи.</p>
                        <p>от 2500 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Пилинг лица</h3>
                        <p>Глубокое очищение и обновление кожи лица.</p>
                        <p>от 3000 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={cosmetology_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={cosmetology_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};