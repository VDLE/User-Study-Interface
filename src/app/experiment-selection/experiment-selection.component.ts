import { Component, Input, Output, EventEmitter, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-experiment-selection',
  templateUrl: './experiment-selection.component.html',
  styleUrls: ['./experiment-selection.component.css'],
    viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class ExperimentSelectionComponent {

  @Input() modelGroupName: string;
  @Output() choice = new EventEmitter<string>();

  ExperimentChoice(selection: string){
    this.choice.emit(selection);
  }

}
