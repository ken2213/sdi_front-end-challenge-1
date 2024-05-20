import Content from "@/components/Content";
import Hero from "@/components/Hero";
import PaginationSection from "@/components/Pagination";

export default function Home({ 
    params,
}: {
    params: { articleId: string }
}) {

    return (
        <main className="w-full h-screen flex justify-center">
        <div className="w-full sm:w-[98%] md:w-[97%] lg:w-[80%] xl:w-[1100px]">
            <Hero articleId={params.articleId} />
            <hr className="w-full h-[3px] bg-gray-500 my-1" />
            <Content articleId={params.articleId} />
            <PaginationSection />
        </div>
        </main>
    );
}