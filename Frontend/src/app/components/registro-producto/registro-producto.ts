import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CATEGORIAS_DISPONIBLES } from '../../models/categorias';

@Component({
  selector: 'app-registro-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-producto.html',
  styleUrl: './registro-producto.css'
})
export class RegistroProducto implements OnInit {

  productoForm!: FormGroup;
  categorias: string[] = CATEGORIAS_DISPONIBLES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      categoria: ['', [Validators.required]],
      stock: [null, [Validators.required, Validators.min(0)]],
      sku: ['', [Validators.pattern(/^[A-Z]{3}-\d{4}$/)]]
    });
  }

  get f() {
    return this.productoForm.controls;
  }
}