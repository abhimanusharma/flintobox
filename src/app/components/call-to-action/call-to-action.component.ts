import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
