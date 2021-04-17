import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigtion-test',
  templateUrl: './navigtion-test.component.html',
  styleUrls: ['./navigtion-test.component.css']
})
export class NavigtionTestComponent implements OnInit {

  routing_data : any;

  constructor(private router: Router) { 
  this.routing_data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
