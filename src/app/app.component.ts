import { Component,  OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RmApiService } from './services/rm-api.service';
import {  Result, Root } from './models/character';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , InfiniteScrollModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Rick';
  rmApiService = inject(RmApiService);

  nextUrl = '';
  characters: Result[] = []
  liStyle = 'fst-italic text-success fw-semibold'

  personaje: Result = {} as Result;

  ngOnInit(): void {
    this.getCharactersPage();
  }

  getCharactersPage( ) {
    this.rmApiService.getCharacters().subscribe((data: Root) => {
      this.characters = data.results;
      this.nextUrl = data.info.next;
    });
  }

  onScroll() {
    this.rmApiService.getCharacters(this.nextUrl).subscribe({
      next: (response: Root ) => {

        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next
          Array.from(response.results).forEach((element: Result) => {
            this.characters = [...this.characters, element]
          })
        }

      }
    })
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

  modalDetail(id: number) {

    this.rmApiService.getCharacter(id).subscribe((data: Result) => {
       this.personaje = data;
    });
  }
}
