import styles from './index.module.sass'
import purple_block1 from "@images/purple_block1.png";
import purple_block2 from "@images/purple_block2.png";
import purple_block3 from "@images/purple_block3.png";
import pedicure_block2 from "@images/nails2 2.png";
import pedicure_block1 from "@images/прозрачный рисунок foot.png";


export const PricesPedicure = () => {
    return (
        <div>
            <div className={styles.PricePedicureContainer}>
                <div className={styles.textSections}>
                    <div className={styles.textSection}>
                        <h3>Педикюр</h3>
                        <p>Классический педикюр с удалением натоптышей и огрубевшей кожи.</p>
                        <p>от 1800 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Аппаратный педикюр</h3>
                        <p>Безопасный и деликатный уход за стопами с помощью специального оборудования.</p>
                        <p>от 2200 руб</p>
                    </div>
                    <div className={styles.textSection}>
                        <h3>Педикюр с покрытием гель-лак</h3>
                        <p>Идеальный цвет для ваших ножек на долгое время.</p>
                        <p>от 2600 руб</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={purple_block1} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block2} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={purple_block3} alt="Фиолетовый фон"/>
                    <img className={styles.imageContainer} src={pedicure_block1} alt="Прозрачная картинка"/>
                    <img className={styles.imageContainer} src={pedicure_block2} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};