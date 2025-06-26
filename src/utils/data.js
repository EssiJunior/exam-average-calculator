import {
    calculator,
    uy1
} from "../assets";

const templateCards = [{
        id: "uy1",
        title: "University of Yaounde I",
        icon: uy1,
        color: "from-emerald-500 to-teal-400",
        ringColor: "ring-emerald-500",
        bubbleColor: "bg-emerald-500",
    },
    {
        id: "custom",
        title: "Custom Template",
        icon: calculator,
        color: "from-purple-500 to-pink-500",
        ringColor: "ring-purple-500",
        bubbleColor: "bg-purple-500",
    },
];

const calculatorDataByTemplate = {
    'uy1': {
        "title": "University of Yaounde I",
        "description": "The University of Yaounde I system converts numerical grades (0 - 100) into a standardized grading system. It returns: a formatted numerical grade (0.0 to 4.0), a letter grade (F to A), and a qualitative mention (e.g., 'Echec', 'Passable'). The grading scale is progressive, with specific score ranges mapped to each grade level. Higher scores yield better grades and mentions, starting from failing grades (F, E) through passing grades (D to A)."
    }
}
export {
    templateCards,
    calculatorDataByTemplate
};