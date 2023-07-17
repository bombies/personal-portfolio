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
                    'https://i.imgur.com/q8pQXZq.png',
                    'https://i.imgur.com/qnHbbji.gif',

                    // Inventory
                    'https://i.imgur.com/yUPJSJG.png',
                    'https://i.imgur.com/reY7OMJ.gif',
                    'https://i.imgur.com/MQDWfNL.gif',
                    'https://i.imgur.com/ogUNvZx.gif',

                    // Invoices
                    'https://i.imgur.com/fvnb61z.png',
                    'https://i.imgur.com/VljsV95.png',
                    'https://i.imgur.com/bdHVTUT.png',
                    'https://i.imgur.com/1VONJgY.png',
                    'https://i.imgur.com/cpgfJxP.png',
                    'https://i.imgur.com/vwmtddv.png',
                    'https://i.imgur.com/pvVwq0N.png',
                    'https://i.imgur.com/eHGulmg.png',
                    'https://i.imgur.com/dWwF8gn.png',
                    'https://i.imgur.com/3vD1TTz.png',
                    'https://i.imgur.com/6nkxLMX.png',

                    // Users Management
                    'https://i.imgur.com/ZKXD0Yg.png',
                    'https://i.imgur.com/IDeXCXg.gif'
                ]}
            >
                <ContentSection
                    title='about'
                    description="
                        This project written in TypeScript is a comprehensive company dashboard designed to streamline inventory management and facilitate data-driven decision-making. It offers a range of features, including inventory creation, insightful analysis, invoice generation, and user management.<br/><br/>

The core functionality of the dashboard revolves around inventory management. Users can easily create new inventories, providing essential details such as product names, quantities, and other relevant information. The system then utilizes historical data to generate insights specific to each inventory. These insights are derived from analyzing past stock data and provide valuable information to make intelligent decisions about future stock choices. This enables the company to optimize its inventory, minimize stockouts, and improve overall operational efficiency.<br/><br/>

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