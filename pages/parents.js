import { useRouter } from "next/router";
import CTA from "../components/cta";
import Feedback from "../components/feedback";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import RegisterHero from "../components/register-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useHashFragment } from "../hooks/useHashFragment";
import { getClasses, getNavigation, getTestimonials } from "../lib/api";

export default function Parents({ testimonials, classes, navigations }) {
  const router = useRouter();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <RegisterHero />
      <RegisterForm id="register" tab={tab} classes={classes} />
      <AnimationRevealPage>
        <Feedback id="story" testimonials={testimonials.slice(0, 4)} />
        <CTA hasButton={false} />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const testimonials = (await getTestimonials(locale)) ?? [];
  const classes = (await getClasses()) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { testimonials, classes, navigations },
    revalidate: 1,
  };
}
