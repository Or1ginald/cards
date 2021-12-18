import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { CustomInput } from '../customInput';

import st from './Login.module.css';

import { PATH } from 'enum';
import { useAppSelector, useInput } from 'hooks';
import { logInTC } from 'store';
import { getErrorMessage, getIsDataLoaded } from 'store/selectors';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';
import { isEmailValid, isPasswordValid } from 'utils';

export const Login = (): ReturnComponentType => {
  const [rememberMe, handleRememberMe] = useState<boolean>(false);
  const { value: email, handleValue: handleEmail } = useInput('');
  const { value: password, handleValue: handlePassword } = useInput('');
  const dispatch = useDispatch();
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const errorMessage = useAppSelector(getErrorMessage);
  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>): void =>
    handleRememberMe(e.currentTarget.checked);

  const onClickHandlerLogin = (): void => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      dispatch(logInTC({ email, password, rememberMe }));
      return;
    }
    console.log('error');
  };
  if (isDataLoaded) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        <div className={style.contentWrap}>
          <h2> Login </h2>
          {errorMessage ? <span style={{ color: 'red' }}> {errorMessage} </span> : ''}
          <CustomInput
            // bind={handleEmail}
            onChange={handleEmail}
            value={email}
            placeholder="Email"
            typeInput="email"
            className={style.inputEmail}
          />
          <CustomInput
            // bind={bindPassword}
            placeholder="password"
            typeInput="password"
            className={style.inputPassword}
            value={password}
            onChange={handlePassword}
          />
          <div className={st.rememberMeInput}>
            remember me
            <input type="checkbox" checked={rememberMe} onChange={onChangeCheckBox} />
          </div>
          <div>
            <Link to={PATH.CONFIRM_PASSWORD}> Forgot password </Link>
          </div>
          <button onClick={onClickHandlerLogin} className={style.btn}>
            Sign In
          </button>
          <p> Do not have an account? </p>
          <Link to={PATH.REGISTRATION}> Sign Up </Link>
        </div>
      </div>
    </div>
  );
};
