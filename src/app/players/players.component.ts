import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players=[
    {
      name:"ram",
      power:"200bazinga"
    },
    {
      name:"shiva",
      power:"4200bazinga"
    },
    {
      name:"hari",
      power:"100bazinga"
    }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showHeroProfile(heroName){
    let selectedHero=this.players.filter(hero=>hero.name===heroName)[0]
    console.log(selectedHero)
    this.router.navigate(["",selectedHero.name,selectedHero.power])
  }

}
