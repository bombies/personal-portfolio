import ProjectLayout from "@/app/(projects)/ProjectLayout";
import ContentSection from "@/components/ContentSection";
import List from "@/components/List";

export default function GreensPub() {
    return (
        <main>
            <ProjectLayout
                website='https://github.com/bombies/greens-restaurant-website'
                icon='https://i.imgur.com/HLTQ78m.png'
                title="green's restaurant & pub management website"
                subTitle="A dashboard used to handle the managing of Green's Restaurant & Pub"
                images={[
                    'https://i.imgur.com/miGtc5e.png',
                    'https://i.imgur.com/HXphz8i.gif',

                    // Inventory
                    'https://i.imgur.com/LPP7mfD.gif',
                    'https://i.imgur.com/3sDlDEP.gif',
                    'https://i.imgur.com/HE7PgbZ.gif',
                    'https://i.imgur.com/ogUNvZx.gif',
                    'https://i.imgur.com/VrAImJI.gif',
                    'https://i.imgur.com/r1hmDy2.gif',
                    'https://i.imgur.com/aXUjw8T.gif',
                    'https://i.imgur.com/gl4LEpb.gif',
                    'https://i.imgur.com/GmMatSY.gif',

                    // Invoices
                    'https://i.imgur.com/7HmQpxp.gif',
                    'https://i.imgur.com/PuTKIeS.gif',
                    'https://i.imgur.com/gf4mkYl.gif',
                    'https://i.imgur.com/EdS3b7g.gif',
                    'https://i.imgur.com/AKcGTtM.gif',
                    'https://i.imgur.com/x9gEW1Q.png',

                    // Users Management
                    'https://i.imgur.com/qtUhAh7.png',
                    'https://i.imgur.com/xeMiGJ9.gif',
                    'https://i.imgur.com/URTi3ZL.gif'
                ]}
            >
                <ContentSection
                    title='about'
                    description="
                        This project written in TypeScript is a comprehensive company dashboard designed to streamline inventory management and facilitate data-driven decision-making. It offers a range of features, including inventory management, insightful analysis, invoice generation, and user management.<br/><br/>

The core functionality of the dashboard revolves around inventory management. Users can easily create new inventories, providing essential details such as product names, quantities, and other relevant information. The system then utilizes historical data to generate insights specific to each inventory. These insights are derived from analyzing past stock data and provide valuable information to make intelligent decisions about future stock choices. This enables the company to optimize its inventory, minimize stockouts, and improve overall operational efficiency.<br/><br/>

The dashboard also manages inventory for specific locations. These locations depend on the general inventories for their items and even integrate an inventory requests system for employees to move items from one area to another in a tracked and organized manner.<br/><br/>

The dashboard also incorporates an invoice generation module, allowing the company to effortlessly bill customers. The invoice formatting is highly configurable, ensuring flexibility to accommodate specific business requirements. Users can define the layout, include custom fields, and tailor the appearance of the invoice to align with their branding. This simplifies the invoicing process, enabling swift and accurate billing for improved financial management.<br/><br/>

Additionally, the project includes robust user management capabilities. Administrators can easily add and remove users from the system, granting or revoking access as needed. Each user's permissions within the dashboard are highly configurable, allowing fine-grained control over their actions and access levels. The system employs binary arithmetic to handle permissions, ensuring both security and computational efficiency. This approach provides a scalable and efficient way to manage user access rights without compromising data integrity or system performance.<br/><br/>

Overall, this project offers a comprehensive company dashboard with powerful inventory management features. By leveraging historical data insights, flexible invoice generation, and efficient user management, the dashboard empowers businesses to make informed decisions, optimize stock management, and streamline operations effectively.
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
                                'AWS S3'
                            ]}
                        />
                        <List
                            heading='front-end technologies'
                            items={[
                                'Next.js (TypeScript)',
                            ]}
                        />
                        <List
                            heading='dev-ops technologies'
                            items={[
                                'GitHub Actions CI/CD',
                            ]}
                        />
                    </div>
                </ContentSection>
            </ProjectLayout>
        </main>
    )
}