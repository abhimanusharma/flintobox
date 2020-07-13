import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  options = [
    { value: '', label: 'Age group' },
    { value: '2-3', label: '2 to 3 years' },
    { value: '3-4', label: '3 to 4 years' },
    { value: '4-6', label: '4 to 6 years' },
    { value: '6-8', label: '6 to 8 years' },
    { value: '8-12', label: '8 to 12 years' },
  ];

  selectedValue: any = "6-8";

  sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 90) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  constructor() { }

  ngOnInit(): void { }
}
