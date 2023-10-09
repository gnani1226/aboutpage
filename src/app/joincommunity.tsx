import React from 'react';

const Community = () => {
    return (
        <div className='w-full gap-4 lg:gap-10 flex flex-col md:flex-row p-2 lg:p-8 community-icon rounded-md border border-1 border-gray-700'>
            <div className='w-full lg:w-[50%]'>
                <h1 className='text-4xl tracking-tighter pb-10'>Join our Team</h1>
                <p className='tracking-tighter font-mono text-lg pb-4'>
                    We are constantly looking for talented individuals who resonate with our vision. If you think you would like to join our team, <span className='text-purple-500 italic'><a href="#">get in touch with us</a></span>.
                </p>
                <p className='tracking-tighter text-lg font-mono'>
                    If you wish to contribute to our products and earn a bounty, you can visit our <span className='text-purple-500 italic'><a target='_blank' href="https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128">$1M Developer Bounty</a></span> Program
                </p>
                <div className='flex gap-2 mt-4'>
                    <button className='border border-1 py-1 bg-white text-black font-semibold px-4 rounded-lg hover:bg-blue-500 hover:text-gray-900 hover:border-none'>Join Discord</button>
                    <button className='border border-1 py-1 bg-transparent outline-none font-semibold px-4 rounded-lg hover:bg-purple-800 hover:border-none'>star us on github</button>
                </div>
            </div>
            <iframe className="w-full md:w-[40%] rounded-md" src="https://www.youtube.com/embed/zCLzvoSvF7E?si=ILQgYi6ZoYFpmBeh"></iframe>
        </div>
    );
};

export default Community;
