import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

function HeroButtons() {
  const { isDarkTheme } = useThemeContext();

  return (
    <>
      <a
        className={
          "btn mb-4 sm:mb-0 font-bold py-4 bg-black text-white font-bold hover:bg-gray-900 hover:text-white uppercase border border-solid w-full sm:w-auto rounded"
        }
        href={useBaseUrl("docs/")}
      >
        点击开团
      </a>
      <a
        className={
          "btn px-12 py-4 text-white font-bold uppercase bg-blue-600 hover:text-white hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:ml-4"
        }
        href="https://wp.fengtuan.cloud"
        rel="noopener noreferrer"
        target="_blank"
      >
        干货
      </a>
    </>
  );
}

export default HeroButtons;
