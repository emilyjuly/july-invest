export interface Stock {
    change: number | null,
    close: number | null,
    logo: string | null,
    market_cap: string | null,
    name: string | null,
    sector: string | null,
    stock: string | null,
    type: string | null,
    volume: number | null
}

export interface Data {
    indexes: string[],
    stocks: string[],
    availableSectors: string[],
    availableStockTypes: string[]
}