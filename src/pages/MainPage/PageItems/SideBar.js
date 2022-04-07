import { SideBarDiv, SideButton } from "../../../styled/styled";

export const SideBar = () => {
    return (
        <SideBarDiv>
            <SideButton>Skills</SideButton>
            <SideButton>Education</SideButton>
            <SideButton>Experience</SideButton>
            <SideButton>Miscellaneous</SideButton>
        </SideBarDiv>
    )
}