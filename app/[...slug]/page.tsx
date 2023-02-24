import { allDocuments } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";


export async function generateStaticParams(): Promise<any>{
    return allDocuments.map(({ slug }) => ({
      slug: slug.split('/'),
    }));
  }

export default function FirstLevel({ params }:any) {    
    const page = allDocuments.find(({ slug }) => slug === params.slug.join('/'));
    const MDXContent = useMDXComponent(page.body.code);

  return (
    <div className="bg-[#3a5eff]">
      <div className=" flex p-4 flex-wrap justify-evenly">
        <MDXContent
        components={{
        p: (props) => <p className="text-[black] text-justify mt-2 p-4" {...props} />,
        h1: (props) => <h1 className="text-2xl font-bold text-center mt-4 p-4" {...props} />,}}/>
      </div>
    </div>
  );
}
