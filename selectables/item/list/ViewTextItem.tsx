import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import React from 'react';
import { Option } from '../../Option';
import ViewAvatar from './ViewAvatar';
import ViewText from './ViewText';

export const style = ({ theme }: { theme: Theme; }) => {
  const backgroundColor = theme.palette.mode !== 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark;
  return {
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
    }
  };
};

export const ListItemStyled = styled<React.FunctionComponent<ListItemProps>>(ListItem)(style);

export interface ViewTextItemProps extends Omit<Option, 'icon'>, Omit<ListItemProps, 'children' | 'className' | 'style'> {
  slim?: boolean;
}

const ViewTextItem = ({ primary, secondary, slim, ...props }: ViewTextItemProps) => {
  return (
    <ListItemStyled {...props}>
      {slim ? (
        <ViewAvatar>{primary}</ViewAvatar>
      ) : (
        <ViewText primary={primary} secondary={secondary} />
      )}
    </ListItemStyled>
  );
};

export default ViewTextItem;
