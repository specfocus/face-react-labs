import React from 'react';
import ViewList, { ViewListProps } from './ViewList';
import { ViewSection } from './ViewSection';

export interface ViewProps extends Pick<ViewListProps, 'badges' | 'divider' | 'onSelect' | 'selection' | 'slim' | 'variant'> {
  sections: ViewSection[];
}

const View = ({
  badges,
  divider,
  sections,
  selection,
  slim,
  onSelect,
  variant
}: ViewProps) => {
  return (
    <>
      {sections.map(
        ({ options, subheader }, index) => (
          <ViewList
            key={String(index)}
            badges={badges}
            divider={divider}
            subheader={subheader}
            options={options}
            slim={slim}
            selection={selection}
            onSelect={onSelect}
            variant={variant}
          />
        )
      )}
    </>
  );
};

export default View;
