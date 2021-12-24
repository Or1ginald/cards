import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './cards.module.css';

import { Preloader } from 'components';
import { PATH, requestStatus } from 'enum';
import { useAppSelector, useInput } from 'hooks';
import { addCardTC } from 'store/reducers/cards';
import { getStatus } from 'store/selectors';
import style from 'style/Common.module.css';
import { ReturnComponentType } from 'types';

export const Card = (): ReturnComponentType => {
  const { value: question, handleValue: handleQuestion } = useInput('');
  const { value: answer, handleValue: handleAnswer } = useInput('');
  const grade = useAppSelector(state => state.cards.grade);
  const shots = useAppSelector(state => state.cards.shots);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(getStatus);
  const onClickHandlerCancel = (): void => {
    navigate(PATH.CARDS);
  };

  const onClickAddCard = (): void => {
    dispatch(addCardTC({ question, answer, grade, shots }));
  };
  return (
    <div className={style.mainContainer}>
      {isLoading === requestStatus.loading ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2> Card </h2>
            <div className={s.container}>
              <textarea
                className={s.textarea}
                placeholder="Question"
                value={question}
                onChange={handleQuestion}
              />
              <textarea
                className={s.textarea}
                placeholder="Answer"
                value={answer}
                onChange={handleAnswer}
              />
            </div>
            <div className={s.buttons}>
              <button className={s.btn} onClick={onClickHandlerCancel}>
                Cancel
              </button>
              <button className={s.btn} onClick={onClickAddCard}>
                Add card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
