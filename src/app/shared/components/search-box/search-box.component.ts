import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent{
    constructor() { }

    @ViewChild('txtSearchInput')
    public input! : ElementRef<HTMLInputElement>

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    public emitValue(value: string): void{
        this.onValue.emit(value);
        this.input.nativeElement.value = '';
    }
}