import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UsersService } from "../../../services/users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Users } from "../../../shared/Interfaces/users";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: any;
  id: string | any;
  userData!: Users;
  subscriptionList: Subscription[] = [];
  showcondition = true;
  

  profileForm = new FormGroup({
    name: new FormControl(""),
    statusMessage: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    age: new FormControl(""),
    isPublic: new FormControl("", Validators.required),
    createdAt: new FormControl(""),
    avatarUrl: new FormControl(""),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const filter = this.route.snapshot.params['id'];
    console.log(filter);
    console.log('kkkk')
    this.getUser();
  }

  getUser(): void {
    this.subscriptionList.push(
      this.route.params.subscribe((param: Params) => {
        this.id = param["id"];
        console.log(this.id);
        
      })
    );

    // this.id = this.route.snapshot.params['id']

    this.userService.getUser(this.id).subscribe((data: any) => {
      this.userData = data;
      this.profileForm.patchValue({
        avatarUrl: this.userData.avatarUrl,
        name: this.userData.name,
        statusMessage: this.userData.statusMessage,
        email: this.userData.email,
        age: this.userData.age,
        isPublic: this.userData.isPublic,
        createdAt: this.userData.createdAt,
      });
    });
  }

  goBack() {
    return this.location.back();
  }

  saveProfile() {
    this.subscriptionList.push(
      this.userService.saveUser(this.profileForm.value, this.id).subscribe()
    );
    this.router.navigate([""]);
  }

  deleteProfile(id: any) {
    this.subscriptionList.push(
      this.userService.deleteUser(id).subscribe()
      )
    this.router.navigate([""]);
  }

  authtest(){
    this.router.navigate(['authtest']);
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(i => i.unsubscribe());
  }

  // pageRedirect(){
  //   return this.router.navigate(['detail',3])
  // }
}
