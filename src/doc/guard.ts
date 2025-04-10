import { BaseDoc, FuncDoc, StructDoc } from "./doc";

// Type guard to check if a BaseDoc is a FuncDoc
export const isFuncDoc = (doc: BaseDoc): doc is FuncDoc => {
  return doc.type === 'function';
}

// Type guard to check if a BaseDoc is a StructDoc
export const isStructDoc = (doc: BaseDoc): doc is StructDoc => {
  return doc.type === 'struct';
}