import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BComponent } from '../../app/b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private router: Router) { }

  navigationWithArray(): void {
    const queryParams: any = {};

    const arrayOfValues = ['a', 'b', 'c', 'd'];

    queryParams.myArray = JSON.stringify(arrayOfValues);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/BComponent'], navigationExtras);
  }

  ngOnInit(): void {
  }

}
