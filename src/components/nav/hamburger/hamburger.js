import React from "react"
import {
    HamburgerContainer,
    Bar,
    HamburgerMenu,
    Bar1,
    Bar2,
    MenuContainer,
    MenuContentContainer,
    HambHeaderLink,
    HambHeaderPage,
    HambLinkContainer
} from "./styled"

const Hamburger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return <HamburgerContainer onClick={toggle}>
        {renderStep(isOpen)}
    </HamburgerContainer>  
}

function renderStep(isOpen) {
    if (!isOpen) {
        return <HamburgerMenu className="d-block d-md-none">
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </HamburgerMenu>
    } else {
        return <MenuContainer className="d-flex d-md-none">
            <HamburgerMenu>
                <Bar1></Bar1>
                <Bar2></Bar2>
            </HamburgerMenu>
            <MenuContentContainer>
              <HambLinkContainer>
                <HambHeaderLink to="/" activeStyle={{color: "white"}} ><HambHeaderPage>Home</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/whoWeAre"activeStyle={{color: "white"}}><HambHeaderPage>Who We Are</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/whatWeDo" activeStyle={{color: "white"}}><HambHeaderPage>What We Do</HambHeaderPage></HambHeaderLink>
                <HambHeaderLink to="/contact" activeStyle={{color: "white"}}><HambHeaderPage>Contact</HambHeaderPage></HambHeaderLink>
              </HambLinkContainer>
            </MenuContentContainer>
        </MenuContainer>
    }
}

export default Hamburger