import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  id:any
  userData!: Users;

  profileForm = new FormGroup({
    name: new FormControl(''),
    statusMessage: new FormControl('',Validators.required),
    email: new FormControl(''),
    age: new FormControl(''),
    isPublic: new FormControl('',Validators.required),
    createdAt: new FormControl(''),
    avatarUrl:new FormControl('')
  });
  
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private location: Location,
    private userService:UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
    if(this.profileForm.get("isPublic")){
      console.log(true);
      
    }
  }

  getUser(): void{
    this.route.params.subscribe((param:Params) => {
      this.id = param['id']
      
    })

    // this.id = this.route.snapshot.params['id']

     this.userService.getUser(this.id).subscribe((data:any) => {
      this.userData = data
      this.profileForm.patchValue({
        avatarUrl:this.userData.avatarUrl,
        name:this.userData.name,
        statusMessage:this.userData.statusMessage,
        email:this.userData.email,
        age:this.userData.age,
        isPublic:this.userData.isPublic,
        createdAt: new Date().toISOString(),
      })
     })
  }

  goBack(){
    return this.router.navigate(['dashboard'])
  }

  saveProfile(){
    // this.profileForm.patchValue({avatarUral:this.userData.avatarUrl })
    console.log(this.profileForm.value);
    this.userService.saveUser(this.profileForm.value, this.id)
    this.router.navigate([''])
    
  }

  // pageRedirect(){
  //   return this.router.navigate(['detail',3])
  // }
}
