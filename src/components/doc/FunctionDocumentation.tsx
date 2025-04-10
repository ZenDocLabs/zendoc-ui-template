import React from 'react';
import { Box, Typography, Chip, Stack, Divider, useTheme } from '@mui/material';
import { FuncDoc } from '../../doc/doc';

interface FunctionDocumentationProps {
  funcDoc: FuncDoc;
}

export const FunctionDocumentation = ({ funcDoc }: FunctionDocumentationProps): React.JSX.Element => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const backgroundColor = isDark ? '#333' : '#fefefe';
  const codeBackgroundColor = isDark ? '#1e1e1e' : '#f5f5f5';
  const textColor = isDark ? '#f8f8f2' : '#333';

  return (
    <Box sx={{ padding: 3, backgroundColor, borderRadius: 2, boxShadow: 1 }}>
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight="bold" color={isDark ? 'white' : 'text.primary'}>
          {funcDoc.name}
        </Typography>

        {funcDoc.deprecated && (
          <Chip
            label="Deprecated"
            color="warning"
            sx={{ width: 'fit-content' }}
          />
        )}

        <Typography variant="body1" color={textColor}>
          {funcDoc.description}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        {/* Parameters */}
        {funcDoc.params.length > 0 && (
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color={textColor}>
              Parameters
            </Typography>
            <Box component="ul" sx={{ paddingLeft: 3 }}>
              {funcDoc.params.map((param, idx) => (
                <li key={idx}>
                  <Typography component="span" fontFamily="monospace" fontSize="0.95rem" color={textColor}>
                    {param.name} <b>({param.type})</b> - {param.description}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        )}

        {/* Return */}
        {funcDoc.return && (
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color={textColor}>
              Returns
            </Typography>
            <Box sx={{ fontFamily: 'monospace', backgroundColor: codeBackgroundColor, borderRadius: 2, p: 2 }}>
              <Typography component="code" color={textColor}>
                {funcDoc.return.type}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }} color={textColor}>
                {funcDoc.return.description}
              </Typography>
            </Box>
          </Box>
        )}

        {funcDoc.example && (
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color={textColor}>
              Example
            </Typography>
            <Box sx={{ backgroundColor: '#272822', color: '#f8f8f2', borderRadius: 2, p: 2, fontFamily: 'monospace' }}>
              <pre style={{ margin: 0 }}>{funcDoc.example}</pre>
            </Box>
          </Box>
        )}

        <Divider sx={{ marginY: 2 }} />
        <Typography variant="caption" color="text.secondary">
          Author: {funcDoc.author}
        </Typography>
        {funcDoc.struct && (
          <Typography variant="caption" color="text.secondary">
            Attached to struct: <code>{funcDoc.struct}</code>
          </Typography>
        )}
      </Stack>
    </Box>
  );
};
