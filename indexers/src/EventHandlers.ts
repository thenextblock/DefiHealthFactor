/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AavePool,
  AavePool_BackUnbacked,
  AavePool_Borrow,
  AavePool_FlashLoan,
  AavePool_IsolationModeTotalDebtUpdated,
  AavePool_LiquidationCall,
  AavePool_MintUnbacked,
  AavePool_MintedToTreasury,
  AavePool_RebalanceStableBorrowRate,
  AavePool_Repay,
  AavePool_ReserveDataUpdated,
  AavePool_ReserveUsedAsCollateralDisabled,
  AavePool_ReserveUsedAsCollateralEnabled,
  AavePool_Supply,
  AavePool_SwapBorrowRateMode,
  AavePool_UserEModeSet,
  AavePool_Withdraw,
} from "generated";

AavePool.BackUnbacked.handler(async ({ event, context }) => {
  const entity: AavePool_BackUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    backer: event.params.backer,
    amount: event.params.amount,
    fee: event.params.fee,
  };

  context.AavePool_BackUnbacked.set(entity);
});


AavePool.Borrow.handler(async ({ event, context }) => {
  const entity: AavePool_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    borrowRate: event.params.borrowRate,
    referralCode: event.params.referralCode,
  };

  context.AavePool_Borrow.set(entity);
});


AavePool.FlashLoan.handler(async ({ event, context }) => {
  const entity: AavePool_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    target: event.params.target,
    initiator: event.params.initiator,
    asset: event.params.asset,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    premium: event.params.premium,
    referralCode: event.params.referralCode,
  };

  context.AavePool_FlashLoan.set(entity);
});


AavePool.IsolationModeTotalDebtUpdated.handler(async ({ event, context }) => {
  const entity: AavePool_IsolationModeTotalDebtUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    asset: event.params.asset,
    totalDebt: event.params.totalDebt,
  };

  context.AavePool_IsolationModeTotalDebtUpdated.set(entity);
});


AavePool.LiquidationCall.handler(async ({ event, context }) => {
  const entity: AavePool_LiquidationCall = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    collateralAsset: event.params.collateralAsset,
    debtAsset: event.params.debtAsset,
    user: event.params.user,
    debtToCover: event.params.debtToCover,
    liquidatedCollateralAmount: event.params.liquidatedCollateralAmount,
    liquidator: event.params.liquidator,
    receiveAToken: event.params.receiveAToken,
  };

  context.AavePool_LiquidationCall.set(entity);
});


AavePool.MintUnbacked.handler(async ({ event, context }) => {
  const entity: AavePool_MintUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.AavePool_MintUnbacked.set(entity);
});


AavePool.MintedToTreasury.handler(async ({ event, context }) => {
  const entity: AavePool_MintedToTreasury = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    amountMinted: event.params.amountMinted,
  };

  context.AavePool_MintedToTreasury.set(entity);
});


AavePool.RebalanceStableBorrowRate.handler(async ({ event, context }) => {
  const entity: AavePool_RebalanceStableBorrowRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.AavePool_RebalanceStableBorrowRate.set(entity);
});


AavePool.Repay.handler(async ({ event, context }) => {
  const entity: AavePool_Repay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    repayer: event.params.repayer,
    amount: event.params.amount,
    useATokens: event.params.useATokens,
  };

  context.AavePool_Repay.set(entity);
});


AavePool.ReserveDataUpdated.handler(async ({ event, context }) => {
  const entity: AavePool_ReserveDataUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    liquidityRate: event.params.liquidityRate,
    stableBorrowRate: event.params.stableBorrowRate,
    variableBorrowRate: event.params.variableBorrowRate,
    liquidityIndex: event.params.liquidityIndex,
    variableBorrowIndex: event.params.variableBorrowIndex,
  };

  context.AavePool_ReserveDataUpdated.set(entity);
});


AavePool.ReserveUsedAsCollateralDisabled.handler(async ({ event, context }) => {
  const entity: AavePool_ReserveUsedAsCollateralDisabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.AavePool_ReserveUsedAsCollateralDisabled.set(entity);
});


AavePool.ReserveUsedAsCollateralEnabled.handler(async ({ event, context }) => {
  const entity: AavePool_ReserveUsedAsCollateralEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.AavePool_ReserveUsedAsCollateralEnabled.set(entity);
});


AavePool.Supply.handler(async ({ event, context }) => {
  const entity: AavePool_Supply = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.AavePool_Supply.set(entity);
});


AavePool.SwapBorrowRateMode.handler(async ({ event, context }) => {
  const entity: AavePool_SwapBorrowRateMode = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    interestRateMode: event.params.interestRateMode,
  };

  context.AavePool_SwapBorrowRateMode.set(entity);
});


AavePool.UserEModeSet.handler(async ({ event, context }) => {
  const entity: AavePool_UserEModeSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    categoryId: event.params.categoryId,
  };

  context.AavePool_UserEModeSet.set(entity);
});


AavePool.Withdraw.handler(async ({ event, context }) => {
  const entity: AavePool_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.AavePool_Withdraw.set(entity);
});

