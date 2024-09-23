import '../Styles/UpcomingResorts.css'

const UpcomingResorts = () => {
    return(
        <div className='UpcomingResortsContainer'>
            <div className='RSHeading-placer'>
                <p className='Heading'>Coming Soon...</p>
            </div>
            <div className='URCenterholder'>
                <div className='UpcomingResortCards1'>
                    <p className='RSHeading'>Vasundra</p>
                    <p className='RSSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='URButton'>Learn More</button>
                </div>
                <div className='UpcomingResortCards2'>
                    <p className='RSHeading'>Sala</p>
                    <p className='RSSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='URButton'>Learn More</button>
                </div>
                <div className='UpcomingResortCards3'>
                    <p className='RSHeading'>Kapila</p>
                    <p className='RSSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='URButton'>Learn More</button>
                </div>
            </div>

        </div> 
    );
};
export default UpcomingResorts;