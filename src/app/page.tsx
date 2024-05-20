import Content from "@/components/Content";
import Hero from "@/components/Hero";
import PaginationSection from "@/components/Pagination";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <hr className="w-full h-[3px] bg-gray-500" />
      <Content />
      <PaginationSection />
    </main>
  );
}
