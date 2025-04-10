import React from 'react';
import { Chip, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface GithubChipProps {
    href: string;
}

export const GitHubChip = ({ href }: GithubChipProps): React.JSX.Element => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const chipBackgroundColor = isDark ? '#333' : '#f5f5f5';
  const chipHoverBackgroundColor = isDark ? '#24292e' : '#e1e4e8';
  const chipColor = isDark ? '#fff' : '#333';

  return (
    <Chip
      icon={<GitHubIcon />}
      label="View on GitHub"
      component="a"
      href={href}
      target="_blank"
      clickable
      sx={{
        color: chipColor,
        backgroundColor: chipBackgroundColor,
        '&:hover': {
          backgroundColor: chipHoverBackgroundColor,
        },
      }}
    />
  );
};
