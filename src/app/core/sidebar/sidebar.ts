import { Component } from '@angular/core';
import { Promot } from '../../share/promot/promot';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [Promot, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  homeCount: number = 10;
  taskCount: number = 2;
  APIs: number = 0;
  Help: number = 0;
}
