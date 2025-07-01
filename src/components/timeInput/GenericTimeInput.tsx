import type { DefaultTheme } from "@/themes/themes";
import { Flex, NumberInput, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

interface Props {
  label: string;
  standard: number;
}

export const GenericTimeInput: React.FC<Props> = ({ label, standard }) => {
  const theme = useTheme() as DefaultTheme;
  return (
    <Flex alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
      <Text
        fontSize={12}
        fontWeight={700}
        color={theme.primaryFontColor}
        opacity={0.4}
      >
        {label}{" "}
      </Text>
      <NumberInput.Root defaultValue={standard.toString()}>
        <NumberInput.Control />
        <NumberInput.Input
          fontSize={13}
          fontWeight={700}
          color={theme.primaryFontColor}
          letterSpacing={5}
          padding={5}
          width={140}
          backgroundColor={"#EFF1FA"}
          borderRadius={10}
        />
      </NumberInput.Root>
    </Flex>
  );
};
