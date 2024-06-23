import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_body_care1 from "@images/уход для тела1.png";
import main_photo_body_care2 from "@images/уход для тела2.png";
import main_photo_body_care3 from "@images/pedicur2.png";

export const DescriptionBodyCare = () => {
    return (
        <div>
            <div className={styles.serviceBodyCareContainer}>
                <div className={styles.textSection}>
                    <h3>Уход за телом</h3>
                    <p>Позвольте себе расслабиться и забыть обо всех заботах. Наши специалисты предлагают широкий спектр услуг по уходу за телом. </p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_body_care1} alt="Фотография ухода за телом"/>
                    <img className={styles.imageContainer} src={ main_photo_body_care2} alt="Фотография ухода за телом"/>
                    <img className={styles.imageContainer} src={ main_photo_body_care3} alt="Фотография ухода за телом"/>
                </div>
            </div>
        </div>
    );
};