import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // returns true if successful, false if unsuccessful
   addMovie(newTitle: string): boolean {
      if(!this.movies.includes(newTitle) && newTitle !== '') {
         this.movies.push(newTitle);
         return true;
      }
      return false;
   }
}