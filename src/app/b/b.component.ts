import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  arrayOfValues!: Array<string>;

  constructor(private activatedRoute: ActivatedRoute) {

    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      this.arrayOfValues = new Array<string>();
    }

    else {
      this.arrayOfValues = JSON.parse(myArray);
    }
  }

  ngOnInit(): void {
  }

}
