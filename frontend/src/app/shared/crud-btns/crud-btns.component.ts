// import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-crud-btns',
//   templateUrl: './crud-btns.component.html',
//   styleUrls: ['./crud-btns.component.css']
// })
// export class CRUDBtnsComponent {
//   @Input() registroId: string = ''; // ID del registro a eliminar
//   @Input() registroTipo: string = '';
//   miRutaEdit: string = '';
//   // @Input() miRutaEdit: string = '';
//   @Input() miRutaDelete: string = '';
//   @Input() miTextoEdit: string = 'Edit';
//   @Input() miTextoDelete: string = 'Delete';

//   constructor(private router: Router) {}

  

//   @Output() onDelete = new EventEmitter<string>(); 

//   eliminarRegistro() {
//     // Emitir evento para que el componente padre maneje la eliminación
//     this.onDelete.emit(this.registroId);
//   }

//   editarRegistro() {
//     let rutaEdit: string;
//     switch (this.registroTipo) {
//       case 'evento':
//         rutaEdit = '/edit-event/';
//         break;
//       case 'proyecto':
//         rutaEdit = '/edit-project/';
//         break;
//       case 'miembro':
//         rutaEdit = '/edit-member/';
//         break;
//       default:
//         rutaEdit = '/'; // Ruta por defecto en caso de tipo desconocido
//     }
//     this.router.navigate([rutaEdit + this.registroId]);
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-btns',
  templateUrl: './crud-btns.component.html',
  styleUrls: ['./crud-btns.component.css']
})
export class CRUDBtnsComponent {
  @Input() registroId: string = '';
  @Input() registroTipo: string = '';
  @Output() onDelete = new EventEmitter<string>(); 
  @Input() miTextoEdit: string = 'Edit'; 
  @Input() miTextoDelete: string = 'Delete';

  constructor(private router: Router) {}

  // Usa un getter para calcular miRutaEdit
  get miRutaEdit(): string {
    return this.getEditRoute(this.registroTipo, this.registroId);
    console.log(this.registroId);
  }

  private getEditRoute(tipo: string, id: string): string {
    switch (tipo) {
      case 'evento':
        return '/edit-event/' + id;
      case 'proyecto':
        return '/edit-project/' + id;
      case 'miembro':
        return '/edit-member/' + id;
      default:
        return '/'; // Ruta por defecto en caso de tipo desconocido
    }
  }

  eliminarRegistro() {
    this.onDelete.emit(this.registroId);
  }
}
