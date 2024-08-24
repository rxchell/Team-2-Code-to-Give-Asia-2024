export default function GuidelinesPage() {
    return (
        <>
        <div className='flex flex-col items-center w-full'>
        <div className='flex space-x-2 mt-4'>
            <p className='text-2xl font-bold mb-4'> You are encouraged and protected to donate!</p>
        </div>
        
        
        <div className='flex justify-center w-3/4'>
            <div className='bg-white box justify-center' >
                <h2 className='text-lg font-bold mb-4'>About the Good Samaritan Food Donation Bill</h2>
                <div>
                    <p>The Good Samaritan Food Donation Bill, which was tabled by Member of Parliament (MP), 
                        <strong>will protect donors from criminal or civil liability for any death or personal injury resulting from consuming donated food</strong>, 
                        provided certain conditions to ensure food safety and hygiene are met.
                        <br/><br/>To be granted liability waivers, donors 
                        <strong> must fulfil four conditions</strong> to ensure food safety and hygiene. They are:
                    </p>

                    <ul className="list-disc pl-5 mb-5">
                            <li>The food must not be unsafe or unsuitable at the time it was donated.</li>
                            <li>The donor must inform the recipient of any particular requirements to handle the food to ensure it remains safe to consume.</li>
                            <li>The donor must inform the recipient of any time limit within which the food remains safe and suitable.</li>
                            <li>The donor must take all reasonable measures to comply with food safety and hygiene requirements up to the point of the donation.</li>
                    </ul>

                    <p>For text of the bill, please refer to <a href="https://www.parliament.gov.sg/docs/default-source/bills-introduced/good-samaritan-food-donation-bill-22-2024.pdf?sfvrsn=83d45608_3" className="text-[#99CA3B]">this link</a>.</p>
                </div>
            </div>
        </div>
        
        </div>
        </>
    );
};