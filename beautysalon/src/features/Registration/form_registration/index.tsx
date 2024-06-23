import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.sass';
import flowers from "@images/flovers 1.png";
import angle1 from "@images/уголки_вход.png";
import angle2 from "@images/уголки_вход2.png";
import angle3 from "@images/уголки_вход3.png";
import angle4 from "@images/уголки_вход4.png";
import defaultAvatar from '@images/avatar.png';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface FormValues {
    name: string;
    phone: string;
    password: string;
    confirmPassword: string;
    avatar?: File | null;
}

export const RegistrationForm = () => {
    const navigate = useNavigate();

    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const initialValues: FormValues = {
        name: '',
        phone: '',
        password: '',
        confirmPassword: '',
        avatar: null,
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Обязательное поле'),
        phone: Yup.string()
            .matches(/^\+7\d{10}$/, 'Номер телефона должен содержать 11 цифр и начинаться с +7')
            .required('Обязательное поле'),
        password: Yup.string()
            .min(8, 'Пароль должен содержать минимум 8 символов')
            .required('Обязательное поле'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли не совпадают')
            .required('Обязательное поле'),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('phone', values.phone);
            formData.append('password', values.password);
            if (values.avatar) {
                formData.append('avatar', values.avatar);
            }

            const response = await axios.post('/api/register', values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            // Обработка ошибки регистрации
        }
    };

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatarPreview(URL.createObjectURL(file));
        } else {
            setAvatarPreview(null);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.reg_body}>
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
                {({ setFieldValue }) => (
                    <Form>
                        <div className={styles.avatarField}>
                            <img
                                src={avatarPreview || defaultAvatar}
                                alt="Аватар"
                                className={styles.avatarPreview}
                                onClick={() => document.getElementById('avatarInput')?.click()}
                            />
                            <input
                                type="file"
                                id="avatarInput"
                                name="avatar"
                                accept="image/*"
                                onChange={(event) => {
                                    handleAvatarChange(event);
                                    setFieldValue('avatar', event.currentTarget.files?.[0] || null);
                                }}
                                style={{display: 'none'}}
                            />
                        </div>
                        <div className={styles.field}>
                            <Field type="text" name="name" placeholder="Имя"/>
                            <ErrorMessage name="name" component="div" className={styles.error}/>
                        </div>
                        <div className={styles.field}>
                            <Field type="tel" name="phone" placeholder="Номер телефона"/>
                            <ErrorMessage name="phone" component="div" className={styles.error}/>
                        </div>
                        <div className={styles.field}>
                            <Field type="password" name="password" placeholder="Пароль"/>
                            <ErrorMessage name="password" component="div" className={styles.error}/>
                        </div>
                        <div className={styles.field}>
                            <Field type="password" name="confirmPassword" placeholder="Повторить пароль"/>
                            <ErrorMessage name="confirmPassword" component="div" className={styles.error}/>
                        </div>
                        <button type="submit">Регистрация</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

