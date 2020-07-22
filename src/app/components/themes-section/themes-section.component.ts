import { Component, OnInit } from '@angular/core';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-themes-section',
  templateUrl: './themes-section.component.html',
  styleUrls: ['./themes-section.component.scss']
})
export class ThemesSectionComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }
  openModal() {
    this.modalRef = this.modalService.show(VideoModalComponent)
  }

  ngOnInit(): void {
  }

}
