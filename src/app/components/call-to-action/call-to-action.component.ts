import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  public innerWidth: any;
  public size: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.innerWidth < 767 ? this.size = 'sm' : this.size = 'lg';
  }

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerWidth < 767 ? this.size = 'sm' : this.size = 'lg';
  }

}
