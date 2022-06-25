
import List, { ListProps } from '@mui/material/List';
import React, { useMemo } from 'react';
import { Option } from '../../Option';
import ViewAvatarItem from './ViewAvatarItem';
import ViewIconItem, { ViewIconItemProps } from './ViewIconItem';
import { ViewSection } from './ViewSection';
import ViewSubheader from './ViewSubheader';
import ViewTextItem from './ViewTextItem';

export interface ViewListProps extends ViewSection, Omit<ListProps, 'children' | 'onSelect' | 'subheader'> {
  badges?: Record<string, number>;
  divider?: 'all' | 'last' | 'none';
  selection: string[];
  slim?: boolean;
  variant?: 'avatar' | 'icon' | 'text';
  onSelect: (key: string, option: Option) => void;
}

const VIEW_ITEM_COMPONENT: Record<Required<ViewListProps>['variant'], React.FunctionComponent<ViewIconItemProps>> = {
  avatar: ViewAvatarItem,
  icon: ViewIconItem,
  text: ViewTextItem
};

const ViewList = ({ badges, divider, options, subheader, selection, slim, variant, onSelect, ...props }: ViewListProps) => {
  const { [variant || 'text']: ViewItem } = VIEW_ITEM_COMPONENT;
  const handlers = useMemo(
    () => Object.entries(options)
      .reduce<Record<string, () => void>>(
        (acc, [key, option]) => Object.assign(acc, { [key]: () => onSelect(key, option) }),
        {}
      ),
    [options]
  );
  const entries = Object.entries(options);
  const last = entries.length - 1;
  return (
    <List {...props}>
      {subheader && (
        <ViewSubheader>{subheader}</ViewSubheader>
      )}
      {entries.map(
        ([key, { icon, primary, secondary }], index) => (
          <ViewItem
            badge={badges && badges[key]}
            icon={icon}
            key={key}
            onClick={handlers[key]}
            primary={primary}
            secondary={secondary}
            selected={selection.includes(key)}
            slim={slim}
            divider={divider === 'all' || (divider === 'last' && index === last)}
          />
        )
      )}
    </List>
  );
};

export default ViewList;
