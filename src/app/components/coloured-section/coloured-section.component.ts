import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloured-section',
  templateUrl: './coloured-section.component.html',
  styleUrls: ['./coloured-section.component.scss']
})
export class ColouredSectionComponent implements OnInit {
  @Input() heading: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
