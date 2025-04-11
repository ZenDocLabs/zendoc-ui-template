import { Box, Typography } from "@mui/material"
import { FileDoc, FuncDoc, StructDoc } from "../../doc/doc"
import { GitHubChip } from "./GithubChip"
import { useEnv } from "../../hooks/useEnv"
import { isFuncDoc } from "../../doc/guard"
import { FunctionDocumentation } from "./FunctionDocumentation"
import { StructDocumentation } from "./StructDocumentation"
import { getSectionId } from "./getSectionId"

interface FileDocumentationProps {
  fileDoc: FileDoc
}

export const FileDocumentation = ({ fileDoc }: FileDocumentationProps): React.JSX.Element => {
  const { gitLink, mainBranch } = useEnv()
  const href = `${gitLink}/tree/${mainBranch}/${fileDoc.path}`

  const funcs: FuncDoc[] = fileDoc.docs.filter(isFuncDoc)
  const structs: StructDoc[] = fileDoc.docs.filter(doc => !isFuncDoc(doc)) as StructDoc[]

  return (
    <Box sx={{ padding: 2, backgroundColor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {fileDoc.filename}
        </Typography>
        <GitHubChip href={href} />
      </Box>

      {/* Render structs (with their methods) */}
      {structs.map((structDoc, index) => (
        <Box key={`struct-${index}`} sx={{ mb: 8 }}>
          <StructDocumentation
            structDoc={structDoc}
            allFuncs={funcs}
            fileName={fileDoc.filename}
            id={getSectionId(fileDoc.filename, structDoc.name)}
          />
        </Box>
      ))}

      {/* Render top-level funcs (not tied to structs) */}
      {funcs.filter(f => !f.struct).map((funcDoc, index) => (
        <Box key={`func-${index}`} sx={{ mb: 8 }}>
          <FunctionDocumentation
            funcDoc={funcDoc}
            id={getSectionId(fileDoc.filename, funcDoc.name)}
          />
        </Box>
      ))}
    </Box>
  )
}
