import { createContext, ReactNode, useContext } from "react";
import doc from "../assets/doc.json";
import { ProjectDoc } from "../doc/doc";

interface DocContextProps {
    doc: ProjectDoc;
}

const DocContext = createContext<DocContextProps>({ doc });

export const useDoc = () => {
    const context = useContext(DocContext);
    return context;
}

export const DocProvider = ({ children }: { children: ReactNode }) => {
    return (
        <DocContext.Provider value={{ doc }}>
            { children }
        </DocContext.Provider>
    )
}