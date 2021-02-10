import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserStatus} from "./model/user-status";

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

}
