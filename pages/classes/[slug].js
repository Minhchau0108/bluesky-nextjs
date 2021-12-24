import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getAllSchoolDivisions, getSchoolDivision } from "../../lib/api";
import ClassHero from "../../components/class-hero";
import Reason from "../../components/reason";
import Stats from "../../components/stats";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import CTA from "../../components/cta";
import DivisionTeam from "../../components/division-team";

const Class = ({ division }) => {
  const router = useRouter();
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <ClassHero
            name={division?.name}
            summary={division?.summary}
            coverImage={division?.coverImage?.url}
            description={division?.description}
          />
          <AnimationRevealPage>
            <Reason reasons={division?.reasonsCollection?.items} />
            <Stats stats={division?.statsCollection?.items} />
            <DivisionTeam teachers={division?.teachersCollection?.items} />
            <CTA />
          </AnimationRevealPage>
        </>
      )}
    </Layout>
  );
};

export default Class;
export async function getStaticProps({ params }) {
  const data = await getSchoolDivision(params.slug);

  return {
    props: {
      division: data ?? null,
    },
  };
}

export async function getStaticPaths() {
  const divisions = await getAllSchoolDivisions();

  return {
    paths: divisions?.map(({ slug }) => `/classes/${slug}`) ?? [],
    fallback: true,
  };
}
