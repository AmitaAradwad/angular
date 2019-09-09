import { Component, OnInit } from '@angular/core';
import  {AuthorisedSideNavService} from '../sevices/authorised-side-nav.service'
@Component({
  selector: 'app-authorised-layout',
  templateUrl: './authorised-layout.component.html',
  styleUrls: ['./authorised-layout.component.scss']
})
export class AuthorisedLayoutComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit() {
  }

}
