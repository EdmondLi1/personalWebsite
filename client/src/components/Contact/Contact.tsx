import { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import './Contact.css'
import ContactCard from './ContactCard';
import { IconSend } from '@tabler/icons-react';

const contactData = [
    {
        title: 'Email',
        icon: <i className="fas fa-envelope"></i>,
        data: 'edmondli0527@gmail.com',
        link: 'mailto:edmondli0527@gmail.com'
    },
    {
        title: 'Phone',
        icon: <i className="fas fa-phone"></i>,
        data: '647-996-3527',
        link: 'tel:+16479963527'
    },
    {
        title: 'LinkedIn',
        icon: <i className="fa-brands fa-linkedin"></i>,
        data: 'edmond-li2004',
        link: 'https://www.linkedin.com/in/edmond-li2004/'
    }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinish = (values: any) => {
    console.log('Success:', values);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};    


const Contact = () => {
    const [messageTextArea, setMessageTextArea] = useState(''); 
    
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-2xl font-semibold">Contact Me</h2>
            <span className="section__subtitle text-sm">Info and Email</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title"> Contact Info </h3>
                    <div className="contact__info">
                        {contactData.map((contact, index) => (
                            <ContactCard
                                key={index}
                                title={contact.title}
                                icon={contact.icon}
                                data={contact.data}
                                link={contact.link}
                            />
                        ))}
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title"> Contact Me </h3>
                    <Form
                        className="contact__form"
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onValuesChange={(changedValues: Partial<FormValues>, allValues: FormValues) => {
                            // Use the spread operator to create a new object
                            // This is a shallow copy, so it's safe for setState
                            const updatedFormValues = { ...formValues, ...changedValues };
                        
                            // Now you can call setFormValues without TypeScript errors
                            setFormValues(updatedFormValues);
                            // console.log(allValues);
                        }}
                    >
                        <Form.Item
                            label={<p className="font-semibold">First Name</p>}
                            name="firstName"
                            className="contact__form-item"   
                        >
                            <Input placeholder="John" className="contact__form-input rounded-xl"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Last Name</p>}
                            name="lastName"
                        >
                            <Input placeholder="Smith" className="contact__form-input rounded-xl"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Email</p>}
                            name="email"
                        >
                            <Input placeholder="johnsmith@gmail.com" className="contact__form-input rounded-xl"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Message</p>}
                            name="message"       
                        >
                           <Input.TextArea 
                                rows={2} 
                                value={messageTextArea} 
                                placeholder="Type your message here..."
                                className="contact__form-input rounded-xl"
                                onChange={(e) => {
                                    setMessageTextArea(e.target.value);
                                }}  
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                size="middle"
                                shape="round"
                                className="font-semibold mt-4 shadow-xl inline-flex items-center px-2 py-5"
                                icon={<IconSend className="w-4"/>}
                            >
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact;