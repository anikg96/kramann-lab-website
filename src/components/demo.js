import '../assets/logo.png';
import React from 'react'; 

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';

function AdvancedCard() {
    const header = (
        <img alt="Card" src="https://primereact.org/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
        </div>
    );

    return (
        <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
        </Card>
    )
}

function TabDemo() {
    const header1 = (
        <img alt="Card" src={require('C:\\kramann-lab-website\\src\\assets\\Rafael-Kramann.jpg')} />
    );
    const header2 = (
        <img alt="Card" src={require('C:\\kramann-lab-website\\src\\assets\\Hayat_Sikander.jpg')} />
    );
    const header3 = (
        <img alt="Card" src={require('C:\\kramann-lab-website\\src\\assets\\Sidrah.jpg')} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button>Contact</Button>
        </div>
    );
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Our Team">
                    <div className="card flex flex-wrap justify-content-center gap-5">
                    <Card title="RAFAEL KRAMANN, MD, PHD, FASN" subTitle="Director" footer={footer} header={header1} className="md:w-20rem md:h-20rem">
                        <p className="m-0">
                        Dr. Kramann is Professor of Medicine and directs the Institute of Experimental Medicine and Systems Biology at RWTH Aachen, Germany and the Laboratory of Translational Kidney and Cardiovascular Research at Erasmus Medical Centre, Rotterdam, NL
                        </p>
                    </Card>
                    <Card title="SIKANDER HAYAT, PHD" subTitle="Groupleader" footer={footer} header={header2} className="md:w-25rem">
                        <p className="m-0">
                        Dr Hayat is a systems biologist and directs the Laboratory in Translational Data Science within the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University Hospital.
                        </p>
                    </Card>
                    <Card title="SIDRAH MARYAM, MSC" subTitle="PhD Student" footer={footer} header={header3} className="md:w-25rem">
                        <p className="m-0">
                        Sidrah is a bioinformatician working on kidney and cardiovascular disease as well as novel computational tools to identify therapeutic targets.
                        </p>
                    </Card>
                    </div>
                </TabPanel>
                <TabPanel header="Recent Work & News">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Support Our Research">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default function TemplateDemo() {
    const items = [
        {
            label: 'Home',
            
        },
        {
            label: 'Research',
            
        },
        {
            label: 'Our Team',
            icon: 'pi pi-fw pi-users',
            
        },
        {
            label: 'Recent Work & News',
            
        },
        {
            label: 'Support Our Research'
        }
    ];

    const start = <div>
        <h5>Kramann Lab</h5>
        </div>;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
            <div className="grid grid-nogutter surface-section text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Welcome to</span>
                        <div className="text-6xl text-primary font-bold mb-3">Kramann Lab</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">This is currently a placeholder which will contain an official introduction of Kramann Lab in the future. </p>

                        <Button label="Our Team" type="button" className="mr-3 p-button-raised"></Button>
                        <Button label="Contact Us" type="button" className="p-button-outlined"></Button>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src={require('C:\\kramann-lab-website\\src\\assets\\labpic.jpg')} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
            <TabDemo />
        </div>
    )
}

