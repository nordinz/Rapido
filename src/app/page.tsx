import HeroBot from "@/components/HeroBot";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      {/* <Video /> */}
      <Video />

      <section className="border-t border-b border-gray-400 bg-background ">
        <HeroBot />
      </section>
    </>
  );
}
