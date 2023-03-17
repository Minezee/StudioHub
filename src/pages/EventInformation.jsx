import PageWrapper from "@/components/layout/PageWrapper"
import Layout from "@/components/layout/Layout"
import { ResultHeader } from "@/components/global"
import { eventInfoBanner } from "@/assets/image"
import styles from "@/styles/Styles.module.css"

const EventInformation = () => {
    return (
        <Layout>
            <PageWrapper>
                <ResultHeader />
                <div className="bg-gray-footer w-full px-10 py-9 text-white font-semibold">
                    <h3 className="text-h4 text-orange-500">Musik Hebat 2022</h3>
                    <p>Massive Organizer</p>
                    <div className="flex flex-col sm:flex-row gap-16 pt-4">
                        <img src={eventInfoBanner} alt="event image" className="w-[32.25rem] h-auto" />
                        <div>
                            <h4 className="text-h6 font-normal">TEMA: “Memainkan Lagu Nasional”</h4>
                            <p className="whitespace-pre-line">
                                {`
                                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.

                                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                                
                                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                                `}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-10">
                        <span className="text-orange-500 text-h4 font-bold">Free</span>
                        <button className={styles.orderBtn}>Order Now</button>
                    </div>
                </div>
            </PageWrapper>
        </Layout>
    )
}

export default EventInformation