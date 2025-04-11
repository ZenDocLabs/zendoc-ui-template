import { Box, Typography } from "@mui/material";
import { FileDoc, StructDoc } from "../../doc/doc"
import { GitHubChip } from "./GithubChip";
import { useEnv } from "../../hooks/useEnv";
import { isFuncDoc } from "../../doc/guard";
import { FunctionDocumentation } from "./FunctionDocumentation";
import { getSectionId } from "./getSectionId";
import { StructDocumentation } from "./StructDocumentation";

interface FileDocumentationProps {
    fileDoc: FileDoc;
};

export const FileDocumentation = ({ fileDoc }: FileDocumentationProps): React.JSX.Element => {
    const { gitLink, mainBranch } = useEnv();
    const href = `${gitLink}/tree/${mainBranch}/${fileDoc.path}`;

    return (
        <Box sx={{ padding: 2, backgroundColor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {fileDoc.filename}
                </Typography>
                <GitHubChip href={href} />
            </Box>
        {fileDoc.docs.map((doc, index) => {
            const element = isFuncDoc(doc) ? 
                    <FunctionDocumentation funcDoc={doc} key={index} id={getSectionId(fileDoc.filename, doc.name)} /> : 
                    <StructDocumentation structDoc={doc as StructDoc} key={index} id={getSectionId(fileDoc.filename, doc.name)} />
            return (
                <Box key={index} sx={{ mb: 8 }}>
                    { element }
                </Box>
            )
        })}
    </Box>
    )
}