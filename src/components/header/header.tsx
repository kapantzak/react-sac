import React, { FunctionComponent } from "react";
import "./header.css";

export interface IHeaderProps {
  title: string;
}

const Header: FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  return <header>{props.title}</header>;
};

export default Header;
