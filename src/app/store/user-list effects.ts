import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map } from "rxjs/operators";
import * as UserListActions from "./user-list.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

@Injectable()
export class UserListEffect {
  loadUsersList = createEffect(() =>
    this.actions$.pipe(
      ofType(UserListActions.loadUserList),
      concatMap(() => {
        return this.usersService.getUsersOnly().pipe(
          map((response) =>
            UserListActions.loadUserListSuccess({ user: response })
          ),
          catchError((error) => of(UserListActions.loadUserListFail(error)) )
        );
      })
    )
  );

  addUser = createEffect(()=>
  this.actions$.pipe(
    ofType(UserListActions.addUser),
    concatMap((payload) => {
        return this.usersService.postUser(payload).pipe(
            map((data:any)=>{
                return UserListActions.addUserSuccess(data);
            }),
            catchError((error) => {
                return of (UserListActions.addUserFail(error))
            } )
        )
    })
  )
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private usersService: UsersService
  ) {}
}
