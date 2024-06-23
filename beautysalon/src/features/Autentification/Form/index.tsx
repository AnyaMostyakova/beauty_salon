import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './index.module.sass';
import flowers from "@images/flovers 1.png";
import angle1 from "@images/уголки_вход.png";
import angle2 from "@images/уголки_вход2.png";
import angle3 from "@images/уголки_вход3.png";
import angle4 from "@images/уголки_вход4.png";

interface FormValues {
    phoneNumber: string;
    password: string;
}

interface ApiResponse {
    success: boolean;
    error: string;
    data: any;
}

export const LoginForm = () => {
    const initialValues = { phoneNumber: '', password: '' };
    const validationSchema = Yup.object({
        phoneNumber: Yup.string()
            .matches(/^\+7\d{10}$/, 'Номер должен начинаться с +7 и состоять из 11 цифр')
            .required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (values: FormValues) => {
        try {
            const response: ApiResponse = await axios.post('post/login', {
                phoneNumber: values.phoneNumber,
                password: values.password
            });
            if (response.data.success) {
                console.log('Успешно: ', response.data.data);
                // Перенаправление на другую страницу после успешного входа
                navigate('/account');
            } else {
                setError(response.data.error || 'Неверный номер телефона или пароль');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.login_body}>
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

            <div className={styles.login_info}>
                {error && <div className={styles.error_container}>{error}</div>}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className={styles.inputPnonediv}>
                            <Field className={styles.inputPhone} type="text" name="phoneNumber" placeholder="Введите номер телефона"/>
                            <ErrorMessage name="phoneNumber" component="div"/>
                        </div>
                        <div>
                            <Field className={styles.inputPassword} type="password" name="password" placeholder="Введите пароль"/>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <button type="submit" className={styles.submit_button}>Вход</button>
                        <div className={styles.link}>
                            <Link to="/registration" className={styles.customLink}>Регистрация</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
