/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  KuriCoreFactory,
  KuriCoreFactory_CurrencyRemoved,
  KuriCoreFactory_KeyHashUpdated,
  KuriCoreFactory_KuriMarketDeployed,
  KuriCoreFactory_NewCircleCurrencyAdded,
  KuriCoreFactory_RoleAdminChanged,
  KuriCoreFactory_RoleGranted,
  KuriCoreFactory_RoleRevoked,
  KuriCoreFactory_VRFCoordinatorUpdated,
  KuriCore,
  KuriCore_BeefyVaultDeposit,
  KuriCore_BeefyVaultWithdraw,
  KuriCore_CoordinatorSet,
  KuriCore_KuriInitialised,
  KuriCore_KuriSlotClaimed,
  KuriCore_MarketVRFSubscriptionDone,
  KuriCore_MembershipRequested,
  KuriCore_OwnershipTransferRequested,
  KuriCore_OwnershipTransferred,
  KuriCore_RaffleWinnerSelected,
  KuriCore_RoleAdminChanged,
  KuriCore_RoleGranted,
  KuriCore_RoleRevoked,
  KuriCore_UserAccepted,
  KuriCore_UserDeposited,
  KuriCore_UserFlagged,
  KuriCore_UserRejected,
} from "generated";

KuriCoreFactory.KuriMarketDeployed.contractRegister(({ event, context }) => {
  context.addKuriCore(event.params.marketAddress);
});

KuriCoreFactory.CurrencyRemoved.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_CurrencyRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    currencyRemoved: event.params.currencyRemoved,
  };

  context.KuriCoreFactory_CurrencyRemoved.set(entity);
});

KuriCoreFactory.KeyHashUpdated.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_KeyHashUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newKeyHash: event.params.newKeyHash,
    oldKeyHash: event.params.oldKeyHash,
  };

  context.KuriCoreFactory_KeyHashUpdated.set(entity);
});

KuriCoreFactory.KuriMarketDeployed.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_KuriMarketDeployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    marketAddress: event.params.marketAddress,
    intervalType: event.params.intervalType,
    timestamp: event.params.timestamp,
    wannabeMember: event.params.wannabeMember,
    circleCurrencyAddress: event.params.circleCurrencyAddress,
  };

  context.KuriCoreFactory_KuriMarketDeployed.set(entity);
});

KuriCoreFactory.NewCircleCurrencyAdded.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_NewCircleCurrencyAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    newCurrencyAddress: event.params.newCurrencyAddress,
  };

  context.KuriCoreFactory_NewCircleCurrencyAdded.set(entity);
});

KuriCoreFactory.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.KuriCoreFactory_RoleAdminChanged.set(entity);
});

KuriCoreFactory.RoleGranted.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.KuriCoreFactory_RoleGranted.set(entity);
});

KuriCoreFactory.RoleRevoked.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.KuriCoreFactory_RoleRevoked.set(entity);
});

KuriCoreFactory.VRFCoordinatorUpdated.handler(async ({ event, context }) => {
  const entity: KuriCoreFactory_VRFCoordinatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newCoordinator: event.params.newCoordinator,
    oldCoordinator: event.params.oldCoordinator,
  };

  context.KuriCoreFactory_VRFCoordinatorUpdated.set(entity);
});

KuriCore.BeefyVaultDeposit.handler(async ({ event, context }) => {
  const entity: KuriCore_BeefyVaultDeposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    intervalIndex: event.params.intervalIndex,
    vaultAddress: event.params.vaultAddress,
    shareAmount: event.params.shareAmount,
    kuriAmount: event.params.kuriAmount,
    timestamp: event.params.timestamp,
  };

  context.KuriCore_BeefyVaultDeposit.set(entity);
});

KuriCore.BeefyVaultWithdraw.handler(async ({ event, context }) => {
  const entity: KuriCore_BeefyVaultWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    vaultAddress: event.params.vaultAddress,
    shareAmount: event.params.shareAmount,
    withdrawAmount: event.params.withdrawAmount,
    timestamp: event.params.timestamp,
  };

  context.KuriCore_BeefyVaultWithdraw.set(entity);
});

KuriCore.CoordinatorSet.handler(async ({ event, context }) => {
  const entity: KuriCore_CoordinatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vrfCoordinator: event.params.vrfCoordinator,
  };

  context.KuriCore_CoordinatorSet.set(entity);
});

KuriCore.KuriInitialised.handler(async ({ event, context }) => {
  const entity: KuriCore_KuriInitialised = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    _kuriData_0: event.params._kuriData[0],
    _kuriData_1: event.params._kuriData[1],
    _kuriData_2: event.params._kuriData[2],
    _kuriData_3: event.params._kuriData[3],
    _kuriData_4: event.params._kuriData[4],
    _kuriData_5: event.params._kuriData[5],
    _kuriData_6: event.params._kuriData[6],
    _kuriData_7: event.params._kuriData[7],
    _kuriData_8: event.params._kuriData[8],
    _kuriData_9: event.params._kuriData[9],
    _kuriData_10: event.params._kuriData[10],
    _kuriData_11: event.params._kuriData[11],
  };

  context.KuriCore_KuriInitialised.set(entity);
});

KuriCore.KuriSlotClaimed.handler(async ({ event, context }) => {
  const entity: KuriCore_KuriSlotClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    timestamp: event.params.timestamp,
    kuriAmount: event.params.kuriAmount,
    intervalIndex: event.params.intervalIndex,
  };

  context.KuriCore_KuriSlotClaimed.set(entity);
});

KuriCore.MarketVRFSubscriptionDone.handler(async ({ event, context }) => {
  const entity: KuriCore_MarketVRFSubscriptionDone = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    subscriptionId: event.params.subscriptionId,
    subscriber: event.params.subscriber,
  };

  context.KuriCore_MarketVRFSubscriptionDone.set(entity);
});

KuriCore.MembershipRequested.handler(async ({ event, context }) => {
  const entity: KuriCore_MembershipRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    timestamp: event.params.timestamp,
  };

  context.KuriCore_MembershipRequested.set(entity);
});

KuriCore.OwnershipTransferRequested.handler(async ({ event, context }) => {
  const entity: KuriCore_OwnershipTransferRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    from: event.params.from,
    to: event.params.to,
  };

  context.KuriCore_OwnershipTransferRequested.set(entity);
});

KuriCore.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: KuriCore_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    from: event.params.from,
    to: event.params.to,
  };

  context.KuriCore_OwnershipTransferred.set(entity);
});

KuriCore.RaffleWinnerSelected.handler(async ({ event, context }) => {
  const entity: KuriCore_RaffleWinnerSelected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    intervalIndex: event.params.intervalIndex,
    winnerIndex: event.params.winnerIndex,
    winnerAddress: event.params.winnerAddress,
    winnerTimestamp: event.params.winnerTimestamp,
    requestId: event.params.requestId,
  };

  context.KuriCore_RaffleWinnerSelected.set(entity);
});

KuriCore.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: KuriCore_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.KuriCore_RoleAdminChanged.set(entity);
});

KuriCore.RoleGranted.handler(async ({ event, context }) => {
  const entity: KuriCore_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.KuriCore_RoleGranted.set(entity);
});

KuriCore.RoleRevoked.handler(async ({ event, context }) => {
  const entity: KuriCore_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.KuriCore_RoleRevoked.set(entity);
});

KuriCore.UserAccepted.handler(async ({ event, context }) => {
  const entity: KuriCore_UserAccepted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    caller: event.params.caller,
    _totalActiveParticipantsCount: event.params._totalActiveParticipantsCount,
  };

  context.KuriCore_UserAccepted.set(entity);
});

KuriCore.UserDeposited.handler(async ({ event, context }) => {
  const entity: KuriCore_UserDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    userIndex: event.params.userIndex,
    intervalIndex: event.params.intervalIndex,
    amountDeposited: event.params.amountDeposited,
    depositTimestamp: event.params.depositTimestamp,
  };

  context.KuriCore_UserDeposited.set(entity);
});

KuriCore.UserFlagged.handler(async ({ event, context }) => {
  const entity: KuriCore_UserFlagged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    intervalIndex: event.params.intervalIndex,
  };

  context.KuriCore_UserFlagged.set(entity);
});

KuriCore.UserRejected.handler(async ({ event, context }) => {
  const entity: KuriCore_UserRejected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    user: event.params.user,
    caller: event.params.caller,
  };

  context.KuriCore_UserRejected.set(entity);
});
