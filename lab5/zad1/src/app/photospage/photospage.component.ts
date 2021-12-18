import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-photospage',
  templateUrl: './photospage.component.html',
  styleUrls: ['./photospage.component.css']
})
export class PhotospageComponent implements OnInit {

  constructor(private photoService: PostsService) { }


  photos: any[] = []

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(res => this.photos=res)
  }

}
