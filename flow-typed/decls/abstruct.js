declare type CRUDSchema = {
  id: number,
  created_at: Date,
  updated_at: Date
}

declare class CRUDRecord {
  getID: () => string,
  getCreatedAt: () => Date,
  getUpdatedAt: () => Date,
  updateUpdatedAt: () => CRUDRecor,
  restoreID: (id: string) => CRUDRecord,
  restoreCreatedAt: (date: Date) => CRUDRecord,
  restoreUpdatedAt: (date: Date) => CRUDRecord
}
