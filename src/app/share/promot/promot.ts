import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promot',
  imports: [CommonModule],
  templateUrl: './promot.html',
  styleUrl: './promot.css'
})
export class Promot {
  showPopup = true;

  dismissPopup() {
    this.showPopup = false;
  }
}
