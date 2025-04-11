import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProjectDoc } from "../doc/doc";
import { useDocVersion } from "./DocVersionContext";

interface DocContextProps {
    doc: ProjectDoc;
}

const DocContext = createContext<DocContextProps>({ doc: {} as ProjectDoc });

export const useDoc = () => {
    const context = useContext(DocContext);
    return context;
}

export const DocProvider = ({ children }: { children: ReactNode }) => {
    const [doc, setDoc] = useState<ProjectDoc>();
    const { version } = useDocVersion();
    const allDocs = import.meta.glob("../assets/doc*.json");

    useEffect(() => {
        const loadDoc = async () => {
            const file = allDocs[`../assets/doc-${version}.json`];
            const currentDoc = await file() as any;
            setDoc(currentDoc.default as ProjectDoc);
        }
        
        loadDoc();
    }, [version]);

    if (!doc) return null;
    return (
        <DocContext.Provider value={{ doc }}>
            { children }
        </DocContext.Provider>
    )
}