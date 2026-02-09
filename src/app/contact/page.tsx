import { Layout } from '@/components/common';
import { ContactContainer } from '@/containers';

function Contact() {

    return(
        <Layout main transparent className="gap-50 mb-40 pt-40">
            <div className="flex flex-col w-full items-center justify-center gap-10">
                <h1 className="text-5xl font-bold font-beach">Contact</h1>
                <ContactContainer />
            </div>
        </Layout>
    );
};

export default Contact;