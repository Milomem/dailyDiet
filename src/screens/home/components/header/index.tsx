import { Container, Logo, UserProfile } from "./styles";

import logoImg from '@assets/logo.png'
import userProfile from '@assets/profile.png'

export function Header() {
    return (
        <Container>
            <Logo source={logoImg}/>
            <UserProfile source={userProfile}/>
        </Container>
    )
}