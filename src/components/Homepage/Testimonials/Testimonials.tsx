import TestimonialItem from './TestimonialItem';

interface Testimonial {
    title: string,
    subtitle: string,
    content: string
};

const testimonials: Testimonial[] = [
    {
        title: "B. Krumsee",
        subtitle: "Regional Sales Manager",
        content: `
            This sales training course was by far the most complete sales training I've had. 
            The content was clear, logical and effective. Kelly has obviously put a lot of 
            thought and expertise into designing it.

            The main benefits came from doing assignments, receiving individual feedback 
            and interacting with Kelly and other participants.

            This format gave me the confidence to implement new sales planning in our 
            organization. I didn't just learn “how” to Crush Your Number but the “what” and “why” 
            also became much clearer.
        `
    },
    {
        title: "B. Silverman",
        subtitle: "VP, Audience Development",
        content: `
            Kelly electrified the room! He has a no BS kind of way of teaching, and really 
            resonated with both SDRs and salespeople. He managed to change the way we think about 
            selling, make us proud to be sellers, and force us to think about how we were providing 
            value to our clients. Kelly did a wonderful job teaching us why it's so valuable to be 
            excited and confident, and gave us the tools to really make a difference. Most sales 
            trainings are forgotten within weeks if not days, but we're still talking about Kelly!"
        `
    },
    {
        title: "G. Reynolds",
        subtitle: "Regional Manager",
        content: `
            I have participated in many different leadership training programs in my 30 plus years 
            in the coatings industry. Kelly's training program is the only one that has gone deeper 
            than just telling me how HE became successful. Instead he has established a training program 
            that shows practical applications drawing from his understanding of changing the behavior 
            managers and how they coach and train their employees. I highly recommend Kelly's program 
            to those who a serious about changing their company for the better.
        `
    }
];

function Testimonials() {

    const renderTestimonials = () => {
        return testimonials.map((item, index) => (
            <TestimonialItem 
                key={`testimonials-${index}`}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
            />
        ));
    };

    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-5xl font-bold">What Do People Say?</h1>
            </div>
            <div className="flex gap-20 lg:gap-8 mt-20 lg:gap-y-20 flex-wrap items-center justify-center">
                {renderTestimonials()}
            </div>
        </div>
    );
};

export default Testimonials;