import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listviewimg',
  imports: [CommonModule],
  templateUrl: './listviewimg.html',
  styleUrl: './listviewimg.css'
})
export class Listviewimg {
  @Input() Projectimg: any[] = [];
}
