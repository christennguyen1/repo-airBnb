import React from "react";
import NavHeader from "../components/NavHeader/NavHeader";


export default function Layout({ Component }) {
  return (
    <div>
      <NavHeader />
      <Component />
    </div>
  );
}
