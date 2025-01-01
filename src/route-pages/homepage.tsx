import Hero from "@/components/hero/hero";
import Collections from "@/components/home/collections";
import Jewelry from "@/components/home/jewelry";
import Motto from "@/components/home/motto";
import NewIn from "@/components/home/newIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewIn />
      <Jewelry />
      <Motto />
      <Collections />
    </>
  );
}
