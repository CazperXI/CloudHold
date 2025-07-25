import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() id!: number;
  @Input() name!: string;
  @Input() thumbnail!: string;
  @Input() status!: 'ready' | 'not ready' | 'setting' | 'fetch';

  constructor(private router: Router) {}

  goToProjectDetail() {
    this.router.navigate(['/project', this.id]);
  }
}
