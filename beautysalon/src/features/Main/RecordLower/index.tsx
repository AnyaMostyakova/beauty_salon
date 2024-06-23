import styles from './index.module.sass';
import { ButtonRecord } from "../../../components";

export const RecordLower = () => {
    return (
        <div>
            <div className={styles.block}>
                <div className={styles.block__content}>
                    <div className={styles.block__text}>
                        <h1>
                            Что мы делаем?
                        </h1>
                        <p>
                            Ногти, брови, ресницы, макияж, стрижки, пиллинг и массаж — Можно Все! И в одном месте!
                        </p>
                    </div>
                    <div className={styles.block__button}>
                        <ButtonRecord/>
                    </div>
                </div>
            </div>
        </div>
    );
};
