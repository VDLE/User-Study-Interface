import { Component, Input, Output, EventEmitter, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class DemographicsComponent {

  gender: string;
  @Input() modelGroupName: string;
  @Output() choice = new EventEmitter<string>();

  GenderChoice(selection: string){
    this.choice.emit(selection);
  }
  onChange(gender: string){
    this.choice.emit(gender);
  }

}
