import React from "react";
import { FileDoc } from "../../doc/doc";
import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FileDocumentation } from "./FileDocumentation";

interface PackageDocumentationProps {
  fileDocs: FileDoc[];
  packageName: string;
}

export const PackageDocumentation = ({ fileDocs, packageName }: PackageDocumentationProps): React.JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('documentation.package.title', { packageName })}
      </Typography>
      <Stack spacing={3}>
        {fileDocs.map((fileDoc, index) => (
          <Box id={fileDoc.path} key={index} sx={{ marginBottom: 3 }}>
            <FileDocumentation fileDoc={fileDoc} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
