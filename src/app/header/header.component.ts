import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoURL: string = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png';

}
