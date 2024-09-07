# Indexer

- [The fastest, most flexible way to get on-chain data.](https://envio.dev/)
- [Envio HyperSync](https://docs.envio.dev/docs/HyperSync/overview)
- [Envio HyperIndex](https://docs.envio.dev/docs/HyperIndex/)


**We will use PostgreSQL queries for data aggregation.**

In the Proof of Concept phase we use **[HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview)** for fast data indexing. 

In subsequent phases, we aim to implement. **[HyperSync](https://docs.envio.dev/docs/HyperSync/overview)** to enable more flexible data storage optimized for the project's requirements..


## Aaave Smartcontracts and event logs.

## AAVE Smart Contract Interaction Steps

When a user interacts with AAVE smart contracts, the following steps are taken:

1. **Enter the market**.
2. **Supply assets** as collateral.
3. **Borrow assets** based on the supplied collateral.
4. **Repay the loan**.
5. **Loan liquidation** occurs if the collateral value falls below a certain threshold:  
   _Collateral < Borrowed Assets * Liquidation Threshold_.

> @TODO The Source Codes will be provided

## Objective

Our goal is to index all these events and store them in a database. Afterward, we will calculate the account's health factor using the following formula:

```sql
    Health Factor (%) = (Collateral Assets in USD / Borrowed Assets in USD) * 100 
```

