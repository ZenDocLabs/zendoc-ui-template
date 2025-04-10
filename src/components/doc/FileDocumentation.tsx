import { Box, Typography } from "@mui/material";
import { FileDoc } from "../../doc/doc"
import { GitHubChip } from "./GithubChip";
import { useEnv } from "../../hooks/useEnv";
import { isFuncDoc } from "../../doc/guard";
import { FunctionDocumentation } from "./FunctionDocumentation";
import { getFunctionId } from "./getFunctionId";

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
        {fileDoc.docs.map((doc, index) => (
            isFuncDoc(doc) ? <FunctionDocumentation funcDoc={doc} key={index} id={getFunctionId(fileDoc.filename, doc.name)} /> : <></>
        ))}
    </Box>
    )
}