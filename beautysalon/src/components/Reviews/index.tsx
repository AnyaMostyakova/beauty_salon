import React, { useState } from 'react';
import arrow_left from "@images/стрелка_влево.png";
import arrow_right from "@images/стрелка_вправо.png";
import clientImage from "@images/команда.png";
import styles from './index.module.sass';

type ContentBlock = {
    id: number;
    text1: string;
}

export const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentList: ContentBlock[] = [
        { id: 1, text1: "Нереально люблю места с крутым интерьером. А если еще там люди душевные — двойная любовь. Согласитесь, приятно прийти в место, где тебя встречают с улыбкой, с кофе! Действительно, «Можно Всё» место для девочек." },
        { id: 2, text1: "Это место просто прекрасно! Интерьер, атмосфера, персонал - все на высшем уровне. Приходите сюда за положительными эмоциями и незабываемыми впечатлениями." },
        { id: 3, text1: "Это место стоит посетить! Здесь есть все, что нужно для комфортного отдыха и приятного времяпрепровождения. Рекомендую всем!" },
        { id: 4, text1: "Студия поразила меня своим великолепным оформлением и дружелюбной атмосферой. Отличное место для встреч с друзьями и близкими." },
        { id: 5, text1: "Я в восторге от этой студии! Невероятно красивый интерьер, профессиональный персонал и широкий спектр услуг. Обязательно вернусь сюда еще!" },
        { id: 6, text1: "Замечательная студия, с удовольствием рекомендую ее всем. Отличный сервис, уютная обстановка и приятная ценовая политика." },
        { id: 7, text1: "Это место стало для меня настоящим открытием! Здесь я всегда чувствую себя как дома. Обязательно приходите сюда, не пожалеете!" },
        { id: 8, text1: "Я в восторге от этой студии! Невероятно красивый интерьер, профессиональный персонал и широкий спектр услуг. Обязательно вернусь сюда еще!" },
        { id: 9, text1: "Это место стало для меня настоящим открытием! Здесь я всегда чувствую себя как дома. Обязательно приходите сюда, не пожалеете!" },
        { id: 10, text1: "Замечательная студия, с удовольствием рекомендую ее всем. Отличный сервис, уютная обстановка и приятная ценовая политика." }
    ];

    const goForward = () => {
        if (activeIndex < contentList.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const goBack = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <div className={styles.backReviews}>
            <p className={styles.text}>
                Что говорят о нашей студии наши любимые клиенты:
            </p>
            <div className={styles.review}>
                <button className={styles.button} onClick={goBack}>
                    <img src={arrow_left} alt="Button Image" />
                </button>
                <div className={styles.contentReviewContainer}>
                    {contentList.map((item, index) => (
                        <ContentBlock
                            key={item.id}
                            id={item.id}
                            text1={item.text1}
                            className={`${styles.contentReview} ${activeIndex === index ? `${styles.active}` : activeIndex > index ? '' : `${styles.next}`}`}
                        />
                    ))}
                </div>

                <button className={styles.button} onClick={goForward}>
                    <img src={arrow_right} alt="Button Image" />
                </button>
            </div>
        </div>
    );
};

const ContentBlock: React.FC<ContentBlock & { className?: string; style?: React.CSSProperties }> = ({ text1, className, style }) => {
    return (
        <div className={className} style={style}>
            <p>{text1}</p>
            <img src={clientImage} alt="Фотография_клиента" />
        </div>
    );
};
