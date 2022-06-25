
import ListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ListSubheaderStyled = styled(ListSubheader)(
  ({ theme }) => ({
    display: 'block',
    justifyContent: 'flex-start',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    overflow: 'hidden',
    paddingLeft: 0,
    paddingRight: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  })
);

const ViewSubheader = ({ children, ...props }: ListSubheaderProps) => (
  <ListSubheaderStyled {...props} inset>
    <Typography variant="overline">{children}</Typography>
  </ListSubheaderStyled>
);

export default ViewSubheader;
