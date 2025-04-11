import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'
import { ListItemIcon } from '@mui/material'
import { useDocVersion } from "../../context/DocVersionContext"

export const VersionSelect = (): React.JSX.Element => {
    const { version, allVersions, setVersion } = useDocVersion()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const formatVersion = (v: string) => `v${v}`

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (newVersion?: string) => {
        setAnchorEl(null)
        if (newVersion && version !== newVersion) {
            setVersion(newVersion)
        }
    }

    return (
        <div>
            <Button
                variant="text"
                color="inherit"
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                sx={{ textTransform: 'none', fontWeight: 500 }}
            >
                {formatVersion(version)}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {allVersions.map(v => {
                    const isSelected = v === version
                    return (
                        <MenuItem
                            key={v}
                            selected={isSelected}
                            onClick={() => handleClose(v)}
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            {formatVersion(v)}
                            {isSelected && (
                                <ListItemIcon sx={{ minWidth: 'auto', ml: 1 }}>
                                    <CheckIcon fontSize="small" />
                                </ListItemIcon>
                            )}
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}
