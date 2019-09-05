import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-profile',
  templateUrl: './right-profile.component.html',
  styleUrls: ['./right-profile.component.scss']
})
export class RightProfileComponent implements OnInit {

  ProfileOpen= false;

  constructor() { }
  toggleprofile(){
    this.ProfileOpen=!this.ProfileOpen
  }

  ngOnInit() {
  }

}