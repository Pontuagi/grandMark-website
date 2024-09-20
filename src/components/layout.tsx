import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export default function Layout({  children }: Readonly<{  children: React.ReactNode; }>) {
  return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
  );
}
