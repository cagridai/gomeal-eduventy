import Provider from "@/redux/Provider";
import { LeftSideBar, RightSideBar } from "@/components/Layot/Sidebar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
});

export const metadata = {
  title: "GoMeal",
  description: "Your best food delivery service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} mainContainer`}>
        <Provider>
          <LeftSideBar className={"leftSide"} />
          <div className={"content"}>{children}</div>
          <RightSideBar />
        </Provider>
      </body>
    </html>
  );
}
