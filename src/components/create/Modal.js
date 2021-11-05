import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './modal.module.css';

export const Modal = ({ children, show, handleShow, buttonTxt }) => {
    
    let history = useHistory();

    const handleClick = () => {
        handleShow();
        history.push('/main');
    };

    return (
        <div className={s[show]}>
            <div className={s.container}>
                {children}
                <button className={s.button} onClick={handleClick}>
                    {buttonTxt}
                </button>
            </div>
        </div>
    );
};