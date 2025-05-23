import { Typography } from "antd";

interface Props {
  text: string;
}

function EllipsesText({ text }: Props) {
  return (
    <Typography
      title={text}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        whiteSpace: "normal",
      }}
    >
      {text}
    </Typography>
  );
}

export default EllipsesText;
