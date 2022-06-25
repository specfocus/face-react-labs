import React from 'react';
import { Option } from '../../Option';
import ViewBadge from './ViewBadge';
import ViewIcon from './ViewIcon';
import ViewText from './ViewText';
import { ListItemStyled, ViewTextItemProps } from './ViewTextItem';

export interface ViewIconItemProps extends Pick<Option, 'icon'>, ViewTextItemProps {
  badge: number;
}

const ViewIconItem = ({ badge, icon, primary, secondary, slim, ...props }: ViewIconItemProps) => {
  console.log({ badge });
  return (
    <ListItemStyled {...props}>
      {typeof badge === 'number' ? (
        <ViewBadge badge={badge}>{icon}</ViewBadge>
      ) : (
        <ViewIcon>{icon}</ViewIcon>
      )}
      {!slim && (
        <ViewText primary={primary} secondary={secondary} />
      )}
    </ListItemStyled>
  );
};

export default ViewIconItem;
