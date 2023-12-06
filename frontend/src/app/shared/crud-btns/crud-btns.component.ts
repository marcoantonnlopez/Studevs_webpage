import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud-btns',
  templateUrl: './crud-btns.component.html',
  styleUrls: ['./crud-btns.component.css']
})
export class CRUDBtnsComponent {
  @Input() miRutaEdit: string = '';
  @Input() miRutaDelete: string = '';
  @Input() miTextoEdit: string = 'Edit';
  @Input() miTextoDelete: string = 'Delete';

  eliminarRegistro() {
    // Lógica de eliminación
  }
}
