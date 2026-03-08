import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Our Parish",
  description: "Learn about St. Mary's Orthodox Christian Church in Endicott, NY.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title="Our Parish" subtitle="A warm Orthodox community in the Southern Tier of New York" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          St. Mary&apos;s Orthodox Christian Church was founded to serve the Carpatho-Russian Orthodox
          community of the Endicott area. Today, our parish of approximately 250 families continues
          to worship in the ancient Orthodox Christian tradition, guided by the teachings of the
          Holy Apostles and Church Fathers.
        </p>
        <p>
          We are a community united by our common faith, our love of Orthodox worship, and our
          commitment to welcoming all people who seek to know God through the Orthodox Church.
          Whether you are a lifelong Orthodox Christian or new to the faith, we invite you to
          join us.
        </p>
        <h2>Our Diocese</h2>
        <p>
          St. Mary&apos;s is a parish of the American Carpatho-Russian Orthodox Diocese (ACROD),
          under the omophor of Metropolitan Gregory of Nyssa. The diocese was established to
          serve Carpatho-Russian immigrants and their descendants in North America, and today
          includes parishes throughout the United States.
        </p>
      </div>
    </>
  );
}
