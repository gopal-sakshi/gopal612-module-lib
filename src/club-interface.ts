export interface ClubAddress {
    city: string;
    country: string;
}
export interface Club {
    name: string;
    stadium?: string;                       // optional property ???
    manager: string;
    address23?: ClubAddress;
    clTitles: number;
    isUclWinner?: boolean
}