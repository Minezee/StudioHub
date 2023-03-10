import PageWrapper from "@/components/layout/PageWrapper"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "@/assets";
import { PaymentHeader, Cart, Review } from "@/containers/PaymentPage";

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: 'Cart',
            content: <Cart setActiveStep={setActiveStep}/>,
        },
        {
            title: 'Review',
            content: <Review />,
        },
        {
            title: 'Payment',
            content: "<Login />",
        },
        {
            title: 'Confirm',
            content: "<Login />",
        },
    ];

    return (
        <PageWrapper>
            <PaymentHeader steps={steps} activeStep={activeStep}/>
            {steps[activeStep].content}
        </PageWrapper>
    )
}

export default Payment