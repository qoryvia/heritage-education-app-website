import { ImageResponse } from "next/og";

export const alt = "Heritage International Public School, Kasia, Kushinagar";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#002147",
          color: "white",
        }}
      >
        <div style={{ fontSize: 30, color: "#e5b84b" }}>
          HERITAGE INTERNATIONAL PUBLIC SCHOOL
        </div>
        <div style={{ marginTop: 28, fontSize: 64, fontWeight: 700 }}>
          Learning for Life
        </div>
        <div style={{ marginTop: 20, fontSize: 32 }}>
          Kasia, Kushinagar
        </div>
      </div>
    ),
    size,
  );
}