import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { UsersService } from "../users.service";
import { Users } from "../users";
import * as moment from "moment";
import { first } from "rxjs";
import { SubSink } from "subsink";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  users!: Users[];
  sortedUsers!: Users[] | any;
  isSortedByAge: boolean = true;
  isSortedByDate: boolean = true;
  LoadMore: boolean = false;
  search: any;
  pageCount: number = 1;
  dashboardSubs = new SubSink();
  isSort = false;
  page = 1;
  sort: string = "";
  order: string = "";
  searchKey: string = "";
  p = 1;
  total: number;
  @Output() pageChange: EventEmitter<number>= new EventEmitter();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dashboardSubs.add(
      this.userService
        .getUsers(this.page, this.order, this.sort, this.searchKey)
        .subscribe((value) => {
          this.sortedUsers = value.body;
          this.total = value.headers.get('X-Total-Count');
          
          if(this.sortedUsers==[]){
          }
        })
    );
  }
  getNextUsers() {
    ++this.page;
    this.getUsers();
  }

  getPrevUsers() {
    --this.page;
    this.getUsers();
  }

  sortByAge() {
    this.sort = "age";
    this.isSortedByAge = !this.isSortedByAge;
    if (this.isSortedByAge) {
      this.order = "asc";
    } else {
      this.order = "desc";
    }

    this.getUsers();
  }

  sortByDate() {
    this.sort = "createdAt";
    this.isSortedByDate = !this.isSortedByDate;
    if (this.isSortedByDate) {
      this.order = "asc";
    } else {
      this.order = "desc";
    }

    this.getUsers();
  }

  searchResources(searchText: any) {
    // if (searchText === "") {
    //   this.sortedUsers = this.users;
    // }
    // let searchResult: Users[] | any = [];
    this.searchKey=searchText;
    this.page=1
    this.getUsers();

  }

  myFunction(date: any) {
    return moment(date).format();
  }

  ngOnDestroy(): void {
    this.dashboardSubs.unsubscribe();
  }
  

}
