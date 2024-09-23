import '../Styles/JustSection.css'
import atmcards from '../Assets/atmcards.png';

const JustSection = () => {
    return(
        <div className='membershipholder'>
            <div className='JSBackground'>
                <div className='justsectionContents'>
                    <p className='JSheading1'>We Have more</p>
                    <p className='JSheading2'>Just for You...</p>
                    <p className='JSContent1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className='JSContent2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <button className='JSButton'>Learn More</button>
                </div>

                <div className='justSectionImage'>
                <img className='Atmcards' src={atmcards} alt="Logo"  />
                </div>

            </div>
        </div>
    );
};
export default JustSection;