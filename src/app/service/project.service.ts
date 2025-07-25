import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  create: Date;
  size: string;
  status: 'ready' | 'not ready' | 'setting' | 'fetch' ;
  owner: string;
  NumImg: number;
  ImgDes: string;
  iso: number;
  thumbnail: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'My Project by Mapedia',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'ready',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 150,
      ImgDes: 'created by dji camera...',
      iso: 104,
      thumbnail: '/Datepicker.png'
    },
    {
      id: 2,
      name: 'My Project by Mapedia 2',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'not ready',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 300,
      ImgDes: 'created by dji camera...',
      iso: 104,
      thumbnail: '/Datepicker.png'
    },
    {
      id: 3,
      name: 'My Project by Mapedia 3',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 230,
      ImgDes: 'created by dji camera...',
      iso: 104,
      thumbnail: '/Datepicker.png'
    },
    {
      id: 4,
      name: 'My Project by Mapedia 4',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'fetch',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 493,
      ImgDes: 'created by dji camera...',
      iso: 104,
      thumbnail: '/Datepicker.png'
    },

    {
      id: 5,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 6,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 7,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 8,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 9,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 10,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 11,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 12,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 13,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 14,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 15,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 16,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 17,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    },
    {
      id: 18,
      name: 'images group',
      create: new Date('2023-01-25'),
      size: '100kb',
      status: 'setting',
      owner: 'mapedia.analytics@gmail.com',
      NumImg: 0,
      ImgDes: '-',
      iso: -1,
      thumbnail: '/Frame.png'
    }
  ];

  getProjects() {
    return this.projects;
  }
}
