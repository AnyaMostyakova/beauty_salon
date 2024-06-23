import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import haircuts_block1 from "@images/стрижки и прически прозрачный рисунок.png";
import haircuts_block2 from "@images/окрашивание прозрачный рисунок.png";


export const PricesHaircuts = () => {
    return (
        <div>
            <div className={styles.PriceHaircutsContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Стрижки</h3>
                        <p>Модная женская стрижка на любую длину волос.</p>
                        <p>от 1200 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Мужская стрижка</h3>
                        <p>Стильная стрижка для истинных джентльменов.</p>
                        <p>от 800 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Детская стрижка</h3>
                        <p>Аккуратная и стильная стрижка для юных модников.</p>
                        <p>от 600 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={haircuts_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={haircuts_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};