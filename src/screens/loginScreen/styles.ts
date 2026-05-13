import { theme } from '@/src/constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 32,
  },

  logoWrapper: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 130,
    height: 130,
  },

  title: {
    // fontWeight берём из варианта h1 в Text/styles.ts — '700'
    // НЕ пишем 700 числом — это ошибка типов в RN StyleSheet
    color: theme.colors.brand.primary,
    marginBottom: 24,
  },

  // Строка "Запомнить меня" + "Забыли пароль?"
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  rememberLabel: {
    marginLeft: 8,
    flex: 1, // занимает свободное место, "Забыли пароль?" прижимается вправо
  },
  forgotBtn: {
    // hitSlop увеличивает зону нажатия без изменения внешнего вида
  },

  loginBtn: {
    marginBottom: 0,
  },

  // Блок "Нет аккаунта? Создать" прибит к низу экрана
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footerText: {
    color: theme.colors.text.primary,
  },
});
