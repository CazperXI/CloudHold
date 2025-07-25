import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/navbar/navbar";
import { Sidebar } from "./core/sidebar/sidebar";
import { Maincontent } from './core/maincontent/maincontent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Sidebar, Maincontent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CloudHold');
}
