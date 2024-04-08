import {defineStore} from 'pinia';
import apiBrapi from '~/services/api-brapi';
import {Stock, Data, ClickedItem} from '~/interfaces/interfaces';

export const useStore = defineStore('store', {
    state: () => ({
        quoteListStock: [] as Stock[],
        quoteListFund: [] as Stock[],
        quoteListBDRs: [] as Stock[],
        dataTable: [] as Stock[],
        clickedItem: {} as ClickedItem,
    }),
    actions: {
        clearClickedItem(): void {
            this.clickedItem = {
                change: null,
                close: null,
                type: null,
                link: null,
                logo: null,
                name: null,
                sector: null,
                description: null,
                stock: null,
                volume: null,
                linkStock: null,
                market_cap: null,
                titleStock: null,
                descriptionStock: null,
                title: null,
            }
        },
        async getQuoteList(): Promise<void> {
            const token: string = useRuntimeConfig().public.API_TOKEN;

            const queryParams: URLSearchParams = new URLSearchParams({
                token: token,
                sortBy: 'close',
                sortOrder: 'desc',
            });

            const url: string = `/quote/list?${queryParams}`;

            try {
                const {data} = await apiBrapi.get(url)
                this.quoteListFund = this.filterQuotes('fund', data.stocks);
                this.quoteListStock = this.filterQuotes('stock', data.stocks);
                this.quoteListBDRs = this.filterQuotes('bdr', data.stocks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        filterQuotes(type: string | null, stocks) {
            return stocks.filter(quote => quote.type === type)
        },
        getDataTable(): void {
            this.dataTable = []
            for (let i = 0; i < 2; i ++) {
                this.dataTable.push(this.quoteListFund[i])
                this.dataTable.push(this.quoteListBDRs[i])
                this.dataTable.push(this.quoteListStock[i])
            }
        },
    }
})