import styles from './index.module.sass'
import {ButtonRecord} from "../../../../components";
import main_photo_pedicure1 from "@images/pedicur2.png";
import main_photo_pedicure2 from "@images/pedicur1.png";
import main_photo_pedicure3 from "@images/pedicur3.png";

export const DescriptionPedicure = () => {
    return (
        <div>
            <div className={styles.servicePedicureContainer}>
                <div className={styles.textSection}>
                    <h3>Педикюр</h3>
                    <p>Забудьте о натоптышах и грубых пятках. Наши мастера проведут профессиональный педикюр, который подарит вашим ножкам ухоженный вид.</p>
                </div>
                <div className={styles.blockButton}>
                    <ButtonRecord/>
                </div>
                <div className={styles.container}>
                    <img className={styles.imageContainer} src={main_photo_pedicure1} alt="Фотография ногтей"/>
                    <img className={styles.imageContainer} src={main_photo_pedicure2} alt="Фотография ногтей"/>
                    <img className={styles.imageContainer} src={main_photo_pedicure3} alt="Фотография ногтей"/>
                </div>
            </div>
        </div>
    );
};