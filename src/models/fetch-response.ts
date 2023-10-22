export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  seo_h1?: string;
  noindex?: boolean;
  nofollow?: boolean;
  description?: string;
  filters?: RequestFilters;
  nofollow_collections?: string[];
  results: T[];
}

export interface RequestFilters {
  years: FilterDefinition[];
}

export interface FilterDefinition {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: FilterYear[];
  nofollow: boolean;
  count: number;
}

export interface FilterYear {
  year: number;
  count: number;
  nofollow: boolean;
}
