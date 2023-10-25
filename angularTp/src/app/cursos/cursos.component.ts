import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: Curso[] = [
    { id: 1, nombre: 'Curso 1', duracion: '3 meses', descripcion: 'Descripción del Curso 1', cantidad: 30 },
    { id: 2, nombre: 'Curso 2', duracion: '2 meses', descripcion: 'Descripción del Curso 2', cantidad: 25 }
  ];

  mostrarCursos = true;

  nuevoCurso: Curso = { id: 0, nombre: '', duracion: '', descripcion: '', cantidad: 0 };

  agregarCurso() {
    const cursoConId = { ...this.nuevoCurso, id: this.cursos.length + 1 };
    this.cursos.push(cursoConId);
    this.nuevoCurso = { id: 0, nombre: '', duracion: '', descripcion: '', cantidad: 0 };
  }

  eliminarCurso(index: number) {
    if (index >= 0 && index < this.cursos.length) {
      this.cursos.splice(index, 1);
    }
  }
  

  toggleMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}

export interface Curso {
  id: number;
  nombre: string;
  duracion: string;
  descripcion: string;
  cantidad: number;
}
