import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {


  itemCount: number;
  btnText: string = 'Ajouter à la liste';
  goalText: string = 'Commencez à faire vos courses';
  priceNumber: number;
  goals:any = [];
  priceGoals:any = [];
  totalprice: number;
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    console.log(this.goals)
    this.priceGoals.push(this.priceNumber);
    console.log(this.priceGoals)
    for (let i = 0; i < this.priceGoals.length; i++){
      this.totalprice = this.priceGoals.reduce((a, b) => a + b, 0);
      console.log(this.totalprice)
    }
    this.goalText = '';
    this.priceNumber = 0;
    this.itemCount = this.goals.length;
  }

  // removeItem(i) {
  //   this.goals.splice(i, 1);
  // }

}
