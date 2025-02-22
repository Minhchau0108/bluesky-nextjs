import Layout from "../components/layout";
import ScheduleHero from "../components/schedule-hero";
import CTA from "../components/cta";
import { getClasses, getNavigation } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Schedules = ({ classes, navigations }) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <Layout navigations={navigations}>
      <img
        src="/images/schedules.jpg"
        alt="hero"
        className="w-full mt-1 max-h-[620px] object-cover"
        style={{
          objectPosition: "0 90%",
        }}
      />
      <AnimationRevealPage>
        <ScheduleHero classes={classes} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
};

export default Schedules;
export async function getStaticProps({ locale }) {
  const classes = (await getClasses()) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { classes, navigations },
    revalidate: 1,
  };
}
