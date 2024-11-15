import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDivider,MatCardModule, MatTableModule],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {

}
