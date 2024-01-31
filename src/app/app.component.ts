import { Component,  OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RmApiService } from './services/rm-api.service';
import {  Result } from './models/character';
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
  serviApi = inject(RmApiService);
  page = 0;
  nextUrl = '';
  characters: Result[] = []
  liStyle = 'fst-italic text-success fw-semibold'

  personaje: Result = {} as Result;

  ngOnInit(): void {
    this.getCharactersPage(this.page);
  }

  getCharactersPage(page: number) {
    this.serviApi.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.nextUrl = data.info.next;
    });
  }

  onScroll() {
    this.serviApi.getCharacters(this.nextUrl).subscribe({
      next: (response: any) => {

        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next
          Array.from(response.results).forEach((element: any) => {
            this.characters = [...this.characters, element]
          })
        }

      }
    })
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

  modalDetail(url: string) {
    this.serviApi.getCharacters(url).subscribe((data: any) => {
      this.personaje = data;
    });
  }
}
