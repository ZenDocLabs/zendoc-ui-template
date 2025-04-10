// Type for Param struct
export interface Param {
    name: string;
    type: string;
    description: string;
  }
  
  // Type for Return struct
  export interface Return {
    type: string;
    description: string;
  }
  
  // Base documentation type
  export interface BaseDoc {
    name: string;
    description: string;
    author: string;
    deprecated: string;
    type: string;
  }
  
  // Type for FuncDoc, extends BaseDoc and adds function-specific fields
  export interface FuncDoc extends BaseDoc {
    params: Param[];
    return: Return | null;
    example: string;
    struct?: string; // Optional field
  }
  
  // StructField is identical to Param, as per the original code
  export type StructField = Param;
  
  // Type for StructDoc, extends BaseDoc and adds fields for struct documentation
  export interface StructDoc extends BaseDoc {
    fields: StructField[];
  }
  
  // Type for FileDoc
  export interface FileDoc {
    filename: string;
    path: string;
    docs: (BaseDoc | FuncDoc | StructDoc)[]; // It can be any of the BaseDoc types
  }
  
  // Type for ProjectDoc
  export interface ProjectDoc {
    packageDocs: Record<string, FileDoc[]>; // A mapping of package name to FileDocs
  }
  