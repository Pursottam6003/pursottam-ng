import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
  @Input() links: { url: string; text: string; date: string; tags: string }[] = [];

  private colors: Array<'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast'> = [
    'success',
    'secondary',
    'info',
    'warn',
    'danger',
    'contrast'
  ];
  
  getRandomColor(): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}