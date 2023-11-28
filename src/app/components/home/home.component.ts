import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IAPIResponse, IGame } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sort = '';
  games: IGame[] = [];

  constructor(
    private httpService: HttpService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((params: Params) => {
      if (params['game-search']) {
        console.log('IF');
        this.searchGame('metacrit', params['game-search']);
      } else {
        console.log('ELSE');
        this.searchGame('metacrit');
      }
    });
  }

  searchGame(sort: string, search?: string) {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: IAPIResponse<IGame>) => {
        this.games = gameList.results;
        console.log(this.games);
      });
  }
}
