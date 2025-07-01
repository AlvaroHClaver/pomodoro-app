import { Box, Dialog, Flex, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";
import close_icon from "../../assets/close_icon.svg";
import type { DefaultTheme } from "@/themes/themes";
import { useTheme } from "@emotion/react";
import { GenericTimeInput } from "../timeInput/GenericTimeInput";

export const SettingsModal = () => {
  const theme = useTheme() as DefaultTheme;

  const [open, setOpen] = useState(true);
  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement={"center"}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Box
            width={"80%"}
            height={"80vh"}
            backgroundColor={"white"}
            borderRadius={"15px"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"20px"}
              borderBottom={"0.5px solid #979797"}
            >
              <Text
                color={theme.primaryFontColor}
                fontSize={"28px"}
                fontWeight="700"
              >
                Settings
              </Text>
              <img src={close_icon} alt="close" />
            </Flex>
            <Flex width={"100%"} marginTop={"10px"} flexDirection={"column"}>
              <Text
                fontSize={"11px"}
                letterSpacing={"4.231px"}
                textAlign={"center"}
                color={theme.primaryFontColor}
                fontWeight={700}
                width={"100%"}
              >
                TIME (MINUTES)
              </Text>
              <Flex marginTop={5} flexDirection={"column"} gap={"8px"}>
                <GenericTimeInput label="pomodoro" standard={25} />
                <GenericTimeInput label="short break" standard={5} />
                <GenericTimeInput label="long break" standard={15} />
              </Flex>
            </Flex>
          </Box>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
