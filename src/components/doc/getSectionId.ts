export const getSectionId = (fileName: string, functionName: string): string => {
    return `${fileName}-${functionName}`;
}