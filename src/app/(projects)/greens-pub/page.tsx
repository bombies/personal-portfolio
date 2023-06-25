import ProjectLayout from "@/app/(projects)/ProjectLayout";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

export default function GreensPub() {
    return (
        <main>
            <ProjectLayout
                website='https://github.com/bombies/greens-restaurant-website'
                icon='https://i.imgur.com/HLTQ78m.png'
                title="green's restaurant & pub management website (in development)"
                subTitle="A dashboard used to handle the managing of Green's Restaurant & Pub"
                images={[
                    'https://i.imgur.com/q8pQXZq.png',
                    'https://i.imgur.com/qnHbbji.gif',
                    'https://i.imgur.com/yUPJSJG.png',
                    'https://i.imgur.com/Fw3R6Id.gif',
                    'https://i.imgur.com/ZKXD0Yg.png',
                    'https://i.imgur.com/IDeXCXg.gif'
                ]}
            >
                <ContentSection
                    title='about'
                    description="This website was aims to manage the day-to-day stock, employee and invoice operations at a small business known as Green's Restaurant & Pub. It's made entirely in Next.js. So far the website only has functionality to manage stock and add and remove employees to and from the dashboard.<br/><br/>
                    Further development on this project will introduce invoices that can be generated from the dashboard and employee management with mailing lists. It already has certain features implemented such as custom permissions which uses binary arithmetic and secure password hashing and storage.<br/><br/>
                    This project was the first I made using Next.js, and it certainly was an essential foundational piece."
                >
                    <h3 className='text-3xl my-6 font-bold text-secondary'>tech stack</h3>
                    <div className='flex space-x-8'>
                        <List
                            heading='back-end technologies'
                            items={[
                                'MongoDB',
                                'Next.js API Routes',
                            ]}
                        />
                        <List
                            heading='front-end technologies'
                            items={[
                                'Next.js (TypeScript)',
                            ]}
                        />
                    </div>
                </ContentSection>
            </ProjectLayout>
        </main>
    )
}