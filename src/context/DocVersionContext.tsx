import { createContext, ReactNode, useContext, useState } from "react";
import versionsJSON from "../assets/versions.json";

interface DocVersionContextProps {
    version: string;
    setVersion: (version: string) => void;
    allVersions: string[];
}

const DocVersionContext = createContext<DocVersionContextProps>({ version: "",
    allVersions: [],
    setVersion: () => {}
 });

export const useDocVersion = () => {
    return useContext(DocVersionContext);
}

export const DocVersionProvider = ({ children }: { children: ReactNode }) => {
    const allVersions = versionsJSON.versions;
    const [version, setVersion] = useState<string>(() => {
        return allVersions[0];
    });


    return (
        <DocVersionContext.Provider value={{
            version,
            setVersion,
            allVersions
        }}>
            { children }
        </DocVersionContext.Provider>
    )
}