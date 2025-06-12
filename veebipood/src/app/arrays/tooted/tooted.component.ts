import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FiltridJaSort } from '../filtridjasort';
import { ToodeService } from '../../services/toode.service';

@Component({
  selector: 'app-tooted',
  imports: [RouterLink],
  templateUrl: './tooted.component.html',
  styleUrl: './tooted.component.css'
})
export class TootedComponent {
  fjaS = new FiltridJaSort();
  tooted: string[] = [];
  tootedCopy = this.tooted;

  constructor(private toodeService: ToodeService) {}
    
  ngOnInit() {
    this.tooted = this.toodeService.tooted.slice();
  }
}
