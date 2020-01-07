import React from "react";
import { Link } from "@reach/router";

type Props = {
  archiveType: string;
  groupName: string;
};

const ArchiveLink = (props: Props) => {
  const linkTextContent =
    props.archiveType === "year"
      ? `CHIKA MUSIC AWARDS ${props.groupName}`
      : "CATEGORY ARCHIVE";
  return (
    <Link
      to={`/${props.archiveType}=${props.groupName}`}
      className="award--archive_link"
    >
      {linkTextContent}
    </Link>
  );
};

export default ArchiveLink;
