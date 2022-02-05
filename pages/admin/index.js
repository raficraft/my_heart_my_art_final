import React from "react";
import withAuth from "../../context/withAuth/WithAuth";
import Head from "next/head";

import S from "./Admin.module.scss";

import Admin_header, { TabContent } from "./header/Admin_header";

function DashBoard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="My heart in my Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Admin_header></Admin_header>
        <section className="primary_content">
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
