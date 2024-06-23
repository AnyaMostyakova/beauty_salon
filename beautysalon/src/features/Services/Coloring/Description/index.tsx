import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_coloring1 from "@images/окрашивание2.png";
import main_photo_coloring2 from "@images/окрашивание1.png";
import main_photo_coloring3 from "@images/окрашивание3.png";

export const DescriptionColoring = () => {
    return (
        <div>
            <div className={styles.serviceColoringContainer}>
                <div className={styles.textSection}>
                    <h3>Окрашивание</h3>
                    <p>Пора перемен? Добавьте ярких красок в свою жизнь! Наши колористы - настоящие художники, которые воплотят в жизнь ваши самые смелые идеи.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_coloring1} alt="Фотография окрашивания"/>
                    <img className={styles.imageContainer} src={ main_photo_coloring2} alt="Фотография окрашивания"/>
                    <img className={styles.imageContainer} src={ main_photo_coloring3} alt="Фотография окрашивания"/>
                </div>
            </div>
        </div>
    );
};