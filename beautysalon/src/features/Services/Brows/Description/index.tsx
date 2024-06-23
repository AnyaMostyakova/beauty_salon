import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_brows1 from "@images/brows1.png";
import main_photo_brows2 from "@images/brows2.png";
import main_photo_brows3 from "@images/brows3.png";

export const DescriptionBrows = () => {
    return (
        <div>
            <div className={styles.serviceBrowsContainer}>
                <div className={styles.textSection}>
                    <h3>Брови</h3>
                    <p>Идеальные брови - основа прекрасного макияжа. Наши специалисты подберут идеальную форму бровей, которая подчеркнет все достоинства вашего лица.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_brows1} alt="Фотография бровей"/>
                    <img className={styles.imageContainer} src={main_photo_brows2} alt="Фотография бровей"/>
                    <img className={styles.imageContainer} src={main_photo_brows3} alt="Фотография бровей"/>
                </div>
            </div>
        </div>
    );
};