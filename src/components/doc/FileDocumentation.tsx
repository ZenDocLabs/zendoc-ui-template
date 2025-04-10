import { Box } from "@mui/material";
import { FileDoc } from "../../doc/doc"
import { GitHubChip } from "./GithubChip";
import { useEnv } from "../../hooks/useEnv";

interface FileDocumentationProps {
    fileDoc: FileDoc;
};

export const FileDocumentation = ({ fileDoc }: FileDocumentationProps): React.JSX.Element => {
    const { gitLink, mainBranch } = useEnv();
    const href = `${gitLink}/tree/${mainBranch}/${fileDoc.path}`;

    return (
        <Box sx={{
            marginLeft: 8
        }}>
            { fileDoc.filename } - <GitHubChip href={href} />
        </Box>
    )
}