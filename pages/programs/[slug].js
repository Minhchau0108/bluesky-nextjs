import Layout from "../../components/layout";
import { useRouter } from "next/router";
import {
  getAllSchoolDivisions,
  getNavigation,
  getSchoolDivision,
} from "../../lib/api";
import ClassHero from "../../components/class-hero";
import Reason from "../../components/reason";
import Stats from "../../components/stats";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import CTA from "../../components/cta";
import DivisionTeam from "../../components/division-team";
import NotFoundPage from "../404";
import CarouselImages from "../../components/carousel-images";

const Class = ({ division, navigations }) => {
  const router = useRouter();
  if (!router.isFallback && !division) {
    return <NotFoundPage />;
  }
  return (
    <Layout navigations={navigations}>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <ClassHero
            name={division?.name}
            slug={division?.slug}
            summary={division?.summary}
            coverImage={division?.coverImage?.url}
            description={division?.description}
          />
          <AnimationRevealPage>
            <Reason
              id="viewmore"
              reasons={division?.reasonsCollection?.items}
              slug={division?.slug}
            />
            <Stats
              stats={division?.statsCollection?.items}
              slug={division?.slug}
            />
            <DivisionTeam
              teachers={division?.teachersCollection?.items?.filter((n) =>
                n
                  ? console.error(
                      "null in teachersCollection in ",
                      division.name,
                      {
                        items: division.teachersCollection.items,
                      }
                    )
                  : n
              )}
              slug={division?.slug}
            />
            <CarouselImages classes={division?.classesCollection?.items} />
            <CTA />
          </AnimationRevealPage>
        </>
      )}
    </Layout>
  );
};

export default Class;
export async function getStaticProps({ params, locale }) {
  const data = await getSchoolDivision(params.slug, locale);
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: {
      division: data ?? null,
      navigations,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const divisions = await getAllSchoolDivisions();

  return {
    paths: divisions?.map(({ slug }) => `/programs/${slug}`) ?? [],
    fallback: true,
  };
}
