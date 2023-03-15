import PageWrapper from "@/components/layout/PageWrapper"
import { useState } from "react";
import { PaymentHeader, Cart, Review, Confirm, PaymentStep } from "@/containers/PaymentPage";

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: 'Cart',
            content: <Cart setActiveStep={setActiveStep} />,
        },
        {
            title: 'Review',
            content: <Review setActiveStep={setActiveStep} />,
        },
        {
            title: 'Payment',
            content: <PaymentStep setActiveStep={setActiveStep} />,
        },
        {
            title: 'Confirm',
            content: <Confirm />,
        },
    ];

    return (
        <PageWrapper>
            <PaymentHeader steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
            {steps[activeStep].content}
        </PageWrapper>
    )
}

export default Payment