import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_makeupHairstyle1 from "@images/макияж1.png";
import main_photo_makeupHairstyle2 from "@images/макияж2.png";
import main_photo_makeupHairstyle3 from "@images/макияж3.png";

export const DescriptionMakeupHairstyle = () => {
    return (
        <div>
            <div className={styles.serviceMakeupHairstyleContainer}>
                <div className={styles.textSection}>
                    <h3>Макияж и причёски</h3>
                    <p>Готовы сиять? Наши стилисты создадут для вас безупречный макияж и роскошную причёску, идеально подчеркивающие вашу естественную красоту!</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_makeupHairstyle1} alt="Фотография макияжа"/>
                    <img className={styles.imageContainer} src={ main_photo_makeupHairstyle2} alt="Фотография макияжа"/>
                    <img className={styles.imageContainer} src={ main_photo_makeupHairstyle3} alt="Фотография макияжа"/>
                </div>
            </div>
        </div>
    );
};