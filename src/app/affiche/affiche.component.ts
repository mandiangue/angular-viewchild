import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
 @Input() affiche:string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}


