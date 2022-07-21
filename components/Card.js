import React from "react";
import styles from "./styles/Card.module.scss";
import { Card } from "antd";

const { Meta } = Card;

function Card2() {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

export default Card2;
