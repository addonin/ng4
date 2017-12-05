import {Component, Input, OnInit} from '@angular/core';
import {ResultsService} from "../../services/results/results.service";

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  @Input()
  results: number[];

  @Input()
  participants: string[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
  }

  onCLick() {
    this.results = this.resultsService.generate();
  }

}
