import React, { useState} from 'react';
import styles from './index.module.sass';
import teamImage from '@images/команда.png';
import arrow_right from '@images/стрелка_вправо.png';
import arrow_left from '@images/стрелка_влево.png'

type ContentBlock = {
    id: number;
    text1: string;
    text2: string;
};
export const TeamWorkers: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentList: ContentBlock[] = [
        { id: 1, text1: 'Анна', text2: '#основатель студии' },
        { id: 2, text1: 'Мария', text2: '#администратор' },
        { id: 3, text1: 'Елена', text2: '#администратор' },
        { id: 4, text1: 'Арина', text2: '#мастер ногтевого сервиса' },
        { id: 5, text1: 'Амина', text2: '#мастер ногтевого сервиса' },
        { id: 6, text1: 'Амалия', text2: '#мастер brow сервиса' },
        { id: 7, text1: 'Диана', text2: '#визажист' },
        { id: 8, text1: 'Ева', text2: '#стилист-коллорист' },
        { id: 9, text1: 'Алия', text2: '#косметолог' },
        { id: 10, text1: 'Дарья', text2: '#мастер spa сервиса' },
    ];

    const goBack = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? contentList.length - 4 : prevIndex - 1));
    };

    const goForward = () => {
        setActiveIndex((prevIndex) => (prevIndex === contentList.length - 4 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.team}>
            <button onClick={goBack} className={styles.button}>
                <img src={arrow_left} alt="Button Image" />
            </button>
            <div className={styles.contentBlocksContainer}>
                {contentList.map((block, index) => (
                    <div
                        key={block.id}
                        className={`${styles.contentBlockWrapper} ${index >= activeIndex && index < activeIndex + 4 ? styles.active : ''}`}
                        style={{
                            transform: `translateX(${(index - activeIndex) * 100}%)`,
                            zIndex: 10 - Math.abs(index - activeIndex),
                        }}
                    >
                        <ContentBlock id={block.id} text1={block.text1} text2={block.text2} />
                    </div>
                ))}
            </div>
            <button onClick={goForward} className={styles.button}>
                <img src={arrow_right} alt="Button Image" />
            </button>
        </div>
    );
};

const ContentBlock: React.FC<ContentBlock> = ({ text1, text2 }) => {
    return (
        <div className={styles.contentBlock}>
            <img src={teamImage} alt="Фотография_сотрудника" />
            <h3>{text1}</h3>
            <p>{text2}</p>
        </div>
    );
};