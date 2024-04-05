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

export interface ClickedItem extends Stock{
    title: string | null,
    description: string | null,
    link: string | null,
    titleStock: string | null,
    descriptionStock: string | null,
    linkStock: string | null,
}

export interface Data {
    indexes: string[],
    stocks: string[],
    availableSectors: string[],
    availableStockTypes: string[]
}