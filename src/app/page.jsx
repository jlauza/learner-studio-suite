import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import HomeNavbar from "@/components/home-navbar";
import Pricing from "@/components/pricing";
import ContactSales from "@/components/contact-sales";
import Footer from "@/components/footer";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <HomeNavbar session={session} />
      <Pricing />
      <ContactSales />
      <Footer />
    </>
  );
}
