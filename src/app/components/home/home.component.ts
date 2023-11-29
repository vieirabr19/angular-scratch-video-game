import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAPIResponse, IGame } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sort = '';
  games: IGame[] = [];
  private routeSub!: Subscription;
  private gameSub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRouter.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGame('metacrit', params['game-search']);
      } else {
        this.searchGame('metacrit');
      }
    });
  }

  searchGame(sort: string, search?: string) {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: IAPIResponse<IGame>) => {
        this.games = gameList.results;
        console.log(this.games);
      });
  }

  openGameDetail(id: number) {
    this.router.navigate(['detail', id]);
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
    if (this.gameSub) this.gameSub.unsubscribe();
  }
}
