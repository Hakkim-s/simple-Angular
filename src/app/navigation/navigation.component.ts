import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() test : string;  

  constructor() { }

  ngOnInit(): void {
    this.demo();
  }

  demo(){ // Function Scope
    var x = 1;
    let y = 2;
    const z = 3;
    if(true){ //Block Scope
      var xx = 10;
      let yy = 20;
      const zz = 30;
    console.log('Block xx' + ' Block yy ' + 'Block zz '+ xx,yy,zz);
    console.log('function x' + ' function y ' + x,y,z);
    }
    console.log('function x' + ' function y ' + x,y);
    // console.log('Block x' + ' Block y ' + xx,yy,zz);
    
    }

}
