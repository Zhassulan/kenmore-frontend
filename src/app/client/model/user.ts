import {JsonProperty} from "json2typescript";

export class User {

  firstname: string;
  lastname: string;
  email: string;
  @JsonProperty('birth_date')
  birthDate: string;
  @JsonProperty('ip_address')
  ipAddress: string;
  status: string;

  constructor(firstname: string, lastname: string, email: string, birthDate: string, ipAddress: string, status: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthDate = birthDate;
    this.ipAddress = ipAddress;
    this.status = status;
  }
}
