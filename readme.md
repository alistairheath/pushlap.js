# [<img src="https://www.pushlapgrowth.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.8143fe5a.png&w=64&q=100" width="32" height="32" />](http://pushlapgrowth.com) PushLap.js

PushLap.js is a TypeScript API wrapper for the [PushLapGrowth API](https://developers.pushlapgrowth.com/api-reference/introduction). This library simplifies integration with Push Lap Growth, enabling you to manage affiliates, referrals, and sales in your growth programs with ease.

## 🚀 Features

- **Affiliate Management**: Easily manage affiliates, including listing and creating new ones.
- **Referral Tracking**: Access and interact with referral data effortlessly.
- **Sales Insights**: Retrieve comprehensive sales data for your program.
- **TypeScript Support**: Built with TypeScript to ensure a seamless developer experience.

## 📦 Installation & Setup

Install PushLap.js directly from GitHub using npm:

```bash
npm install github:alistairheath/pushlap.js
```

Then in your Typescript or Javascript project, import the library and create an instance with your API key.

```typescript
import PushLapGrowth from 'pushlap.js';
const pushLapGrowth = new PushLapGrowth({ apiKey: "YOUR-API-KEY-HERE" });
```
⚠️ PushLap.js has been designed to use your private API keys and therefore should never be used in public-facing code. Use Node.js environment variables for added security.

## 🛠️ API Overview

PushLap.js provides a simple interface to interact with the core functionalities of the PushLapGrowth API. The library is divided into three main sections: Affiliates, Referrals, and Sales.

### 1. Affiliates

The affiliates endpoint can be used to get, create, delete, and update affiliates from your programs. Additionally, you can use the `exists()` method to check if a user with an ID or email address already exists.

#### Methods

- **`affiliates.get()`**: Retrieve a list of all affiliates. Accepts an optional input of type `GetAffiliateOpts` which can be used to filter results.
  
  ```typescript
  const affiliates = await pushLapGrowth.affiliates.get();
  console.log(`Number of affiliates: ${affiliates.length}`);
  ```

- **`affiliates.create(data: CreateAffiliateOpts)`**: Create a new affiliate by providing an object of type `CreateAffiliateOpts`.
  
  ```typescript
  const newAffiliate = await pushLapGrowth.affiliates.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      commissionRate: 0.2,
  });
  console.log(`Affiliate created: ${newAffiliate.id}`);
  ```

- **`affiliates.delete(data: DeleteAffiliateOpts)`**: Delete an affiliate by providing an object of type `DeleteAffiliateOpts`.
  
  ```typescript
  await pushLapGrowth.affiliates.delete({
      id: 'AFFILIATE-ID-HERE'
  });
  ```

- **`affiliates.update(data: UpdateAffiliateOpts)`**: Update the data for an affiliate by providing an object of type `UpdateAffiliateOpts`.
  
  ```typescript
  await pushLapGrowth.affiliates.update({
      id: 'AFFILIATE-ID-HERE',
      /* Parameters to update here */
  });
  ```

- **`affiliates.exists(emailOrID: string)`**: Check if an affiliate with the ID or email address already exists. Returns a promise with a boolean.
  
  ```typescript
  const affiliateExists = await pushLapGrowth.affiliates.exists('EMAIL-OR-ID-HERE');
  ```

### 2. Referrals

The referrals endpoint allows you to manage and retrieve referral data. This includes creating, updating, deleting, and fetching referrals.

#### Methods

- **`referrals.get(params?: GetReferralOpts)`**: Retrieve a list of referrals. You can filter results by providing an optional object of type `GetReferralOpts`.
  
  ```typescript
  const referrals = await pushLapGrowth.referrals.get();
  console.log(`Total referrals: ${referrals.length}`);
  ```

- **`referrals.create(data: CreateReferralOpts)`**: Create a new referral by providing an object of type `CreateReferralOpts`.
  
  ```typescript
  const newReferral = await pushLapGrowth.referrals.create({
      affiliateId: "AFFILIATE-ID",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      referredUserExternalId: "EXTERNAL-ID",
      plan: "Premium",
      status: "ACTIVE"
  });
  console.log(`Referral created: ${newReferral.id}`);
  ```

- **`referrals.delete(data: DeleteReferralOpts)`**: Delete a referral by providing an object of type `DeleteReferralOpts`.
  
  ```typescript
  await pushLapGrowth.referrals.delete({
      referralId: 'REFERRAL-ID-HERE'
  });
  ```

- **`referrals.update(data: UpdateReferralOpts)`**: Update the details of a referral by providing an object of type `UpdateReferralOpts`.
  
  ```typescript
  await pushLapGrowth.referrals.update({
      referralId: 'REFERRAL-ID-HERE',
      /* Parameters to update here */
  });
  ```

### 3. Sales

The sales endpoint provides methods to fetch and manage sales data for your program. You can create, update, delete, and retrieve sales information.

#### Methods

- **`sales.get(params?: GetSaleOpts)`**: Retrieve a list of sales. You can filter results by providing an optional object of type `GetSaleOpts`.
  
  ```typescript
  const sales = await pushLapGrowth.sales.get();
  console.log(`Total sales: ${sales.length}`);
  ```

- **`sales.create(data: CreateSaleOpts)`**: Create a new sale by providing an object of type `CreateSaleOpts`.
  
  ```typescript
  const newSale = await pushLapGrowth.sales.create({
      referralId: "REFERRAL-ID",
      name: "John Smith",
      email: "john.smith@example.com",
      totalEarned: 100,
      commissionRate: 0.1,
      externalInvoiceId: "INVOICE-ID"
  });
  console.log(`Sale created: ${newSale.id}`);
  ```

- **`sales.delete(data: DeleteSaleOpts)`**: Delete a sale by providing an object of type `DeleteSaleOpts`.
  
  ```typescript
  await pushLapGrowth.sales.delete({
      saleId: 'SALE-ID-HERE'
  });
  ```

- **`sales.update(data: UpdateSaleOpts)`**: Update the details of a sale by providing an object of type `UpdateSaleOpts`.
  
  ```typescript
  await pushLapGrowth.sales.update({
      saleId: 'SALE-ID-HERE',
      /* Parameters to update here */
  });
  ```

## 📘 Types

PushLap.js uses TypeScript types to ensure reliability and ease of use. The types below are returned by the get() and create() methods of their respective classes.

### AffiliateData

```typescript
interface AffiliateData {
    firstName: string;
    lastName: string;
    email: string;
    commissionRate: number;
}
```

### ReferralData

```typescript
interface Referral {
    id: string;
    affiliateId: string;
    name: string;
    email: string;
    referredUserExternalId: string;
    plan: string;
    status: 'ACTIVE' | 'INACTIVE';
}
```

### SaleData

```typescript
interface Sale {
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
```

## 💬 Feedback

If you have any questions or suggestions, feel free to open an issue or join the Push Lap Growth Discord at [https://discord.com/invite/Asfvb4uvHg](https://discord.com/invite/Asfvb4uvHg).

## ⚠️ Legal Disclaimer

PushLap.js is not officilaly supported by Push lap growth and is provided free and as-is. Neither Push Lap Growth or the developers of PushLap.js accept respobsibility for issues arising from the use or misuse of PushLap.js