import {Component, OnInit} from '@angular/core';
import {UserStatus} from "../model/user-status";
import {ClientDataService} from "../client-data.service";
import {User} from "../model/user";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-client-search-form',
  templateUrl: './client-search-form.component.html',
  styleUrls: ['./client-search-form.component.css']
})
export class ClientSearchFormComponent implements OnInit {

  searchByCategories: string[] = ['name', 'email', 'birthdate', 'status'];
  selectedCategory = this.searchByCategories[0];
  selectedStatus = '';
  statuses: UserStatus[] = [];
  inputFieldData = '';
  users: User[] = [];
  public pickerDate = new FormControl(new Date());

  constructor(private clntService: ClientDataService) {
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

  findClick() {
    this.users = [];
    switch (this.selectedCategory) {
      case this.searchByCategories[0]:
        this.findByName();
        break;
      case this.searchByCategories[1]:
        this.findByEmail();
        break;
      case this.searchByCategories[2]:
        this.findByBirthdate();
        break;
      case this.searchByCategories[3]:
        this.findByStatus();
        break;
    }
  }

  findByName() {
    this.clntService.findByName(this.inputFieldData).subscribe(
      data => this.users = data,
      error => {
        alert(error.error.message);
      }
    );
  }

  findByEmail() {
    this.clntService.findByEmail(this.inputFieldData).subscribe(
      data => this.users = data,
      error => {
        alert(error.error.message);
      }
    );
  }

  findByBirthdate() {
    let dt = new Date(this.pickerDate.value.getTime());
    let s = `${dt.getDate() < 9 ? '0' + dt.getDate() : dt.getDate()}.${dt.getMonth() < 9 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1}.${dt.getFullYear()}`;
    console.log(s);
    this.clntService.findByBirthdate(s).subscribe(
      data => this.users = data,
      error => {
        alert(error.error.message);
      }
    );
  }

  findByStatus() {
    this.clntService.findByStatus(this.selectedStatus).subscribe(
      data => this.users = data,
      error => {
        alert(error.error.message);
      }
    );
  }

}
