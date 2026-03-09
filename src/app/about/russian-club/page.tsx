import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Russian Club",
  description: "The American Carpatho Russian Citizens Club at St. Mary's Orthodox Christian Church, Endicott, NY.",
  path: "/about/russian-club",
});

export default function RussianClubPage() {
  return (
    <>
      <PageHero title="ACRC Russian Club" subtitle="American Carpatho Russian Citizens Club" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The <strong>American Carpatho Russian Citizens (ACRC) Club</strong> is a civic and cultural
          organization that has been part of our parish community since 1936. Membership is open to
          all &mdash; you do not need to be a parishioner to join.
        </p>

        <h2>Our Mission</h2>
        <p>
          The ACRC Club exists to promote and protect the interests of the American Carpatho-Russian
          Orthodox community, foster civic participation, and advance cultural understanding of
          Carpatho-Rusyn heritage in America.
        </p>

        <h2>Activities</h2>
        <ul>
          <li>Community cultural events and celebrations</li>
          <li>Volunteer service and civic engagement</li>
          <li>Venue rental for private events (graduations, anniversaries, birthdays, and more)</li>
          <li>Support for parish fundraising and bake sales</li>
        </ul>

        <h2>Contact the Club</h2>
        <p>
          <strong>President:</strong> Gary Kaschak<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:acrc.club.1936@gmail.com">acrc.club.1936@gmail.com</a><br />
          <strong>Facebook:</strong>{" "}
          <a
            href="https://www.facebook.com/Russian-Club-172292672811837/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACRC Russian Club on Facebook
          </a>
        </p>
        <p>
          For hall rental inquiries or to learn more about upcoming events, please reach out via
          email or contact the parish office.
        </p>
      </div>
    </>
  );
}
