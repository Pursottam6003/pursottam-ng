import { Component } from '@angular/core';
import { LinkListComponent } from '../link-list/link-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [LinkListComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
