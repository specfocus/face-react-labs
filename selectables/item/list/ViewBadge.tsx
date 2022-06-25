import Badge, { BadgeProps } from '@mui/material/Badge';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import React from 'react';

const BadgeStyled = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const ListItemIconStyled = styled(ListItemIcon)(() => ({
  backgroundColor: 'inherit',
  color: 'inherit'
}));

interface ViewBadgeProps extends ListItemIconProps {
  badge: number;
}

const ViewBadge = ({ badge, children, ...props }: ViewBadgeProps) => (
  <ListItemIconStyled {...props}>
    <BadgeStyled badgeContent={badge}>{children}</BadgeStyled>
  </ListItemIconStyled>
);

export default ViewBadge;