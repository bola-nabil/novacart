import { faTruck, faShield, faArrowsRotate, faHeadset } from "../../../utils/icons";

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
            <h1>Features</h1>
        </section>
    );
}

export default Features;