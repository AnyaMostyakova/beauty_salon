import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_cosmetology1 from "@images/косметология1.png";
import main_photo_cosmetology2 from "@images/косметология2.png";
import main_photo_cosmetology3 from "@images/косметология3.png";

export const DescriptionCosmetology = () => {
    return (
        <div>
            <div className={styles.serviceCosmetologyContainer}>
                <div className={styles.textSection}>
                    <h3>Косметология</h3>
                    <p>Красота - не только внешняя, но и внутренняя. Наши косметологи помогут вам обрести здоровое сияние и уверенность в себе.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_cosmetology1} alt="Фотография"/>
                    <img className={styles.imageContainer} src={ main_photo_cosmetology2} alt="Фотография"/>
                    <img className={styles.imageContainer} src={ main_photo_cosmetology3} alt="Фотография"/>
                </div>
            </div>
        </div>
    );
};