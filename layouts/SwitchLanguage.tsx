import Language from '@mui/icons-material/Language';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem, { type MenuItemProps } from '@mui/material/MenuItem';
import { useLocaleState } from '@specfocus/view-focus.i18n/translations/useLocaleState';
import { useUserMenu } from '@specfocus/view-focus.mui/layouts/useUserMenu';
import { forwardRef } from 'react';
import { useTranslate } from '@specfocus/view-focus.i18n/translations/useTranslate';

export const SwitchLanguage = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const [locale, setLocale] = useLocaleState();
    const { onClose } = useUserMenu();
    const t = useTranslate();
    return (
      <MenuItem
        ref={ref}
        {...props}
        sx={{ color: 'text.secondary' }}
        onClick={event => {
          setLocale(locale === 'en' ? 'fr' : 'en');
          onClose();
        }}
      >
        <ListItemIcon sx={{ minWidth: 5 }}>
          <Language />
        </ListItemIcon>
        {t('Switch Language')}
      </MenuItem>
    );
  }
);