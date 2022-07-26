import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { UsersService } from "../services/users.service";
import { Subscription } from "rxjs";
import { Users } from "../shared/Interfaces/users";
import { INITIAL_PAGE, USERS_LIMIT } from "../shared/constants/url_params";

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
  isSort = false;
  page = INITIAL_PAGE;
  sort: string = "";
  order: string = "";
  searchKey: string = "";
  p = 1;
  total: string;
  limit = USERS_LIMIT;
  subscriptionList: Subscription[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.subscriptionList.push(
      this.userService
        .getUsers(this.page, this.order, this.sort, this.searchKey)
        .subscribe((value) => {
          this.sortedUsers = value.body;
          this.total = value.headers.get("X-Total-Count") || '0';

          // if(this.sortedUsers==[]){
          // }
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
    this.page = 1;
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
    this.page = 1;
    if (this.isSortedByDate) {
      this.order = "asc";
    } else {
      this.order = "desc";
    }

    this.getUsers();
  }

  searchResources(searchText: any) {
    this.searchKey = searchText;
    this.page = 1;
    this.getUsers();
  }

  default() {
    this.page = 1;
    this.order = "";
    this.sort = "";
    this.searchKey = "";
    this.getUsers();
  }

  pageChange(pageNo: number) {
    this.page = pageNo;

    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(i => i.unsubscribe());
  }
}
