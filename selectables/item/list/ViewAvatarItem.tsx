import React from 'react';
import ViewAvatar from './ViewAvatar';
import { ViewIconItemProps } from './ViewIconItem';
import ViewText from './ViewText';
import { ListItemStyled } from './ViewTextItem';

export interface ListOption {
  icon: React.ReactElement;
  primary: string;
  secondary?: string;
}

const ListViewItem = ({ badge, icon, primary, secondary, slim, ...props }: ViewIconItemProps) => {
  return (
    <ListItemStyled {...props}>
      <ViewAvatar>{icon}</ViewAvatar>
      {!slim && (
        <>
          <ViewText primary={primary} secondary={secondary} />
          {typeof badge !== 'undefined' && (
            <ViewAvatar>{badge}</ViewAvatar>
          )}
        </>
      )}
    </ListItemStyled>
  );
};

export default ListViewItem;
