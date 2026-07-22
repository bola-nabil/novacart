import Container from "../../../components/ui/Container";
import Rating from "../../../components/ui/Rating";
import { testimonials } from "../../../data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "../../../utils/icons";

const Testimonials = () => {
    return (
        <section className="py-10">
            <Container>
                <h1 className="text-2xl font-bold">What Our Customers Say</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-7">
                    {
                        testimonials.map((user) => (
                            <div 
                                key={user.id} 
                                className="bg-gray-100 p-5 rounded-md flex gap-4">
                                <div className="shrink-0">
                                    <img 
                                        src={user.image} 
                                        alt={user.name} 
                                        className="w-15 h-15 rounded-full object-cover" />
                                </div>
                                <div>
                                    <h1 className="font-bold">{user.name}</h1>
                                    <div className="flex items-center gap-2 pt-1">
                                        <div className="h-5 w-5 rounded-full bg-green-700 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-white text-[12px]" />
                                        </div>
                                        <span className="text-green-700 font-bold text-sm">{user.role}</span>
                                    </div>
                                    <div className="py-3">
                                        <Rating rating={user.rating}/>
                                    </div>
                                    <div>
                                        <p>{user.comment}</p>
                                    </div>

                                </div> {/* user info*/}
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default Testimonials;