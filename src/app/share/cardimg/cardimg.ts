import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardimg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardimg.html',
  styleUrl: './cardimg.css'
})
export class Cardimg {
  @Input() imageName!: string;
  @Input() thumbnail!: string;
  
}
