import React from 'react';
export default function FoodTag({ tag }) {
    let tagColor = "";

    switch (tag) {
        case "Halal":
            tagColor = "bg-halal";
            break;
        case "Spicy":
            tagColor = "bg-spicy";
            break;
        case "Vegetarian":
            tagColor = "bg-vegan";
            break;
        case "Gluten-Free":
            tagColor = "bg-glutenFree";
            break;
        case "Low-Sugar":
            tagColor = "bg-lowSugar";
            break;
        default:
            tagColor = "bg-gray-500";
            break;
    }

    return (
        <div className={`rounded-full px-4 py-1 font-medium text-gray-50 ${tagColor} whitespace-nowrap`}>{tag ? tag : "N/A"}</div>
    )
}