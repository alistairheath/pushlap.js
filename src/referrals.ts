import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Referral {
    id: string;
    affiliateId: string;
    name: string;
    email: string;
    referredUserExternalId: string;
    plan: string;
    status: 'ACTIVE' | 'INACTIVE';
}

export interface GetReferralOpts {
    id?: string;
    affiliateId?: string;
    affiliateEmail?: string;
    externalId?: string;
}

export interface CreateReferralOpts {
    affiliateId: string;
    name: string;
    email: string;
    referredUserExternalId: string;
    plan?: string;
    status?: 'ACTIVE' | 'INACTIVE';
}

export interface DeleteReferralOpts {
    referralId: string;
}

export interface UpdateReferralOpts {
    referralId: string;
    name?: string;
    email?: string;
    referredUserExternalId?: string;
    plan?: string;
    status?: 'ACTIVE' | 'INACTIVE';
}

export class Referrals {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async get(params?: GetReferralOpts): Promise<Referral[]> {
        const response: AxiosResponse<Referral[]> = await this.client.get('/referrals', { params }).catch((error) => { throw error.message });
        return response.data;
    }

    async create(data: CreateReferralOpts): Promise<Referral> {
        const response: AxiosResponse<Referral> = await this.client.post('/referrals', data).catch((error) => { throw error.message });
        return response.data;
    }

    async delete(data: DeleteReferralOpts): Promise<void> {
        await this.client.delete('/referrals', { data }).catch((error) => { throw error.message });
    }

    async update(data: UpdateReferralOpts): Promise<void> {
        await this.client.put('/referrals', data).catch((error) => { throw error.message });
    }
}