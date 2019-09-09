import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthorisedSideNavService {
  hideSideNav: boolean = false;
  moveTopNav:boolean = false;
  moveDashBoard:boolean=false;

  constructor() { }
 
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
    this.moveTopNav=!this.moveTopNav;
    this.moveDashBoard=!this.moveDashBoard;

  }

}
