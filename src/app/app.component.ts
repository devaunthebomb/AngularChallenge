import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Devaun Nicholson";
  age:number = 15;
  gender:string = "Male";
  title = 'Hobbies';
  myFavoriteAnime = "My Favorite Anime";
  hobbyArray = ["I like to play Basketball", "I like to code", "I like to play video games (eg. Warzone, Rocket League, and Destiny 2)", "I like watching anime (My favorite anime is Hunter X Hunter)"];
}
 
let me = {
  name:"Devaun Nicholson",
  age: 15,
  gender:"male",
}