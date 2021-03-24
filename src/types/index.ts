/* eslint-disable camelcase */
export interface Media {
    url: string;
    type: string;
}

export interface Actions {
    comment?: string;
    task_id?: string | null;
    title?: string;
    user?: string;
    date?: string;
    action_taken?: boolean;
    action_id?: number;
}

export interface Extras {
    new: boolean;
    vehicle_id: number;
    driver_id: string;
}

export interface Detail {
    format?: string;
    value: string;
    title: string;
    link?: string;
}

export interface Location {
    latitude: number;
    type?: string;
    longitude: number;
}

export interface EventDataObject {
    media: Media[];
    actions?: Actions[];
    extras?: Extras;
    details: Detail[];
    type: string;
    id: number;
    location: Location;
}

export const sortTerm = {
    Date: 'Tarih',
    Type: 'Tip',
    Route: 'Rota İsmi',
    Category: 'Kategori',
    Action: 'Aksiyon'
} as const;

export interface sortByTypes {
    sortBy: keyof typeof sortTerm;
}

export type actionTypeSelection = 'Mark As Resolved' | 'Change Asset' | null;
