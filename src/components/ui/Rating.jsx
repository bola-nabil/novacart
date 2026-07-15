import { solidStar, regularStar } from "../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({rating}) => {
    return(
        <div className="flex gap-1">
           {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
                key={star}
                icon={star <= Math.round(rating) ? solidStar : regularStar}
                className="text-yellow-400"
            />
        ))}
        </div>
    );
}

export default Rating;