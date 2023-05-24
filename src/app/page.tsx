import localFont from "next/font/local";
import Button from "@/components/button/Button";
import ImageGrid from "@/components/image-grid/ImageGrid";
import ImageGridItem from "@/components/image-grid/ImageGridItem";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

const sfMono = localFont({
    src: [
        {
            path: './fonts/sf-mono/SFMonoRegular.otf',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-sf-mono',
})

export default function Home() {
    return (
        <main>
            <div
                className='pt-32 h-[30rem] align-middle'
                style={{
                    backgroundImage: 'url(https://i.imgur.com/9bCFvHs.png)'
                }}
            >
                <div className='pl-24 phone:pl-6'>
                    <h1 className={`text-5xl phone:text-lg text-left ${sfMono.variable} font-mono mb-3`}>hey,<br/> i&apos;m Ajani.
                    </h1>
                    <p className={`text-lg phone:text-sm text-left ${sfMono.variable} font-mono max-w-xl phone:max-w-xs mb-6`}>I&apos;m a
                        full stack software engineer. I have a passion for creating all sorts of software but I enjoy
                        web development the most.</p>
                    <Button label='explore' href='#projects' newTab={false} width={6} height={2.5} />
                </div>
            </div>
            <ContentSection title='my projects' id='projects'>
                <div className='w-full mt-12'>
                    <ImageGrid>
                        <ImageGridItem
                            href='/robertify'
                            title='robertify'
                            color='#00D61560'
                        />
                        <ImageGridItem
                            href='/car-mart'
                            title='the car mart'
                            color='#009ddb60'
                        />
                        <ImageGridItem
                            href='/greens-pub'
                            title="green's pub"
                            color='#26ff8160'
                        />
                    </ImageGrid>
                </div>
            </ContentSection>
            <ContentSection
                title='my skills'
                id='skills'
                description='With only 3 years of coding experience (written 2023), I have ammassed fluency in several programming languages and frameworks. Such tools can be found below'
            >
                <div className='flex space-x-6'>
                    <List
                        heading='programming languages'
                        items={[
                            'Java',
                            'Kotlin',
                            'JavaScript',
                            'TypeScript',
                            'Python',
                            'C/C++',
                            'Rust (Beginner)',
                            'SQL'
                        ]}
                    />
                    <List
                        heading='frameworks & libraries'
                        items={[
                            'ReactJS',
                            'Next.js',
                            'NestJS',
                            'Express',
                            'TailwindCSS',
                            'Sass',
                            'Java Spring',
                            'Ktor'
                        ]}
                    />
                </div>
            </ContentSection>
        </main>
    )
}
