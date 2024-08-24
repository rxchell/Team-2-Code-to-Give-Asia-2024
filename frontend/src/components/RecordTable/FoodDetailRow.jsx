export default function FoodDetailRow({ title, info }) {
    return (
        <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-semibold">{title}</td>
            <td className="border border-gray-300 px-4 py-2">{info}</td>
        </tr>
    )
};