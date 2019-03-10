import { Component, OnInit } from '@angular/core';
import {Walk} from '../walk';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.css']
})
export class WalkComponent implements OnInit {
  walk: Walk = {
    id: 1,
    date: '03-10-2019',
    length: 2
  };

  constructor() { }

  ngOnInit() {
  }

}
