import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit, OnDestroy{
    
    private debouncer: Subject<string> = new Subject<string>();
    private debouncerSubscription?: Subscription
    
    ngOnInit(): void {        
        this.debouncerSubscription = this.debouncer
        .pipe(
            debounceTime(300)
        )
        .subscribe( value => {
            this.onDebounce.emit(value);
        })
    }

    ngOnDestroy(): void {
        this.debouncerSubscription?.unsubscribe(); 
    }


    @ViewChild('txtSearchInput')
    public input! : ElementRef<HTMLInputElement>

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce: EventEmitter<string> = new EventEmitter();

    @Input()
    public valueTerm: string = '';

    public emitValue(value: string): void{
        this.onValue.emit(value);
        this.input.nativeElement.value = '';
    }

    onKeyPress(searchTerm: string): void {
        this.debouncer.next( searchTerm );
    }
}