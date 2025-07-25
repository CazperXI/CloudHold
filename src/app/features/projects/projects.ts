import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../share/card/card';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../service/project.service';
import { Pagination } from '../../share/pagination/pagination';
import { Listview } from '../../share/listview/listview';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Card, Pagination, Listview],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  allProjects: Project[] = []; 
  viewMode: 'grid' | 'list' = 'grid';

  toggleView() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  constructor(private projectService: ProjectService) {
    this.allProjects = this.projectService.getProjects();
  }

  get projectsPerPage(): number {
    return this.viewMode === 'grid' ? 12 : 20;
  }
  currentPage = 1;

  get paginatedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    return this.allProjects.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.allProjects.length / this.projectsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

}

