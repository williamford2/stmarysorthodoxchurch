import { PageHero } from "@/components/shared/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Teachings",
  description: "Orthodox Christian doctrine and theology at St. Mary's Church.",
  path: "/our-faith/teachings",
});

export default function TeachingsPage() {
  return (
    <>
      <PageHero title="Teachings" subtitle="Orthodox doctrine and theology" />
      <div className="py-8 prose prose-lg max-w-none">
        <p>
          The Orthodox Church holds to the faith once delivered to the saints, as expressed
          in the Holy Scriptures, the Nicene Creed, and the decisions of the Seven Ecumenical
          Councils. Orthodox theology is not a system of abstract propositions but a living
          encounter with the God who is Trinity.
        </p>
        <h2>The Holy Trinity</h2>
        <p>
          The central mystery of the Christian faith is the Holy Trinity: one God in three
          persons &mdash; Father, Son, and Holy Spirit. Each person of the Trinity is fully God,
          yet there is one God. This is the foundation of all Orthodox theology and worship.
        </p>
        <h2>The Incarnation</h2>
        <p>
          The Son of God became man for our salvation. Jesus Christ is fully God and fully man,
          two natures in one person without confusion or separation. This teaching, defined at
          the Council of Chalcedon (451 AD), is central to Orthodox Christology.
        </p>
        <h2>Theosis (Deification)</h2>
        <p>
          The goal of the Christian life in Orthodox theology is <em>theosis</em> &mdash; union with
          God, or deification. As St. Athanasius wrote, &ldquo;God became man so that man might become
          god.&rdquo; This does not mean that humans become God by nature, but that by grace we
          participate in the divine life.
        </p>
        <h2>The Nicene Creed</h2>
        <p>
          The Nicene-Constantinopolitan Creed (381 AD) is the definitive statement of Orthodox
          faith, recited at every Divine Liturgy. It summarizes the Orthodox teaching on the
          Trinity, the Incarnation, the Church, Baptism, and the resurrection of the dead.
        </p>
      </div>
    </>
  );
}
