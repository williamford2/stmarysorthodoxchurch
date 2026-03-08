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
      <PageHero title="Pastor's Message" subtitle={`A word from ${church.pastor}`} />
      <div className="py-8 prose prose-lg max-w-none">
        <p className="text-xl text-church-burgundy font-heading italic">
          &ldquo;Christ is in our midst!&rdquo;
        </p>
        <p>
          Dear brothers and sisters in Christ,
        </p>
        <p>
          Welcome to St. Mary&apos;s Orthodox Christian Church. It is a joy to serve as your pastor
          and to worship alongside you in this holy place. The Orthodox Church offers the fullness
          of the Christian faith &mdash; unchanged and unaltered since the time of the Holy Apostles &mdash;
          and we are blessed to share this great inheritance together.
        </p>
        <p>
          If you are new to Orthodoxy, I invite you to come and see. Experience our Divine Liturgy,
          receive the holy services, and join our community for fellowship. The doors of the Church
          are open to all who seek God.
        </p>
        <p>
          If you have questions about the Orthodox faith, please do not hesitate to contact me.
          I am here to serve you.
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
