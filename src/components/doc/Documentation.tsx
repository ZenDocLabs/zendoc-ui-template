import { Box } from "@mui/material";
import { useDoc } from "../../context/DocContext"
import { PackageDocumentation } from "./PackageDocumentation";

// Display all the documentation of the project
export const Documentation = () => {
    const { doc } = useDoc();

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