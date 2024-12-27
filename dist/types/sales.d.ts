import { AxiosInstance } from 'axios';
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
export declare class Sales {
    private client;
    constructor(client: AxiosInstance);
    get(params?: GetSaleOpts): Promise<Sale[]>;
    create(data: CreateSaleOpts): Promise<Sale>;
    delete(data: DeleteSaleOpts): Promise<void>;
    update(data: UpdateSaleOpts): Promise<void>;
}
