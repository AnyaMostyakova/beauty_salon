import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import makeupHairstyle_block1 from "@images/макияж прозрачный.png";
import makeupHairstyle_block2 from "@images/стрижки и прически прозрачный рисунок.png";


export const PricesMakeupHairstyle = () => {
    return (
        <div>
            <div className={styles.PriceMakeupHairstyleContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Макияж</h3>
                        <p>Дневной макияж для свежего и ухоженного вида.</p>
                        <p>от 1500 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Вечерний макияж</h3>
                        <p>Роскошный макияж для особых случаев и торжеств.</p>
                        <p>от 2500 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Причёски</h3>
                        <p>Создадим идеальную укладку для вашего образа.</p>
                        <p>от 1000 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={makeupHairstyle_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={makeupHairstyle_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};