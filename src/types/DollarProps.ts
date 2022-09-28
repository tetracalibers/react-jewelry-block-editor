export type DollarProps<T> = {
  [p in keyof T as `$${p extends string ? p : never}`]: T[p]
}
