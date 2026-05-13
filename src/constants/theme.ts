import { Platform } from "react-native";

export const palette = {
  primary: {
    main: "#7F4A30",
    light: "#C1836C",
  },

  background: {
    base: "#F9EDD9",
    white: "#FEFEFE",
    accentSoft: "#FBD197",
  },

  text: {
    primary: "#070706",
    secondary: "#C8BDB5",
  },

  accent: {
    strong: "#F29B70",
  },

  additional: {
    red: "#F5665A",
  },
};

export const Colors = {
  light: {
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
      inverse: palette.background.white,
    },

    background: {
      primary: palette.background.base,
      card: palette.background.white,
      accent: palette.background.accentSoft,
      input: "#F1F1F1",
    },

    button: {
      primary: palette.primary.main,
      primaryText: palette.background.white,
      primaryPressed: "#9D7764",
      disabled: palette.background.base,
      secondary: palette.primary.light,
    },

    border: {
      default: "#E5E5E5",
    },

    brand: {
      primary: palette.primary.main,
    },

    status: {
      error: palette.additional.red,
    },

    icon: {
      default: palette.text.secondary,
      active: palette.accent.strong,
    },

    // Добавлено: теперь theme.colors.accent.strong работает
    // везде без прямого импорта palette в компонентах
    accent: {
      strong: palette.accent.strong,
    },
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const theme = {
  colors: Colors.light,
  fonts: Fonts,
};
