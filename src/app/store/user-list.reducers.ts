import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleAcions from "./user-list.actions";

export  const userListFeatureKey = 'user';

export interface User {
    data: []|null;
    usersLoaded:Boolean;
    loading:Boolean;
}

export const UserListInitialState: User ={
    data:null,
    usersLoaded:false,
    loading: false
};

export interface UserRootState {
    readonly [userListFeatureKey]:User;
}

export const reducer = createReducer(
    UserListInitialState,
    on(PeopleAcions.loadUserList,(state)=>({
        ...state,
        loading:true
    })),
    on(PeopleAcions.loadUserListSuccess,(state, {user})=>({
        ...state,
        loading:false,
        data:user
    })),
    on(PeopleAcions.loadUserListFail,(state)=>({
        ...state,
        loading:false
    }))
);

export const getUserList = (state:User) => state?.data;