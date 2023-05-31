import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
  @Input()
  cardTitle: string = ' Misterious photo appears on this big card!';
  @Input()
  cardDescription: string = "What's happening with me?";
  @Input()
  id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
