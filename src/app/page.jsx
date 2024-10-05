import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import HomeNavbar from "@/components/home-navbar";
import MarketingHighlight from "@/components/marketing-highlight";
import Footer from "@/components/footer";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <HomeNavbar session={session} />
      <MarketingHighlight />
      <Footer />
    </>
  );
}
