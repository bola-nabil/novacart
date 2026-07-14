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
        <section className="flex flex-col sm:flex-row items-center justify-center gap-10 p-10 w-full">
            {
                featurseContent.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-4">
                        <div>
                            <FontAwesomeIcon 
                                icon={feature.icon} 
                                className="text-blue-700 text-2xl sm:text-3xl" 
                                />
                        </div>
                        <div>
                            <h1 className="font-bold ">{feature.header}</h1>
                            <p className="text-md">{feature.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default Features;