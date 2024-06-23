import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import nails_block1 from "@images/nails2 1.png";
import nails_block2 from "@images/nails2 2.png";


export const PricesManicure = () => {
    return (
        <div>
            <div className={styles.PriceManicureContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Маникюр</h3>
                        <p>Приведем в порядок ваши пальчики. Делаем аппаратный и новый пилочный маникюр.</p>
                        <p>от 1600 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Маникюр с покрытием гель-лак</h3>
                        <p>Подберем идеальный цвет под настроение и стиль.</p>
                        <p> от 2100 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Маникюр с уходом для рук</h3>
                        <p>Забота о здоровье ногтей и кожи рук.</p>
                        <p>от 2300 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={nails_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={nails_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};