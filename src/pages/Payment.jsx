import PageWrapper from "@/components/layout/PageWrapper"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "@/assets/image";
import { PaymentHeader, Cart, Review, Confirm, PaymentStep } from "@/containers/PaymentPage";

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: 'Cart',
            content: <Cart setActiveStep={setActiveStep}/>,
        },
        {
            title: 'Review',
            content: <Review setActiveStep={setActiveStep}/>,
        },
        {
            title: 'Payment',
            content: <PaymentStep setActiveStep={setActiveStep}/>,
        },
        {
            title: 'Confirm',
            content: <Confirm />,
        },
    ];

    return (
        <PageWrapper>
            <div className="flex flex-col min-h-screen">
                <PaymentHeader steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}/>
                {steps[activeStep].content}
            </div>
        </PageWrapper>
    )
}

export default Payment