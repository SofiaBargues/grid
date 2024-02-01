import { data } from "../data";

function Card({
  item,
  i,
  shape,
}: {
  item: {
    title: string;
    value: number;
  };
  i: number;
  shape: "horizontal" | "vertical" | "square";
}) {
  const boxStyle =
    "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center";

  return (
    <div
      key={i}
      className={`${boxStyle} ${
        shape === "horizontal"
          ? "md:col-span-2"
          : shape === "vertical"
          ? "md:row-span-2"
          : ""
      }`}
    >
      <h2 className="text-xl text-gray-600">{item.title}</h2>
      <p className="font-bold text-2xl">{item.value}</p>
    </div>
  );
}

const CssGrid = () => {
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
      {data.map((item, i) => (
        <Card
          key={i}
          item={item}
          i={i}
          shape={
            i === 0 || i === 4 || i === 5 || i === 6
              ? "horizontal"
              : i === 2
              ? "vertical"
              : "square"
          }
        />
      ))}
    </div>
  );
};

export default CssGrid;
