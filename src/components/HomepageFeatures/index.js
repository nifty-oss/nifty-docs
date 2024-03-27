import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Flexibility from "@site/static/img/flexible.jpg";
import Composability from "@site/static/img/composable.jpg";
import Simplicity from "@site/static/img/simple.jpg";

const FeatureList = [
  {
    title: "Flexible",
    Image: Flexibility,
    description: (
      <>
        <b>Nifty Asset</b>: a lightweight standard for non-fungible assets. It provides a base set of data along with optional extensions
        for customization.
      </>
    )
  },
  {
    title: "Composible and Extensible",
    Image: Composability,
    description: (
      <>
        Choose to have a fully on-chain asset or point to
        external data. With minimal accounts and compute usage, Nifty Asset is designed to be highly
        composable and extensible.
      </>
    )
  },
  {
    title: "Simple and Affordable",
    Image: Simplicity,
    description: (
      <>
        With a single account representing an asset, complexity and costs are
        kept to a minimum.
      </>
    )
  }
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
