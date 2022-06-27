import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    statusMessage: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    isPublic: new FormControl('',Validators.required),
    createdAt: new FormControl(''),
    avatarUrl:new FormControl('')
  });
  constructor(
    private userService : UsersService,
    private route : Router) { }

  ngOnInit(): void {
    console.log(this.profileForm.value)
  }

  createProfile(){
    this.profileForm.patchValue({createdAt:new Date().toISOString() })
    console.log(this.profileForm.value);
    this.userService.postUser(this.profileForm.value)
    this.route.navigate([''])
    
  }

}
