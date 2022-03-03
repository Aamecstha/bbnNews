import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player={}

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.player['id']=this.route.snapshot.params['id']
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.player['id']=params['id']
      }
    )
    if(this.route.snapshot.queryParams['name']){
      this.player['name']=this.route.snapshot.queryParams['name']
    }
    else{
      this.player['name']="shiva"
    }
    
  }

}
