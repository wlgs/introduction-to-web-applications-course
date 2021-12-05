import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ulub-aktor',
  templateUrl: './ulub-aktor.component.html',
  styleUrls: ['./ulub-aktor.component.css'],
})
export class UlubAktorComponent implements OnInit {
  @ViewChild('actorimg') actorImg: ElementRef;
  @ViewChild('actorInfo') actorInfo: ElementRef;
  @ViewChild('inputTitle') inputTitle: ElementRef;
  @ViewChild('inputName') inputName: ElementRef;

  constructor(private renderer: Renderer2, private router: Router ) { }


  imie = ""
  windowLocation = this.router.url
  ngOnInit(): void { }
  ngAfterViewInit(): void { }

  showImage(): void {
    if (this.inputTitle.nativeElement.value.length < 2 ||
      this.inputName.nativeElement.value.length < 2)
      {
        this.renderer.setProperty(
          this.actorInfo.nativeElement,
          'innerHTML',
          'Wprowadź poprawne dane!'
        );
        return
      }
    this.imie = this.inputName.nativeElement.value
    this.renderer.setStyle(
      this.actorImg.nativeElement,
      'visibility',
      'visible'
    );
    this.renderer.setProperty(
      this.actorInfo.nativeElement,
      'innerHTML',
      'To musi być on!'
    );
  }
}
