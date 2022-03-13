import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GameService} from '../app.component';
import {retrieveVersionGroups, retrieveVersions} from '../state/version.actions';
import {selectVersionGroups, selectVersions} from '../state/version.reducer';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  versionGroups$ = this.store.select(selectVersionGroups)
  groupGames$ = this.store.select(selectVersions);
  constructor(private gameService: GameService, private store: Store) {
  }

  ngOnInit(): void {
    this.gameService.getVersions().subscribe((versions) => {
      this.store.dispatch(retrieveVersions({versions}))
      const versionGroups = Object.keys(versions)
      this.store.dispatch(retrieveVersionGroups({versionGroups}))
    })
  }


}
