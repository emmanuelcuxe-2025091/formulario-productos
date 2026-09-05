import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroProducto } from './components/registro-producto/registro-producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Frontend';
}