import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { church } from "@/data/church";

export const metadata = buildMetadata({
  title: "Pastor's Message",
  description: "A message from our pastor at St. Mary's Orthodox Christian Church.",
  path: "/about/pastors-message",
});

export default function PastorsMessagePage() {
  return (
    <>
      <PageHero title="A Message from the Pastor" subtitle={`Welcome from ${church.pastor}`} />
      <div className="py-8 prose prose-lg max-w-none">
        <p className="text-xl text-church-burgundy font-heading italic">
          &ldquo;Hello and welcome! We&apos;re glad that you have found us!&rdquo;
        </p>
        <p>
          Dear friends,
        </p>
        <p>
          Let us extend a personal welcome to St. Mary&apos;s Church. We are a loving family and a
          devoted church, and our arms and doors are open to any and all who are interested in
          visiting.
        </p>
        <p>
          Whether you are curious about Orthodox Christianity, interested in the heritage of the
          Carpatho-Rusyn people, or simply searching for a new Church family to be a part of &mdash;
          come and visit us. You will find a warm welcome here.
        </p>
        <p>
          If you have any questions or concerns before visiting our Church, please feel free to
          contact us. Once again, welcome &mdash; and God bless you. We hope to see you soon!
        </p>
        <p>
          In Christ,<br />
          <em>{church.pastor}</em><br />
          Pastor, St. Mary&apos;s Orthodox Christian Church
        </p>
      </div>
    </>
  );
}
