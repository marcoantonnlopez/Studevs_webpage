import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud-btns',
  templateUrl: './crud-btns.component.html',
  styleUrls: ['./crud-btns.component.css']
})
export class CRUDBtnsComponent {
  @Input() registroId: string = ''; // ID del registro a eliminar
  @Input() registroTipo: string = '';
  
  @Input() miRutaEdit: string = '';
  @Input() miRutaDelete: string = '';
  @Input() miTextoEdit: string = 'Edit';
  @Input() miTextoDelete: string = 'Delete';

  @Output() onDelete = new EventEmitter<string>(); 

  eliminarRegistro() {
    // Emitir evento para que el componente padre maneje la eliminación
    this.onDelete.emit(this.registroId);
  }
}
