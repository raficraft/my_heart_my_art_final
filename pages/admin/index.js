import React, { useContext, useRef, useState } from "react";
import withAuth from "../../context/withAuth/WithAuth";
import Head from "next/head";

import L from "./../../Sass/Layout.module.scss";
import G from "./../../Sass/abstract/global.module.scss";

import S from "./Admin.module.scss";

import Admin_header, { TabContent } from "./header/Admin_header";
import { DashboardContext } from "../../context/Admin/DashboardContext";

function DashBoard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={L.wrapper}>
        <Admin_header></Admin_header>
        <section className={`${G.primary_content}`}>
          <div className={` ${S.wrapper}`}>
            <TabContent></TabContent>
            <aside>
              <h1>ASIDE CONTAINER</h1>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default withAuth(DashBoard);
