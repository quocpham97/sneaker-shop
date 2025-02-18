import React from "react";
import "../index.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Sneaker Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <NavBar totalItems={0} />
          {children}
        </div>
      </body>
    </html>
  );
}
