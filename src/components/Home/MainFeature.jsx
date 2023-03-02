const MainFeature = ({feature}) => {
    return (
        <div>
            <div className="mt-[4.75rem] text-center">
                <h2 className="text-orange-500 text-5xl font-black">MAIN FEATURE</h2>
                <p className="text-2xl font-semibold">Take advantage of our features to get information about the world of music</p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-[6.25rem] text-white text-[2.5rem] font-black">
                {feature.map(menu => (
                <h3 key={menu.name} className="bg-yellow-400 w-48 h-[12.5rem] flex flex-col items-center justify-center rounded-2xl">
                    <menu.icon className="h-[5.5rem] w-auto" />
                    {menu.name}
                </h3>
                ))}
            </div>
        </div>
    )
}

export default MainFeature