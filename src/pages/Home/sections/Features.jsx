import { faTruck, faShield, faArrowsRotate, faHeadset } from "../../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const featurseContent = [
    {
        id: 1,
        icon: faTruck,
        header: "Free Shipping",
        description: "On orders over $50"
    },
    {
        id: 2,
        icon: faShield,
        header: "Secure Payment",
        description: "100% secure payment"
    },
    {
        id: 3,
        icon: faArrowsRotate,
        header: "Easy Returns",
        description: "30 days returns policy"
    },
    {
        id: 4,
        icon: faHeadset,
        header: "24/7 Support",
        description: "Dedlicated support"
    },
];

const Features = () => {
    return(
        <section>
            {
                featurseContent.map((feature) => (
                    <div key={feature.id}>
                        <div>
                            <FontAwesomeIcon icon={feature.icon} />
                        </div>
                        <div>
                            <h1>{feature.header}</h1>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default Features;