import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const subjectMarksData = [
    {
      id: 1,
      name: "Jhankar",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 90,
    },
    {
      id: 2,
      name: "Niaz",
      math_marks: 78,
      physics_marks: 85,
      chemistry_marks: 82,
    },
    {
      id: 3,
      name: "Tania",
      math_marks: 100,
      physics_marks: 100,
      chemistry_marks: 100,
    },
    {
      id: 4,
      name: "Fahmid",
      math_marks: 70,
      physics_marks: 75,
      chemistry_marks: 72,
    },
    {
      id: 5,
      name: "Masud",
      math_marks: 88,
      physics_marks: 80,
      chemistry_marks: 85,
    },
    {
      id: 6,
      name: "Rahi",
      math_marks: 95,
      physics_marks: 96,
      chemistry_marks: 92,
    },
    {
      id: 7,
      name: "Sophia",
      math_marks: 82,
      physics_marks: 85,
      chemistry_marks: 80,
    },
    {
      id: 8,
      name: "Masum",
      math_marks: 75,
      physics_marks: 72,
      chemistry_marks: 78,
    },
    {
      id: 9,
      name: "Mizan",
      math_marks: 90,
      physics_marks: 88,
      chemistry_marks: 85,
    },
    {
      id: 10,
      name: "Sumi",
      math_marks: 87,
      physics_marks: 90,
      chemistry_marks: 92,
    },
  ];

  return (
    <div className="">
      <LChart width={450} height={400} data={subjectMarksData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math_marks" stroke="red" />
        <Line type="monotone" dataKey="physics_marks" stroke="green" />
        <Line type="monotone" dataKey="chemistry_marks" stroke="blue" />
      </LChart>
    </div>
  );
};

export default LineChart;
