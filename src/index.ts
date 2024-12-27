import axios, { AxiosInstance } from 'axios';
import { Affiliates } from './affiliates';
import { Referrals } from './referrals';
import { Sales } from './sales';

interface PushLapGrowthOptions {
    apiKey: string;
}

//Export Types
export { PushLapGrowthOptions };

//Export the Class
export default class PushLapGrowth {
  public affiliates: Affiliates;
  public referrals: Referrals;
  public sales: Sales;

  private client: AxiosInstance;

  constructor(opts: PushLapGrowthOptions) {
    this.client = axios.create({
      baseURL: 'https://www.pushlapgrowth.com/api/v1',
      headers: {
        Authorization: `Bearer ${opts.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.affiliates = new Affiliates(this.client);
    this.referrals = new Referrals(this.client);
    this.sales = new Sales(this.client);
  }
};