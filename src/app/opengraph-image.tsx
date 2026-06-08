import { ImageResponse } from "next/og";

export const alt =
  "ContextClean local-first log cleaner and AI debugging toolkit";
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
          justifyContent: "space-between",
          padding: 70,
          color: "#f5f5f4",
          background:
            "radial-gradient(circle at 15% 10%, rgba(52,211,153,.28), transparent 34%), radial-gradient(circle at 90% 85%, rgba(251,191,36,.18), transparent 30%), #0c0a09",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(52,211,153,.5)",
              borderRadius: 22,
              color: "#a7f3d0",
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            CC
          </div>
          <div style={{ display: "flex", fontSize: 31, fontWeight: 700 }}>
            ContextClean
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: 68,
              lineHeight: 1.05,
              letterSpacing: -3,
              fontWeight: 700,
            }}
          >
            Better evidence for AI-assisted debugging.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              color: "#d6d3d1",
              fontSize: 28,
              lineHeight: 1.4,
            }}
          >
            Clean logs locally, inspect prompt quality, practice diagnostic
            decisions, and learn from AI coding failure patterns.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, color: "#a7f3d0", fontSize: 22 }}>
          <div style={{ display: "flex" }}>Log Cleaner</div>
          <div style={{ display: "flex", color: "#78716c" }}>·</div>
          <div style={{ display: "flex" }}>Prompt Clinic</div>
          <div style={{ display: "flex", color: "#78716c" }}>·</div>
          <div style={{ display: "flex" }}>AI Field Notes</div>
        </div>
      </div>
    ),
    size
  );
}
