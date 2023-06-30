import { Component, OnInit } from '@angular/core';
import { isTheDay } from 'src/app/constants/constraints';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit {
  reveal: boolean = false;

  initialPhrase = 'Se acerca una fecha importante...';
  finalPhrase = '¡ Feliz día, princesa hermosa !';

  ngOnInit(): void {
    this.reveal = isTheDay();
  }
}
