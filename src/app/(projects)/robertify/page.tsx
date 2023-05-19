import ProjectLayout from "@/app/(projects)/ProjectLayout";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

export default function RobertifyPage() {
    return (
        <main>
            <ProjectLayout
                title='robertify'
                subTitle='A next-gen Discord music bot with a multitude of features.'
                website='https://robertify.me/'
                icon='https://i.imgur.com/fwG8qA5.png'
                images={[
                    'https://i.robertify.me/images/k59gh.png',
                    'https://i.imgur.com/m2jxRtf.png',
                    'https://i.imgur.com/b6g8wbJ.png',
                    'https://i.imgur.com/do0JwZY.png',
                    'https://i.imgur.com/vRXdN0T.png',
                    'https://i.imgur.com/fA0bCEL.png',
                    'https://i.gyazo.com/28e4864e6b439d081ff2962200e5f81c.gif',
                    'https://i.imgur.com/sSDPqig.png',
                    'https://i.imgur.com/ZZT2qBx.png',
                ]}
            >
                <ContentSection
                    title='about'
                    description="Robertify is a music bot written completely in Java and Kotlin using JDA. The name 'Robertify' originated from the simple fact that a friend of mine, named Robert, wanted a music bot. So I made one for him. Eventually, Robertify became a bigger project to me and I have been putting in most of my efforts into it ever since.<br/><br/>
                    Robertify has gone through several versions, each of which bringing a major change. Version 1 involved just the implementation of the bare-boned music playing capabilities, wheras the upcoming version 6 is a rewrite from Java to Kotlin with features such as a web dashboard, statistics tracking, data visualization and more modern features.<br/><br/>
                    All in all, Robertify is the project that has taught me the most about the software development industry, especially with respect to scale. Robertify serves around 800,000 people worldwide through a popular platform known as Discord. I have learn through mutliple trial and error instances to manage such a user-base.<br/><br/>
                    I could go on and on about the many lessons I've learnt from building this application but I think that's better fit for a blog post. Instead, you can enjoy this list of all the technologies used."
                >
                    <h3 className='text-3xl my-6 font-bold text-secondary'>tech stack</h3>
                    <div className='flex space-x-8'>
                        <List
                            heading='back-end technologies'
                            items={[
                                'MongoDB',
                                'InfluxDB',
                                'Redis',
                                'NestJS API Framework (TypeScript)',
                                'Java Spring (Java)',
                                'Ktor (Kotlin)'
                            ]}
                        />
                        <List
                            heading='front-end technologies'
                            items={[
                                'Next.js (TypeScript)',
                                'Java Discord API (Java/Kotlin)',
                                'Grafana',
                            ]}
                        />
                        <List
                            heading='dev-ops technologies'
                            items={[
                                'GitHub Actions',
                                'Docker',
                                'Sentry',
                                'JUnit 5'
                            ]}
                        />
                    </div>
                </ContentSection>
            </ProjectLayout>
        </main>
    )
}