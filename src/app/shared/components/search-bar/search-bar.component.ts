import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**MODELS */
import { PaginatedResourceInterface } from '@core/models/paginated-resource.interface';

/**SERVICES */

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
})
export class SearchbarComponent {
    @Input() styleClass: string = '';
    @Input() hasFilterModal: boolean = false;
    @Input() filters!: PaginatedResourceInterface | undefined;
    @Output() onSearch: EventEmitter<PaginatedResourceInterface> =
        new EventEmitter();
    @Output() clickFilterButton: EventEmitter<PaginatedResourceInterface> =
        new EventEmitter();
    searchForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        this.searchForm = this._formBuilder.group({
            searchTerm: [''],
        });
    }

    get formControls() {
        return this.searchForm.controls;
    }

    ngOnInit() {
        this.formControls['searchTerm'].setValue(this.filters?.search);
    }

    onClickFilterButton() {
        this.clickFilterButton.emit();
    }

    clearSearch() {
        this.formControls['searchTerm'].setValue(null);
        this.onSearch.emit({});
    }

    submitSearch() {
        const pag: PaginatedResourceInterface = {
            search: this.formControls['searchTerm'].value,
        };
        this.onSearch.emit(pag);
    }
}
