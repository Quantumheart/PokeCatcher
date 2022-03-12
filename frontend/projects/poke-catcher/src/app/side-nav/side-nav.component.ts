import {Component, Input, OnInit} from '@angular/core';
import {NamedAPIResource} from '../app.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() items: NamedAPIResource[] | undefined = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
