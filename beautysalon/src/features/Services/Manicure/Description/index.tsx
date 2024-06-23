import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_manicure1 from "@images/ногти1 1.png";
import main_photo_manicure2 from "@images/ногти2 1.png";
import main_photo_manicure3 from "@images/ногти 3.png";

export const DescriptionManicure = () => {
    return (
        <div>
            <div className={styles.serviceManicureContainer}>
                <div className={styles.textSection}>
                    <h3>Маникюр</h3>
                    <p>Маникюр, гель лак, уход, а также любой дизайн. Сделаем все, что вы сможете себе представить. И посоветуем то, что вы даже не представляли.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_manicure1} alt="Фотография ногтей"/>
                    <img className={styles.imageContainer} src={main_photo_manicure2} alt="Фотография ногтей"/>
                    <img className={styles.imageContainer} src={main_photo_manicure3} alt="Фотография ногтей"/>
                </div>
            </div>
        </div>
    );
};