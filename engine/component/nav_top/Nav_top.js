import Link from "next/link";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQueries";
import S from "./Nav_top.module.scss";

import {
  Article_icon,
  Email_icon,
  Heart_icon,
  Home_icon,
  ImageGallery,
  Youtube_icon,
} from "../../../assets/icons/Icon_svg.js";

export default function Nav_top() {
  const isMedium = useMediaQuery("(min-width: 578px) and (max-width :767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  return (
    <>
      {(isTablet || isMedium) && (
        <nav className={S.nav_top}>
          {(isTablet || isMedium) && (
            <>
              <Link href="/blog">
                <a>
                  <Article_icon />
                  Blog
                </a>
              </Link>
              <Link href="/videos">
                <a>
                  <Youtube_icon />
                  Videos
                </a>
              </Link>
              <Link href="/art">
                <a>
                  <ImageGallery />
                  My art
                </a>
              </Link>
            </>
          )}
          {isDesktop && (
            <>
              <Link href="/heart">
                <a>
                  <Heart_icon />
                  My heart
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <Email_icon />
                  Contact
                </a>
              </Link>
            </>
          )}
        </nav>
      )}
    </>
  );
}
