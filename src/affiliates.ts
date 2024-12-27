import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Affiliate {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    password: string;
    emailVerified: boolean;
    image: string;
    detailsComplete: boolean;
    programId: string;
    payoutEmail: string;
    paymentMethod: string;
    commissionRate: number;
    link: string;
    status: `ACTIVE` | `INACTIVE`;
    createdAt: string;
    updatedAt: string;
    numberOfReferredUsers: number;
    numberOfClicks: number;
    totalCommissionEarned: number;
}

export interface GetAffiliateOpts {
    id?: string;
    email?: string;
}

export interface CreateAffiliateOpts {
    firstName: string;
    lastName: string;
    email: string;
    commissionRate?: number;
}

export interface DeleteAffiliateOpts {
    id: string;
}

export interface UpdateAffiliateOpts {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    commissionRate?: number;
    affiliateStatus?: 'ACTIVE' | 'INACTIVE';
}
export class Affiliates {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async get(params?: GetAffiliateOpts): Promise<Affiliate[]> {
        const response: AxiosResponse<Affiliate[]> = await this.client.get('/affiliates', { params }).catch((error) => { throw error.message });
        return response.data;
    }

    async create(data: CreateAffiliateOpts): Promise<Affiliate> {
        const response: AxiosResponse<Affiliate> = await this.client.post('/affiliates', data).catch((error) => { console.log(error); throw error.message });
        return response.data;
    }

    async delete(data: DeleteAffiliateOpts): Promise<void> {
        await this.client.delete('/affiliates', { data }).catch((error) => { throw error.message });
    }

    async update(data: UpdateAffiliateOpts): Promise<void> {
        await this.client.put('/affiliates', data).catch((error) => { throw error.message });
    }

    async exists(emailOrID: string): Promise<boolean> {
        const opts: GetAffiliateOpts = emailOrID.includes('@') ? { email: emailOrID } : { id: emailOrID };
        const response: Promise<boolean> = this.get(opts).then((affiliates) => {
            return affiliates ? true : false;
        });
        return response;
    }
}