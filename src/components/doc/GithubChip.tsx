import React from 'react';
import { Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface GithubChipProps {
    href: string;
}

export const GitHubChip = ({ href }: GithubChipProps): React.JSX.Element => {
  return (
    <Chip
      icon={<GitHubIcon />}
      label="View on GitHub"
      component="a"
      href={href}
      target="_blank"
      clickable
      sx={{
        color: 'white',
        backgroundColor: '#333',
        '&:hover': {
          backgroundColor: '#24292e',
        },
      }}
    />
  );
};
