import { Box } from "@mui/material";
import { useDoc } from "../../context/DocContext"
import { PackageDocumentation } from "./PackageDocumentation";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFunctionId } from "./getFunctionId";

// Display all the documentation of the project
export const Documentation = () => {
    const { filename, functionName } = useParams();
    const { doc } = useDoc();

    useEffect(() => {
        if (filename && functionName) {
            const element = document.getElementById(getFunctionId(filename, functionName));
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [filename, functionName]);

    return <Box>
        {Object.keys(doc.packageDocs).map((packageName, index) => {
            const docs = doc.packageDocs[packageName];
            return (
                <Box id={packageName} key={index}>
                    <PackageDocumentation fileDocs={docs} packageName={packageName} />
                </Box>
            )
        })}
    </Box>
}