import CountUp from 'react-countup';

export default function Icon() {
    return (
        <div className="bg-black">
            <table className="text-white rounded-lg overflow-hidden table-fixed border-separate border-spacing-0">
                <tbody>
                    <tr>
                        <td className="p-12 border-r-7 border-b-7 border-gray-300 text-center align-middle">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={5} duration={3} />+
                            </p>
                            Years Experience
                        </td>
                        <td className="p-12 border-b-7 border-gray-300 text-center">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={35} duration={3} />+
                            </p>
                            Projects Completed
                        </td>
                    </tr>
                    <tr>
                        <td className="p-12 border-r-7 border-gray-300 text-center align-middle">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={40} duration={5} />+
                            </p>
                            Satisfied Clients
                        </td>
                        <td className="p-12 text-center align-middle">
                            <p className="text-4xl font-semibold pb-3">
                                <CountUp end={100} duration={4} />+
                            </p>
                            Followers
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
