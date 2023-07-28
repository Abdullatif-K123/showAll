import React from "react";
import Image from "next/image";
import apecGaz from "../public/assets/svg/apecGaz.svg";
import apecWhite from "../public/assets/svg/apeWhite.svg";
import ecoGaz from "../public/assets/svg/ecoGaz.svg";
import apGz from "../public/assets/svg/apGaz.svg";
import Link from "next/link";
const Main = () => {
  return (
    <div className="homeMain">
      <Link href="https://personal-apec.vercel.app/" className="box">
        <Image src={apecWhite} width={145} height={100} />
      </Link>
      <Link href="https://apec-gaz.vercel.app/" className="box">
        <Image src={apecGaz} width={165} height={120} />
      </Link>
      <Link href="https://ap-gaz.vercel.app/" className="box">
        <Image src={apGz} width={145} height={100} />
      </Link>
      <Link href="https://eco-gaz-f8zr.vercel.app/" className="box">
        <Image src={ecoGaz} width={145} height={100} />
      </Link>
    </div>
  );
};

export default Main;
