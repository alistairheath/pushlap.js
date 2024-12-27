import { Affiliates } from './affiliates';
import { Referrals } from './referrals';
import { Sales } from './sales';
interface PushLapGrowthOptions {
    apiKey: string;
}
export { PushLapGrowthOptions };
export default class PushLapGrowth {
    affiliates: Affiliates;
    referrals: Referrals;
    sales: Sales;
    private client;
    constructor(opts: PushLapGrowthOptions);
}
