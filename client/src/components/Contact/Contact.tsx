import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form, Input, message } from 'antd';
import './Contact.css'
import ContactCard from './ContactCard';
import { IconSend } from '@tabler/icons-react';

const contactData = [
    {
        title: 'Email',
        icon: <i className="fas fa-envelope text-2xl mb-1"></i>,
        data: 'liedmond0527@gmail.com',
        link: 'mailto:liedmond0527@gmail.com'
    },
    {
        title: 'Phone',
        icon: <i className="fas fa-phone text-2xl mb-1"></i>,
        data: '647-996-3527',
        link: 'tel:+16479963527'
    },
    {
        title: 'LinkedIn',
        icon: <i className="fa-brands fa-linkedin text-2xl mb-1"></i>,
        data: 'edmond-li2004',
        link: 'https://www.linkedin.com/in/edmond-li2004/'
    }
];

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};    

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customValidator = (message : string) => (_: any, value: any) => {
    if (!value || value.trim() === '') {
      return Promise.reject(new Error(message));
    }
    return Promise.resolve();
};

const Contact = () => {
    const formRef = useRef(null);
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

        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        console.log('form values:', values);

        // if (!values.firstName || values.firstName === '' || values.firstName.trim() === '') {
        //     message.error('Please enter a valid first name :)');
        //     return;
        // }
        // if (!values.lastName || values.lastName === '' || values.lastName.trim() === '') {
        //     message.error('Please enter a valid last name :)');
        //     return;
        // }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if (!values.email || values.email.trim() === '' || !emailRegex.test(values.email.trim())) {
        //     message.error('Please enter a valid email :)');
        //     return;
        // }

        if (!emailRegex.test(values.email.trim())) {
            message.error('Please enter a valid email :)');
            return;
        }

        // Send the email after validation
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                message.success('Email sent successfully!');
                form.resetFields();
            }, (error) => {
                console.log(error.text);
                message.error('Email failed to send :(');
            });
        };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // const sendEmail = () => {
    //     const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    //     const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    //     const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    //     console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    //     console.log(formRef?.current)

    //     if (formRef?.current) {
    //         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef?.current, PUBLIC_KEY)
    //             .then((result) => {
    //                 console.log(result.text);
    //                 message.success('Email sent successfully!');
    //                 form.resetFields();
    //             }, (error) => {
    //                 console.log(error.text);
    //                 message.error('Email failed to send :(');
    //             });
    //     } else {
    //         message.error('Email failed to send :(');
    //     }
    // }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-2xl font-semibold">Contact Me</h2>
            <span className="section__subtitle text-sm">Contact Information :)</span>

            <div className="contact__container container grid justify-center gap-x-24 mb-12">
                <div className="contact__content">
                    <h3 className="contact__title text-center font-semibold mb-6"> Contact Info </h3>
                    <div className="contact__info grid gap-y-4">
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
                    <h3 className="contact__title text-center font-semibold mb-6"> Contact Me </h3>
                    <Form
                        ref={formRef}
                        className="contact__form w-[360px] relative mb-8"
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onValuesChange={(changedValues: Partial<FormValues> ) => {
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
                            className="contact__form-item m-0 p-0 mb-2"
                            rules={[{ validator: customValidator("Please enter your first name :)") }]}   
                        >
                            <Input placeholder="John" className="contact__form-input rounded-xl text-text-color"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Last Name</p>}
                            name="lastName"
                            className="m-0 p-0 mb-2"
                            rules={[{ validator: customValidator("Please enter your last name :)") }]}   
                        >
                            <Input placeholder="Smith" className="contact__form-input rounded-xl text-text-color"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Email</p>}
                            name="email"
                            className="m-0 p-0 mb-2"  
                            rules={[{ validator: customValidator("Please enter your email :D") }]}   
                        >
                            <Input placeholder="johnsmith@gmail.com" className="contact__form-input rounded-xl text-text-color"/>
                        </Form.Item>

                        <Form.Item
                            label={<p className="font-semibold">Message</p>}
                            name="message"   
                            className="m-0 p-0 mb-2"    
                        >
                           <Input.TextArea 
                                rows={2} 
                                value={messageTextArea} 
                                placeholder="Type your message here..."
                                className="contact__form-area rounded-xl text-text-color"
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
                                className="font-semibold mt-2 shadow-xl inline-flex items-center px-2 py-5"
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