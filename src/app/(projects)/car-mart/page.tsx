import ProjectLayout from "@/app/(projects)/ProjectLayout";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

export  default function CarMartPage() {
    return (
        <main>
            <ProjectLayout
                website='https://github.com/bombies/car-mart-backend'
                secondaryWebsite='https://github.com/MikesGit138/CarMartClient'
                title='the car mart'
                subTitle='A collaborative imaginary car mart management website'
                images={[
                    'https://i.imgur.com/8x2AYKJ.png',
                    'https://i.imgur.com/IChHdmp.png',
                    'https://i.imgur.com/BLpUkC4.png',
                    'https://i.imgur.com/UmqPdyF.png',

                ]}
            >
                <ContentSection
                    title='about'
                    description='The Car Mart is an imaginary business place dedicated to selling cars. This project was assigned to me and one other member of the Computing Society at the University of the West Indies, Mona by the club president. We were given a document of requirements to fulfil.<br/><br/>
                    The requirements stated that the front-end and back-end of the service must be separated. I chose to focus on the back-end portion, however I still designed the front-end.<br/><br/>
                    The back-end was made using NestJS, a TypeScript back-end framework based on Express. This was my introduction to making back-end applications using NestJS. I learnt how to speed up response times with caching, use proper database schemas, implement request body validation, authorize users with JWT tokens and so much more.<br/><br/>
                    The front-end was implemented using AngularJS and designed with Figma. I did not handle the more complicated front-end tasks as I am not very experienced with Angular. However, I did implement a lot of the styling as TailwindCSS was used.'
                >
                    <h3 className='text-3xl my-6 font-bold text-secondary'>tech stack</h3>
                    <div className='flex space-x-8'>
                        <List
                            heading='back-end technologies'
                            items={[
                                'MongoDB',
                                'Redis',
                                'NestJS',
                            ]}
                        />
                        <List
                            heading='front-end technologies'
                            items={[
                                'AngularJS',
                                'Figma'
                            ]}
                        />
                    </div>
                </ContentSection>
            </ProjectLayout>
        </main>
    )
}