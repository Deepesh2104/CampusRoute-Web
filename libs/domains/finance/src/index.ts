export { financeRoutes } from './api/finance.routes';
export { FinanceFacade } from './application/finance.facade';
export { FinanceSnapshotStore, FINANCE_SNAPSHOT_KEY, type FinanceSnapshot } from './application/finance-snapshot.store';
export { runAffordability, runRoi, totalCostLakhs } from './domain/cost-engine';
