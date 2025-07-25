import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Cardimg } from '../../share/cardimg/cardimg';
import { ProjectService } from '../../service/project.service';
import { Project } from '../../service/project.service';
import { PROJECT_IMAGES, ProjectImage } from '../../service/projectimg.service';
import { Listviewimg } from '../../share/listviewimg/listviewimg';
import { Pagination } from '../../share/pagination/pagination';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule, Cardimg, Listviewimg, Pagination, RouterModule],
  templateUrl: './myprojects.html',
  styleUrl: './myprojects.css'
})
export class Myprojects {
  route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  projectImages: ProjectImage[] = [];
  projectId!: number;
  projectName: string = '';

  viewMode: 'grid' | 'list' = 'grid';
  currentPage = 1;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = +params['id'];

      const project: Project | undefined = this.projectService.getProjects().find(p => p.id === this.projectId);
      if (project) {
        this.projectName = project.name;
      }

      this.projectImages = PROJECT_IMAGES[this.projectId] || [];
    });

    this.route.queryParams.subscribe(q => {
      if (q['view'] === 'list') {
        this.viewMode = 'list';
      }
    });
  }

  get imagesPerPage(): number {
    return this.viewMode === 'grid' ? 12 : 20;
  }

  get paginatedImages() {
    const start = (this.currentPage - 1) * this.imagesPerPage;
    return this.projectImages.slice(start, start + this.imagesPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.projectImages.length / this.imagesPerPage);
  }

  toggleView() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
    this.currentPage = 1;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
