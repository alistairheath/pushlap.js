import { AxiosInstance } from 'axios';
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
export declare class Affiliates {
    private client;
    constructor(client: AxiosInstance);
    get(params?: GetAffiliateOpts): Promise<Affiliate[]>;
    create(data: CreateAffiliateOpts): Promise<Affiliate>;
    delete(data: DeleteAffiliateOpts): Promise<void>;
    update(data: UpdateAffiliateOpts): Promise<void>;
    exists(emailOrID: string): Promise<boolean>;
}
