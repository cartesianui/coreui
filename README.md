# Cartesian CoreUI

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Overview

Provides layout components, based on angular-coreui, purpose of adding layer between app and coreui is to decouple layout logic/implementation from main app, just to have different UI libraries if required in future

This package provides 
- BoLayoutModule
    - DefaultLayoutComponent 
    - OffcanvasComponent (Wrapper Component for Coreui OffcanvasModule), selector `app-offcanvas`
        ```html
            <app-offcanvas
                id="string"
                title="string"
                subTitle="string"
                visible="boolean"
                (visibleChange)="function-in-parent-component($event)" // $event: boolean
            ></app-offcanvas>
        ```
        Inputs
            id:string, title:string, subTitle:string, visible:boolean
        Outputs
            visibleChange
    - DefaultActionsComponent, selector `page-actions` | `default-actions`, e.g.
        ```html
            <default-actions></default-actions>
        ```
        Available output functions
        Output
            save, create, update, edit, delete, deleteAll, deleteSelected, activate, activateAll, activateSelected, deactivate, deactivateAll, deactivateSelected, enable, disable, attach, detach, assign, revoke, remove, import, export, exportAll, exportSelected, search

## Code scaffolding

Run `ng generate component component-name --project coreui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project coreui`.
> Note: Don't forget to add `--project coreui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build coreui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build coreui`, go to the dist folder `cd dist/coreui` and run `npm publish`.

## Running unit tests

Run `ng test coreui` to execute the unit tests via [Karma](https://karma-runner.github.io).

