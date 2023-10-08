import { Component, Input, Output } from '@angular/core';
import { WatchedEventEmitter } from '../default-actions/WatchedEventSubscriber';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html'
})
export class OffcanvasComponent {

  @Input() id: string;  
  @Input() title: string;  
  @Input() subTitle: string;
  @Input() visible: boolean = false; 
  @Output() visibleChange: WatchedEventEmitter = new WatchedEventEmitter();

  public constructor() {}

  // setVisible = (visible: boolean) => {
  //   this.visible = visible;
  // }

  // visibilityChanged = (visible: boolean) => {
  //   this.visibleChange.emit(visible);
  // }
}
