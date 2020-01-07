import React from "react";
import { Link } from "@reach/router";

type Props = {
  archiveType: string;
  subKeyword: string;
};

const ArchiveLink = (props: Props) => {
  const linkTextContent =
    props.archiveType === "year"
      ? `CHIKA MUSIC AWARDS ${props.subKeyword}`
      : "CATEGORY ARCHIVE";
  return (
    <Link
      to={`/${props.archiveType}=${props.subKeyword}`}
      className="award--archive_link"
    >
      {linkTextContent}
    </Link>
  );
};

export default ArchiveLink;
