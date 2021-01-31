import React from "react";
import { PageHeader } from "antd";

export default function Header() {
  return (
    <a href="https://www.g2entgroup.com" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title= "📺 G2 Entertainment Group Presents..."
        subTitle="We don't just make entertainment. We make entertainment better."
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
