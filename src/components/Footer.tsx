import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      © 2020{" "}
      <a
        className="footer--credit_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://asukachikaru.com"
      >
        asukachikaru.com
      </a>
    </footer>
  );
};

export default Footer;
