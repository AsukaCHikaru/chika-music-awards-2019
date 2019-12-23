import React from "react";

type Props = {
  archiveType: string;
  subKeyword: string;
};

const ArchiveLink = (props: Props) => {
  const linkTextContent =
    props.archiveType === "year"
      ? `CHIKA MUSIC AWARDS　${props.subKeyword}`
      : "CATEGORY ARCHIVE";
  return (
    <a href="/" className="award--archive_link">
      {linkTextContent}
    </a>
  );
};

export default ArchiveLink;
