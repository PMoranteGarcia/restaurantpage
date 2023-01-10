import { Component, OnInit } from '@angular/core';
import { Sushi } from '../sushi';
import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sushis: Sushi[] = [];

  constructor(private sushiService: SushiService) { }

  ngOnInit(): void {
    this.getSushi();
  }

  getSushi(): void {
    this.sushiService.getSushies().subscribe(sushi => this.sushis = sushi.slice(0, 9));
  }
}
