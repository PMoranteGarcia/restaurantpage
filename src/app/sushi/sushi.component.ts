import { Component, OnInit } from '@angular/core';
import { Sushi } from '../sushi';
import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.scss']
})
export class SushiComponent implements OnInit {
  sushi: Sushi[] = [];

  constructor(private sushiService: SushiService) { }

  getSushi(): void {
    this.sushiService.getSushies().subscribe(sushi => this.sushi = sushi);
  }

  ngOnInit(): void {
    this.getSushi();
  }

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.sushiService.addSushi({name} as Sushi).subscribe(sushi => {this.sushi.push(sushi);});
  }

  delete(sushi: Sushi): void {
    this.sushi = this.sushi.filter(h => h !== sushi);
    this.sushiService.deleteSushi(sushi.id).subscribe();
  }

}
