import React from "react";

interface TableData {
    name: string;
    price: string;
    supply: string;
    audit: boolean;
    score: string;
    comments: string[];
}

const data: TableData[] = [
    {
        name: "Bitcoin",
        price: "$55,551",
        supply: "21m",
        audit: false,
        score: "99%",
        comments: ["/images/pfp.png"], // Use actual image paths or URLs
    },
    {
        name: "Ethereum",
        price: "$2,515",
        supply: "12m",
        audit: true,
        score: "99%",
        comments: ["/images/pfp.png"],
    },
    {
        name: "Algoran",
        price: "$2,515",
        supply: "12m",
        audit: false,
        score: "99%",
        comments: ["/images/pfp.png"],
    },
    {
        name: "Base",
        price: "$2,515",
        supply: "12m",
        audit: true,
        score: "99%",
        comments: ["/images/pfp.png"],
    },
    {
        name: "Arbitrum",
        price: "$215",
        supply: "12m",
        audit: false,
        score: "99%",
        comments: ["/images/pfp.png"],
    },
    // Add more data as needed
];

const Table: React.FC = () => {
    return (
        <div className="overflow-x-auto md:p-6 rounded-lg">
            <table className="min-w-full bg-secondary/10 text-white md:rounded-lg text-sm">
                <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-500">
                        <th className="p-3 text-lg text-white sticky left-0 z-10 bg-secondary/10 md:bg-transparent">Name</th>
                        <th className="p-3 text-lg text-white">Price</th>
                        <th className="p-3 text-lg text-white">Supply</th>
                        <th className="p-3 text-lg text-white">Audit</th>
                        <th className="p-3 text-lg text-white">Score</th>
                        <th className="p-3 text-lg text-white">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-dark/50 transition-all">
                            <td className="p-3 flex items-center sticky left-0 bg-secondary/20 md:bg-transparent z-20">
                                <img src={item.name === "Bitcoin" ? "/images/btc.png" : "/images/eth.png"} alt={item.name} className="w-6 h-6 mr-2" />
                                {item.name}
                            </td>
                            <td className="p-3">{item.price}</td>
                            <td className="p-3">{item.supply}</td>
                            <td className="p-3">{item.audit ? "✔️" : "❌"}</td>
                            <td className={`p-3 ${item.score === "99%" ? "text-green-500" : "text-red-500"}`}>{item.score}</td>
                            <td className="p-3 flex space-x-2">
                                {item.comments.map((comment, i) => (
                                    <img key={i} src={comment} alt="Avatar" className="rounded-full" />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-full text-center">
                <button className="py-2 px-4 rounded-md bg-secondary/10 text-white mt-6 hover:bg-secondary/20 transition-all/20">View more projects</button>
            </div>
        </div>
    );
};

export default Table;
