import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadscrum = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <>
      {pathnames.length > 0 && <Link to="/">Home</Link> }
      {pathnames.map((path, index) => {
        const isLast = index===pathnames.length-1
        return isLast ? <span key={index}>/{path}</span>:<Link  key={index} to={`/${path}`}>/{path}</Link>;
      })}
    </>
  );
};

export default Breadscrum;
