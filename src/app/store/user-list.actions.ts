import { createAction, props } from "@ngrx/store";

export const loadUserList = createAction('[users] LOAD_USERS_LIST')

export const loadUserListSuccess = createAction('[users] LOAD_USERS_LIST_SUCCESS', props<{ user: any}>());

export const loadUserListFail = createAction('[users] LOAD_USERS_LIST_FAIL', props<{errror: Error}>());


export const addUser = createAction('[users] ADD_USER', props<{payload:any}>());

export const addUserSuccess = createAction('[users] ADD_USER_SUCCESS',props<{payload:any}>());

export const addUserFail = createAction('[users] ADD_USER_FAIL',props<{error:Error}>());