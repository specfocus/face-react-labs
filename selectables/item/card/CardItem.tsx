import { Option } from '../../Option';
import ViewIcon from '../list/ViewIcon';
import ViewText from '../list/ViewText';
import { ListItemStyled, ViewTextItemProps } from '../list/ViewTextItem';

export interface ViewIconItemProps extends Pick<Option, 'icon'>, ViewTextItemProps {
}

const CardItem = ({ icon, primary, secondary, slim, ...props }: ViewIconItemProps) => {
  return (
    <ListItemStyled {...props}>
      <ViewIcon>{icon}</ViewIcon>
      {!slim && (
        <ViewText primary={primary} secondary={secondary} />
      )}
    </ListItemStyled>
  );
};

export default CardItem;
