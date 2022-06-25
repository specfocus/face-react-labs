import Avatar from '@mui/material/Avatar';
import ListItemAvatar, { ListItemAvatarProps } from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';
import React from 'react';

const AvatarStyled = styled(Avatar)(() => ({
  // backgroundColor: 'inherit',
  color: 'inherit'
}));

const ListItemAvatarStyled = styled(ListItemAvatar)(() => ({
  backgroundColor: 'inherit',
  color: 'inherit'
}));

const ViewAvatar = ({ children, ...props }: ListItemAvatarProps) => (
  <ListItemAvatarStyled {...props}>
    <AvatarStyled>{typeof children === 'string' ? children.substring(0, 1) : children}</AvatarStyled>
  </ListItemAvatarStyled>
);

export default ViewAvatar;
