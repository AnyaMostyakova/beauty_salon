import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.sass';
import {Link} from "react-router-dom";
import flowers from "@images/flovers 1.png";
import angle1 from "@images/уголки_вход.png";
import angle2 from "@images/уголки_вход2.png";
import angle3 from "@images/уголки_вход3.png";
import angle4 from "@images/уголки_вход4.png";

interface FormData {
    name: string;
    phone: string;
    service: string;
    master: string;
    date: Date | null;
    time: string;
}

export const RecordForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Пожалуйста, введите ваше имя.'),
        phone: Yup.string()
            .matches(/^\+7\d{10}$/, 'Введите корректный номер телефона, начинающийся с +7')
            .required('Введите номер телефона.'),
        service: Yup.string().required('Выберите услугу.'),
        master: Yup.string().required('Выберите мастера.'),
        date: Yup.date()
            .min(new Date(), 'Выберите дату.')
            .required('Выберите дату.'),
        time: Yup.string().oneOf(['10:00', '12:00', '14:00', '16:00', '18:00'], 'Выберите доступное время.').required('Пожалуйста, выберите время.'),
    });

    const initialValues: FormData = {
        name: '',
        phone: '',
        service: '',
        master: '',
        date: null,
        time: '',
    };

    const handleSubmit = (values: FormData) => {
        console.log('Форма успешно отправлена:', values);
    };

    return (
        <div className={styles.recordForm}>
            <div className={styles.record_body}>
                <div className={styles.image_container}>
                    <img src={flowers} alt="flowers"/>
                </div>
                <div className={styles.image_container}>
                    <img src={angle1} alt="angle"/>
                </div>
                <div className={styles.image_container}>
                    <img src={angle2} alt="angle"/>
                </div>
                <div className={styles.image_container}>
                    <img src={angle3} alt="angle"/>
                </div>
                <div className={styles.image_container}>
                    <img src={angle4} alt="angle"/>
                </div>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={styles.recordField}>
                            <Field
                                placeholder="Введите ваше имя"
                                type="text"
                                id="name"
                                name="name"
                                className={styles.recordInput}
                            />
                            {errors.name && touched.name && (
                                <div className={`${styles.recordError} error-message`}>{errors.name}</div>
                            )}
                        </div>
                        <div className={styles.recordField}>
                            <Field
                                placeholder="Введите номер телефона"
                                type="tel"
                                id="phone"
                                name="phone"
                                className={styles.recordInput}
                            />
                            {errors.phone && touched.phone && (
                                <div className={`${styles.recordError} error-message`}>{errors.phone}</div>
                            )}
                        </div>
                        <div className={styles.recordField}>
                            <Field as="select" id="service" name="service" className={styles.recordInput}>
                                <option value="">Выберите услугу</option>
                                <option value="bodycare">Уход за телом</option>
                                <option value="cosmetology">Косметология</option>
                                <option value="brows">Коррекция бровей</option>
                                <option value="coloring">Окрашивание</option>
                                <option value="manicure">Маникюр</option>
                                <option value="pedicure">Педикюр</option>
                            </Field>
                            {errors.service && touched.service && (
                                <div className={`${styles.recordError} error-message`}>{errors.service}</div>
                            )}
                        </div>
                        <div className={styles.recordField}>
                            <Field as="select" id="master" name="master" className={styles.recordInput}>
                                <option value="">Выберите мастера</option>
                                <option value="anna">Анна</option>
                                <option value="amina">Амина</option>
                                <option value="karina">Карина</option>
                                <option value="alice">Алиса</option>
                                <option value="polina">Полина</option>
                                <option value="milana">Милана</option>
                            </Field>
                            {errors.master && touched.master && (
                                <div className={`${styles.recordError} error-message`}>{errors.master}</div>
                            )}
                        </div>
                        <div className={styles.recordField}>
                            <Field
                                placeholder='Выберите дату'
                                type="date"
                                id="date"
                                name="date"
                                min={new Date().toISOString().split('T')[0]}
                                className={styles.recordInput}
                            />
                            {errors.date && touched.date && (
                                <div className={`${styles.recordError} error-message`}>{errors.date}</div>
                            )}
                        </div>
                        <div className={styles.recordField}>
                            <Field placeholder='Выберите время' as="select" id="time" name="time" className={styles.recordInput}>
                                <option value="10:00">10:00</option>
                                <option value="12:00">12:00</option>
                                <option value="14:00">14:00</option>
                                <option value="16:00">16:00</option>
                                <option value="18:00">18:00</option>
                            </Field>
                            {errors.time && touched.time && (
                                <div className={`${styles.recordError} error-message`}>{errors.time}</div>
                            )}
                        </div>
                        <button type="submit" className={styles.recordSubmit}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
            <div className={styles.link}>
                <Link to="/login" className={styles.customLink}>Вход в личный кабинет</Link>
            </div>
        </div>
    );
};


