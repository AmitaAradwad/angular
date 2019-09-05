import { Component, OnInit } from '@angular/core';
import  {AuthorisedSideNavService} from '../sevices/authorised-side-nav.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-authorised-side-nav',
  templateUrl: './authorised-side-nav.component.html',
  styleUrls: ['./authorised-side-nav.component.scss']
})
export class AuthorisedSideNavComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit() {
  }

}
