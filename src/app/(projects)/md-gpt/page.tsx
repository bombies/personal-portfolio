import ProjectLayout from "@/app/(projects)/ProjectLayout";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

export default function MDGPT() {
    return (
        <main>
            <ProjectLayout
                website="https://github.com/bombies/md-gpt-frontend"
                title="MD-GPT"
                subTitle="An AI-Powered chat-based tool to help medical doctors with patient diagnosis."
                images={[
                    'https://i.imgur.com/IVNC0NV.png',
                    'https://i.imgur.com/38R8Wq6.png',
                    'https://i.imgur.com/bvLRHtg.gif',
                    'https://i.imgur.com/unOGdJj.gif',
                    ''
                ]}
            >
                <ContentSection
                    title="about"
                    description="
                        In the realm of modern healthcare, MD-GPT emerges as a pioneering solution, seamlessly integrating artificial intelligence (AI) to revolutionize patient diagnosis and consultation management. Developed as a web-based application, MD-GPT leverages a potent technological stack comprising NextJS, MongoDB, FastAPI, and OpenAI's Python library. This advanced tool empowers medical professionals, particularly doctors, to enhance their diagnostic capabilities and streamline patient interactions.<br><br>

                        <span className='font-bold text-3xl text-secondary'>Key Features</span><br><br>
                        MD-GPT encompasses an array of sophisticated features. Central to its functionality is a robust system for patient and consultation management, allowing doctors to effortlessly create, update, retrieve, and delete patient records. This user-friendly interface ensures comprehensive and organized patient information.<br><br>

                        At the heart of MD-GPT lies its AI-powered chat interface, enabling doctors to engage with an AI model meticulously trained on a vast corpus of doctor-patient conversations. This AI model, attuned to medical terminology and patient histories, provides invaluable insights to assist in the diagnostic process.<br><br>

                        MD-GPT leverages natural language processing (NLP) through OpenAI's Python library, allowing it to analyze conversations between healthcare professionals and patients. This NLP capability extracts critical information, interprets symptoms, and offers potential diagnoses based on the available data.<br><br>

                        The tool employs a secure and scalable MongoDB database to ensure data integrity and privacy. This database seamlessly stores patient profiles, consultation histories, and chat transcripts, facilitating efficient data management.<br><br>

                        FastAPI, a cutting-edge Python web framework, serves as the backbone of MD-GPT, providing high-speed API endpoints for real-time interaction with the AI model and smooth integration with the frontend.<br><br>

                        <span className='font-bold text-3xl text-secondary'>How MD-GPT Operates</span><br><br>
                        MD-GPT's workflow begins with secure user authentication, restricting access to authorized personnel and safeguarding patient data. Doctors can then create, update, and maintain detailed patient records and consultation histories.<br><br>

                        During consultations, MD-GPT's chat interface allows doctors to input patient symptoms and medical histories. The AI model swiftly analyzes this information, generating potential diagnoses based on its extensive training data and the specific case.<br><br>

                        Critical data, including chat transcripts, diagnoses, and consultation details, are securely stored in MongoDB, facilitating easy retrieval and reference for future consultations.<br><br>
                    "
                >
                    <h3 className='text-3xl my-6 font-bold text-secondary'>tech stack</h3>
                    <div className='flex space-x-8'>
                        <List
                            heading='back-end technologies'
                            items={[
                                'MongoDB',
                                'Prisma',
                                'Next.js API Routes',
                                'FastAPI (Python)',
                                'OpenAI'
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