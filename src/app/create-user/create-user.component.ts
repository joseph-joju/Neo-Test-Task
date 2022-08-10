import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { Location } from "@angular/common";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { User } from "../store/user-list.reducers";
import { addUser } from "../store/user-list.actions";
@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  subscriptionList: Subscription[] = [];

  constructor(
    private userService: UsersService,
    private route: Router,
    private location: Location,
    private store: Store<User>
  ) {
    this.profileForm = new FormGroup({
      name: new FormControl("", Validators.required),
      statusMessage: new FormControl("", Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      age: new FormControl("", Validators.required),
      isPublic: new FormControl("", Validators.required),
      createdAt: new FormControl(""),
      avatarUrl: new FormControl(""),
    });
  }

  ngOnInit(): void {}

  createProfile() {
    this.profileForm.patchValue({ createdAt: new Date() });
    // this.subscriptionList.push(
    //   this.userService.postUser(this.profileForm.value).subscribe()
    //   )
    this.store.dispatch(addUser(this.profileForm.value));
    this.route.navigate([""]);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(i => i.unsubscribe());
      
  }
}
