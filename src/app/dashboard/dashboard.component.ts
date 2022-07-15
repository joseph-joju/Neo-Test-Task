import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users!: Users[] ;
  sortedUsers!: Users[];
  isSortedByAge: boolean=true;
  isSortedByDate: boolean=true;
  LoadMore: boolean= false;
  search: any;
  p:number = 1;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    
    this.userService.getUsers()
      .subscribe(value =>{ this.users = value
      
        console.log(this.users);
    this.sortedUsers=this.users

      }
        )
        
      
  }

  sortByAge(){
    this.sortedUsers=[];
    console.log('sort');
    this.isSortedByAge=!this.isSortedByAge
    if(this.isSortedByAge){
      this.sortedUsers=this.users.sort((a,b) => a.age < b.age ? -1 : a > b ? 1 : 0)
    }
    else{
      this.sortedUsers=this.users.sort((a,b) => a.age > b.age ? -1 : a > b ? 1 : 0)

    }
    
  }

  sortByDate(){
    this.sortedUsers=[];
    this.isSortedByDate=!this.isSortedByDate
    if(this.isSortedByDate){
      this.sortedUsers=this.users.sort((a,b) => moment(a.createdAt).format() > moment(b.createdAt).format() ? -1 : a > b ? 1 : 0)    
    }
    else{
      this.sortedUsers=this.users.sort((a,b) => moment(a.createdAt).format() < moment(b.createdAt).format() ? -1 : a > b ? 1 : 0)    
    }
  }

  loadMore(){
    this.LoadMore = !this.LoadMore
  }

  searchResources(searchText:any){
    if(searchText === ''){
      this.sortedUsers = this. users
    }
    let searchResult:Users[]=[]
   this.sortedUsers.forEach((user:any)=>{
    if(user.name.toLocaleLowerCase().includes(searchText)){
      searchResult.push(user);
    }
  })
  this.sortedUsers = searchResult
  }

  myFunction( date:any ) {
    return moment(date).format();
  }
}
