import React from 'react'
import { Box, Typography, Chip, Stack, Divider, useTheme } from '@mui/material'
import { StructDoc, FuncDoc } from '../../doc/doc'
import { FunctionDocumentation } from './FunctionDocumentation'
import { getSectionId } from './getSectionId'

interface StructDocumentationProps {
  structDoc: StructDoc
  allFuncs: FuncDoc[]
  fileName: string
  id: string
}

export const StructDocumentation = ({
  structDoc,
  allFuncs,
  fileName,
  id,
}: StructDocumentationProps): React.JSX.Element => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const backgroundColor = isDark ? '#333' : '#fefefe'
  const codeBackgroundColor = isDark ? '#1e1e1e' : '#f5f5f5'
  const textColor = isDark ? '#f8f8f2' : '#333'

  const relatedFuncs = allFuncs.filter(func => func.struct === structDoc.name)

  return (
    <Box sx={{ padding: 3, backgroundColor, borderRadius: 2, boxShadow: 1 }} id={id}>
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight="bold" color={isDark ? 'white' : 'text.primary'}>
          {structDoc.name}
        </Typography>

        {structDoc.deprecated && (
          <Chip label="Deprecated" color="warning" sx={{ width: 'fit-content' }} />
        )}

        <Typography variant="body1" color={textColor}>
          {structDoc.description}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        {structDoc.fields.length > 0 && (
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color={textColor}>
              Fields
            </Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              {structDoc.fields.map((field, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundColor: codeBackgroundColor,
                    borderRadius: 2,
                    p: 2,
                    fontFamily: 'monospace',
                    color: textColor,
                  }}
                >
                  <Typography variant="body2">
                    <b>{field.name}</b>{' '}
                    <Typography component="span" variant="body2">
                      ({field.type})
                    </Typography>
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {field.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        )}

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="caption" color="text.secondary">
          Author: {structDoc.author}
        </Typography>

        {/* Associated methods */}
        {relatedFuncs.length > 0 && (
          <Box>
            <Divider sx={{ marginY: 3 }} />
            <Typography variant="h6" fontWeight="bold" color={textColor} sx={{ mb: 2 }}>
              Methods
            </Typography>
            <Stack spacing={4}>
              {relatedFuncs.map((func, i) => (
                <FunctionDocumentation
                  key={i}
                  funcDoc={func}
                  id={getSectionId(fileName, func.name)}
                />
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  )
}
