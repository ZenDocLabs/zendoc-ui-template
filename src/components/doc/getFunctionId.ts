export const getFunctionId = (fileName: string, functionName: string): string => {
    return `${fileName}-${functionName}`;
}