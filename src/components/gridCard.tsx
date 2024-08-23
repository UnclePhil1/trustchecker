import { ShieldCheck, CloudLightning } from 'lucide-react';
import React from 'react';

interface ProjectProps {
    name: string;
    price: string;
    change: string;
    marketCap: string;
    communityVote: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chartData: any;
}

const ProjectCard: React.FC<ProjectProps> = ({
    name,
    price,
    change,
    marketCap,
    communityVote,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    chartData,
}) => {
    return (
        <div className="bg-secondary rounded-lg shadow-md p-4 flex flex-col gap-4">
            <div className="flex gap-4 w-full justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/images/btc.png" alt="Bitcoin Logo" className="w-6 h-6" />
                    <p className="text-dark text-sm font-bold">{name}</p>
                </div>
                <div className="flex items-center gap-2 px-2 rounded-md bg-greendark">
                    <p className="text-secondary text-sm font-normal">Very High</p>
                    <CloudLightning className='w-4 h-4'/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-start items-start lg:justify-between lg:items-center">
                <div>
                    <p className="text-3xl text-dark font-bold">{price}</p>
                    <p className="text-sm text-greendark">{change}</p>
                </div>
                <div className="w-[180px] h-[120px] bg-dark rounded-lg relative">
                    <img src="/images/trade.png" alt="Bitcoin Logo" className="w-full h-full" />
                    <p className='text-[15px] absolute top-2 left-2'>24hr price</p>
                </div>
            </div>
            <div className='flex gap-4 justify-start items-center'>
                <div className="flex flex-col justify-start items-start">
                    <p className="text-sm text-dark">{marketCap}</p>
                    <p className="text-sm text-gray-600 font-semibold">Market Cap</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="text-sm text-pinkish">{communityVote}</p>
                    <p className="text-sm text-pinkish font-semibold">Community Vote</p>
                </div>
            </div>
        </div>
    );
};

const GridCard: React.FC = () => {
    const projects = [
        {
            name: 'Bitcoin',
            price: '$55,952',
            change: '+23% (+3.05%)',
            marketCap: '5m',
            communityVote: '99%',
            chartData: [
                { x: 0, y: 54 },
                { x: 1, y: 52 },
                { x: 2, y: 55 },
                { x: 3, y: 58 },
                { x: 4, y: 62 },
                { x: 5, y: 59 },
                { x: 6, y: 61 },
            ],
        },
        {
            name: 'Solana',
            price: '$152',
            change: '+23% (+3.05%)',
            marketCap: '5m',
            communityVote: '90%',
            chartData: [
                { x: 0, y: 140 },
                { x: 1, y: 142 },
                { x: 2, y: 145 },
                { x: 3, y: 148 },
                { x: 4, y: 152 },
                { x: 5, y: 149 },
                { x: 6, y: 151 },
            ],
        },
        {
            name: 'Ethereum',
            price: '$2,552',
            change: '+23% (+3.05%)',
            marketCap: '5m',
            communityVote: '95%',
            chartData: [
                { x: 0, y: 250 },
                { x: 1, y: 252 },
                { x: 2, y: 255 },
                { x: 3, y: 258 },
                { x: 4, y: 262 },
                { x: 5, y: 259 },
                { x: 6, y: 261 },
            ],
        },
    ];

    return (
        <div className="bg-dark min-h-screen text-white p-8">
            <h1 className="text-3xl font-bold mb-4 text-greenish">What we offer</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-4 w-full text-center">
                    <div className="flex justify-center items-center p-2 rounded-md bg-greenish/20 w-[50px] h-[50px]">
                        <ShieldCheck className='text-greendark w-full' />
                    </div>
                    <h2 className="text-lg font-bold">Building Trust and Security</h2>
                    <p>
                        Allowing the community to vet project builds trust and security among devs
                        and community members.
                    </p>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-4 w-full text-center">
                    <div className="flex justify-center items-center p-2 rounded-md bg-greenish/20 w-[50px] h-[50px]">
                        <ShieldCheck className='text-greendark w-full' />
                    </div>
                    <h2 className="text-lg font-bold">Open Source Codes</h2>
                    <p>
                        Codes for projects would be available for scrutiny and transparency.
                    </p>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-4 w-full text-center">
                    <div className="flex justify-center items-center p-2 rounded-md bg-greenish/20 w-[50px] h-[50px]">
                        <ShieldCheck className='text-greendark w-full' />
                    </div>
                    <h2 className="text-lg font-bold">Community Engagement</h2>
                    <p>
                        Share your research and data with community members, ape and grow
                        together.
                    </p>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-greenish mt-8">Top Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        price={project.price}
                        change={project.change}
                        marketCap={project.marketCap}
                        communityVote={project.communityVote}
                        chartData={project.chartData}
                    />
                ))}
            </div>
        </div>
    );
};

export default GridCard;
