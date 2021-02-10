import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../model/user-status";
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-client-search-form',
  templateUrl: './client-search-form.component.html',
  styleUrls: ['./client-search-form.component.css']
})
export class ClientSearchFormComponent implements OnInit {

  searchByCategories: string[] = ['name', 'email', 'birthdate', 'status'];
  selectedCategory = this.searchByCategories[0];
  statuses: UserStatus[] = [];

  constructor(private clntService : ClientDataService) {
  }

  ngOnInit(): void {
    this.clntService.getStatuses().subscribe(
      data => {
        this.statuses = data;
        console.log(data);
      },
      error => alert(JSON.stringify(error))
    );
  }

}
