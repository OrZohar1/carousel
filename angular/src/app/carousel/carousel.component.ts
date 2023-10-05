import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { items } from './items.config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  currentItemsOnCarousel: any= [];
  currentIndex: number = 0;
  items: Array<any> = [];
  constructor() {
    this.items = items;
   }

  ngOnInit(): void {
    this.initCarousel();
  }

  initCarousel(): void{
    this.currentItemsOnCarousel = this.items.slice(0,3);
  }

  rotateCarousel(direction: string) {
    const step = 3;
    if (direction === 'next') {
      this.currentIndex += step;
      if (this.currentIndex >= this.items.length) {
        this.currentIndex = this.currentIndex - this.items.length;
      }
    } else {
      this.currentIndex -= step;
      if (this.currentIndex < 0) {
        this.currentIndex = this.currentIndex + this.items.length;
      }
    }
    this.currentItemsOnCarousel = this.items.slice(this.currentIndex, this.currentIndex + step);
  }
  
  trackByFn(index: number, item: any) {
    return index;
  }
}
