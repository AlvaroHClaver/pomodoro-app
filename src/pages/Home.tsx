/** @jsxImportSource @emotion/react */
import type { DefaultTheme } from "@/themes/themes";
import { SettingsModal } from "../components/modals/SettingsModal";
import { css, useTheme } from "@emotion/react";

export const Home = () => {
  const theme = useTheme() as DefaultTheme;
  return (
    <main
      css={css`
        background: ${theme.background};
      `}
    >
      <SettingsModal />
    </main>
  );
};
