# Aggregation Queries 


```sql 

    -- Just simple query from borrow Aavepool_Borrow
    SELECT * FROM "Aavepool_Borrow" LIMIT 1000;

    -- Get top most active 100 accounts from aave market
    WITH A AS (
        SELECT  "onBehalfOf", count(*) AS cnt
            FROM "Aavepool_Borrow"
                GROUP BY "onBehalfOf" -- Account 
    )
    SELECT * FROM A ORDER BY cnt DESC LIMIT 100;


    -- List All reservers from aave market
    SELECT DISTINCT reserve FROM "Aavepool_Borrow";

```