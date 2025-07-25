import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listview.html',
  styleUrl: './listview.css'
})
export class Listview {
  @Input() projects: any[] = [];

  constructor(private router: Router) {}

  goToProject(id: number) {
    this.router.navigate(['/project', id], { queryParams: { view: 'list' } });
  }
}

