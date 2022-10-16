import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { WatchedEventEmitter } from './WatchedEventSubscriber'

@Component({
  selector: 'default-actions, page-actions',
  styleUrls: ['./default-actions.component.scss'],
  templateUrl: './default-actions.component.html'
})
export class DefaultActionsComponent implements OnChanges {

  _disabled: {[key: string]: boolean};
  @Input()
  set disabled(disabled: {[key: string]: boolean}) {
    this._disabled = disabled;
  }

  @Output() save: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() create: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() update: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() edit: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() delete: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() deleteAll: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() deleteSelected: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() activate: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() activateAll: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() activateSelected: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() deactivate: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() deactivateAll: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() deactivateSelected: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() enable: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() disable: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() attach: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() detach: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() assign: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() revoke: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() remove: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() import: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() export: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() exportAll: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() exportSelected: WatchedEventEmitter = new WatchedEventEmitter();
  @Output() search: WatchedEventEmitter = new WatchedEventEmitter();

  ngOnChanges(changes: {[title: string]: SimpleChange}) {
    // console.log(changes);
  }

  clickDelete(e) {
    this.delete.emit({event: e});
  }

  clickExport(e) {
    this.export.emit({event: e});
  }

  clickImport(e) {
    this.import.emit({event: e});
  }

  clickDeactivate(e) {
    this.deactivate.emit({event: e});
  }

  clickActivate(e) {
    this.activate.emit({event: e});
  }

  clickDisable(e) {
    this.disable.emit({event: e});
  }

  clickEnable(e) {
    this.enable.emit({event: e});
  }

  clickAttach(e) {
    this.attach.emit({event: e});
  }

  clickDetach(e) {
    this.detach.emit({event: e});
  }

  clickAssign(e) {
    this.assign.emit({event: e});
  }

  clickRemove(e) {
    this.remove.emit({event: e});
  }

  clickRevoke(e) {
    this.revoke.emit({event: e});
  }

  clickUpdate(e) {
    this.update.emit({event: e});
  }

  clickEdit(e) {
    this.edit.emit({event: e});
  }

  clickSave(e) {
    this.save.emit({event: e});
  }

  clickCreate(e) {
    this.create.emit({event: e});
  }

  clickSearch(e) {
    this.search.emit({event: e});
  }
}
