import Provider from "@/redux/Provider";
import { LeftSideBar, RightSideBar } from "@/components/Layot/Sidebar";
import { Poppins } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/Layot/content/SearchBar";
import Banner from "@/components/Layot/content/Banner";

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
          <div className={"content"}>
            <div className={"main"}>
              <header>
                <SearchBar />
              </header>

              <div>
                <Banner />
              </div>

              {children}
            </div>
          </div>
          <RightSideBar />
        </Provider>
      </body>
    </html>
  );
}
