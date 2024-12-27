import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Sale {
    id: number;
    affiliateId: string;
    referralId: string;
    externalId: string;
    externalInvoiceId: string;
    name: string;
    email: string;
    totalEarned: number;
    commissionRate: number;
    createdAt: string;
}

export interface GetSaleOpts {
    id?: string;
    affiliateId?: string;
    affiliateEmail?: string;
    referralId?: string;
    saleExternalId?: string;
}

export interface CreateSaleOpts {
    referralId: string;
    name: string;
    email: string;
    totalEarned: number;
    externalId?: string;
    externalInvoiceId?: string;
    commissionRate: number;
}

export interface DeleteSaleOpts {
    saleId: number;
}

export interface UpdateSaleOpts {
    saleId: number;
    name?: string;
    email?: string;
    totalEarned?: number;
    commissionRate?: number;
}

export class Sales {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async get(params?: GetSaleOpts): Promise<Sale[]> {
        const response: AxiosResponse<Sale[]> = await this.client.get('/sales', { params }).catch((error) => { throw error.message });
        return response.data;
    }

    async create(data: CreateSaleOpts): Promise<Sale> {
        const response: AxiosResponse<Sale> = await this.client.post('/sales', data).catch((error) => { throw error.message });
        return response.data;
    }

    async delete(data: DeleteSaleOpts): Promise<void> {
        await this.client.delete('/sales', { data }).catch((error) => { throw error.message });
    }

    async update(data: UpdateSaleOpts): Promise<void> {
        await this.client.put('/sales', data).catch((error) => { throw error.message });
    }
}