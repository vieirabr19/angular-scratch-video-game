import { Component, Input } from '@angular/core';
import { IGame } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game!: IGame;
}
