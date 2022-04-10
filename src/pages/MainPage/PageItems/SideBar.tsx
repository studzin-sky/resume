import { Component, SideButton } from "../../../styled/styled";

export const SideBar = () => {
    return (
        <Component className="sideBarDiv">
            <SideButton>Skills</SideButton>
            <SideButton>Education</SideButton>
            <SideButton>Experience</SideButton>
            <SideButton>Miscellaneous</SideButton>
        </Component>
    )
}