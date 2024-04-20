import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'
import { Container, ButtonIconTypeStyleProps, Icon, Title } from "./styles";


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'primary', title, ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name={icon} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}