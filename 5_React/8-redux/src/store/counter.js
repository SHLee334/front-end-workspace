import { createAction, handleActions } from "redux-actions";

// 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수(Action creator) : 액션 객체를 만들어주는 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서 (Reducer) : 변화를 일으키는 함수
const counter = handleActions(
  {
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1,
  },
  0 // 0 <<-- 초기값
);

export default counter;
