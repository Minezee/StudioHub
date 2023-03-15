const PageWrapper = ({children}) => {
    return (
        <div className='mx-[3rem] 2xl:mx-[6.5rem] flex flex-col min-h-screen'>
            {children}
        </div>
    )
}

export default PageWrapper