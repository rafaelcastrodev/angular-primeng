interface RequestFilters {
    id: string;
    value: string;
}

export interface PaginatedResourceInterface {
    [key: string]: any;
    page?: number;
    first?: number;
    rows?: unknown[];
    total_records?: number;
    page_count?: number;
    has_next_page?: number;
    has_previous_page?: number;
    page_size?: number;
    sortby?: string;
    search?: string;
    requestFilters?: RequestFilters[];
}
