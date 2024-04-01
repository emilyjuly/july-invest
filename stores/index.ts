import {defineStore} from 'pinia';
import api from '@/services/api';
import {Stock, Data} from '~/interfaces/interfaces';

export const useStore = defineStore('store', {
    state: () => ({
        quoteListStock: [] as Stock[],
        quoteListFund: [] as Stock[],
        quoteListBDRs: [] as Stock[],
    }),
    actions: {
        async getQuoteList(): Promise<void> {
            const token: string = useRuntimeConfig().public.API_TOKEN;

            const queryParams: URLSearchParams = new URLSearchParams({
                token: token,
                sortBy: 'close',
                sortOrder: 'desc',
            });

            const url: string = `/quote/list?${queryParams}`;

            try {
                const {data} = await api.get(url)
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
    }
})