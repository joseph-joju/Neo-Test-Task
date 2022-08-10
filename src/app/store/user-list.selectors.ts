import { createFeatureSelector,createSelector } from '@ngrx/store';
import {User} from './user-list.reducers';
import * as userState from './user-list.reducers';

export const getPeopleFeatureState = createFeatureSelector<User>("user");

export const getPeople = createSelector(getPeopleFeatureState,userState.getUserList);
