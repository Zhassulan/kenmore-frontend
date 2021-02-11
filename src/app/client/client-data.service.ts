import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserStatus} from "./model/user-status";
import {User} from "./model/user";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(private http: HttpClient) {
  }

  getStatuses() {
    return this.http.get<UserStatus []>(`${API_URL}/users/statuses`);
  }

  findByName(param: string) {
    return this.http.get<User []>(`${API_URL}/users/name/${param}`);
  }

  findByEmail(param: string) {
    return this.http.get<User []>(`${API_URL}/users/email/${param}`);
  }

  findByBirthdate(param: string) {
    console.log('Param: ' + param);
    return this.http.get<User []>(`${API_URL}/users/birthdate/${param}`);
  }

  findByStatus(param: string) {
    return this.http.get<User []>(`${API_URL}/users/status/${param}`);
  }

}
