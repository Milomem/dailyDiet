import { TextInput, TextInputProps } from "react-native";
import { Container, InputContainerTypeStyleProps, InputText, InputTypeStyleProps, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
    title: string;
    type?: InputTypeStyleProps;
    size?: InputContainerTypeStyleProps;
    inputRef?: React.RefObject<TextInput>;
  }

export function Input({ title, type = 'SMALL', size='BIG', inputRef ,...rest } : Props) {
    const { COLORS } = useTheme();
    return (
        <Container size={size}>
            <Title>{title}</Title>
            <InputText
              ref={inputRef}
              type={type}
              {...rest} />
        </Container>
    )
}