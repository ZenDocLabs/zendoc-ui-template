import React from "react";
import { FileDoc } from "../../doc/doc";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FileDocumentation } from "./FileDocumentation";

interface PackageDocumentationProps {
    fileDocs: FileDoc[];
    packageName: string;
};

export const PackageDocumentation = ({ fileDocs, packageName }: PackageDocumentationProps): React.JSX.Element => {
    const { t } = useTranslation();
    return (
        <Box>
            <Typography variant="h5">{t('documentation.package.title', { packageName })}</Typography>
            {fileDocs.map((fileDoc, index) => {
                return (
                    <Box id={fileDoc.path} key={index}>
                        <FileDocumentation fileDoc={fileDoc} />
                    </Box>
            )
            })}
        </Box>
    )
}
