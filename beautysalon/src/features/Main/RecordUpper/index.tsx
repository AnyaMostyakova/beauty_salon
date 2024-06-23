import styles from './index.module.sass'
import {ButtonRecord} from "../../../components";
import main_photo1 from "@images/фото_главный1.png";
import main_photo2 from "@images/фото_главный2.png";
import vector from "@images/Vector 3.png";
import main_photo3 from "@images/прозрачный_рисунок_главнй 1 (1).png";

export const RecordUpper = () => {
    return (
        <div>
            <div className={styles.recordUpperContainer}>
                <div className={styles.textSection}>
                    <p>Можно Всё — новая студия красоты в сердце Москвы</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={vector} alt="Иконка"/>
                    <img className={styles.imageContainer} src={main_photo1} alt="Фотография моделей"/>
                    <img className={styles.imageContainer} src={main_photo2} alt="Фотография моделей"/>
                    <img className={styles.imageContainer} src={main_photo3} alt="Прозрачная картинка"/>
                </div>
            </div>
        </div>
    );
};