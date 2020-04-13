import React, { FunctionComponent } from "react";
import { ISacOptHeader } from "../sac/sac";
import "./header.css";

export interface IHeaderProps {
  headerOptions: ISacOptHeader;
}

const Header: FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  return <header>{props.headerOptions.modalTitle}</header>;
};

export default Header;
