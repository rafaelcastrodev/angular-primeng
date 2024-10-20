import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-skeleton-table',
    templateUrl: './skeleton-table.component.html',
    styleUrl: './skeleton-table.component.scss',
})
export class SkeletonTableComponent implements OnInit {
    @Input() rows: string = '5';
    @Input() styleClass: string = '';
    @Input() commonStyleClass: string = '';
    @Input() columnIcon: string = 'pi pi-sort-alt';
    @Input() columns!: string[];
    @Input() columnsQtty: number = 5;
    @Input() columnStyleClass: string[] = [];
    @Input() animated: boolean = true;

    mockItemsRows: number[] = [];
    mockItemsColumns: string[] | number[] = [];

    ngOnInit() {
        this.mockItemsColumns = this.columns
            ? this.columns
            : this.fillArray(this.columnsQtty);
        this.mockItemsRows = this.fillArray(Number(this.rows));
    }

    private fillArray(length: number): number[] {
        return Array.from({ length }, (_, i) => i + 1);
    }
}
