import { AxiosInstance } from 'axios';
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
export declare class Referrals {
    private client;
    constructor(client: AxiosInstance);
    get(params?: GetReferralOpts): Promise<Referral[]>;
    create(data: CreateReferralOpts): Promise<Referral>;
    delete(data: DeleteReferralOpts): Promise<void>;
    update(data: UpdateReferralOpts): Promise<void>;
}
