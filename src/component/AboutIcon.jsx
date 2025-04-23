import CountUp from 'react-countup';

export default function Icon() {
    return (
        <div className="bg-black">
            <table className="w-full text-white rounded-lg overflow-hidden">
                <tbody>
                    <tr className=" border-gray-300">
                        <td className="p-12 border-gray-300 text-center grid grid-cols-1">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={5} duration={2} />+
                            </p>
                            Years Experience
                        </td>
                        <td className="p-12 text-center">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={35} duration={2} />+
                            </p>
                            Projects Completed
                        </td>
                    </tr>
                    <tr>
                        <td className="p-12  border-gray-300 text-center">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={40} duration={2} />+
                            </p>
                            Satisfied Clients
                        </td>
                        <td className="p-12 text-center">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={100} duration={2} />+
                            </p>
                            Followers
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}