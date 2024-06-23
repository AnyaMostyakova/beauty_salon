import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_haircuts1 from "@images/стрижки1.png";
import main_photo_haircuts2 from "@images/стрижки2.png";
import main_photo_haircuts3 from "@images/стрижки3.png";

export const DescriptionHaircuts = () => {
    return (
        <div>
            <div className={styles.serviceHaircutsContainer}>
                <div className={styles.textSection}>
                    <h3>Стрижки</h3>
                    <p>Ваши волосы - ваша корона. Доверьте их профессионалам, которые создадут для вас стильную и индивидуальную стрижку, подчеркивающую ваши лучшие черты.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_haircuts1} alt="Фотография стрижки"/>
                    <img className={styles.imageContainer} src={ main_photo_haircuts2} alt="Фотография стрижки"/>
                    <img className={styles.imageContainer} src={ main_photo_haircuts3} alt="Фотография стрижки"/>
                </div>
            </div>
        </div>
    );
};