export interface Media {
    center: string;
    title: string;
    nasa_id: string;
    media_type: string;
    keywords: string[];
    date_created: Date;
    description: string;
    description_508: string;
    secondary_creator: string;
    location: string;
    photographer: string;
    album: string[];
}

export interface Link {
    href: string;
    rel: string;
    render: string;
}

export interface Item {
    href: string;
    data: Media[];
    links: Link[];
}

export interface Metadata {
    total_hits: number;
}

export interface Link2 {
    rel: string;
    prompt: string;
    href: string;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
    links: Link2[];
}

export interface MediaResponse {
    collection: Collection;
}
