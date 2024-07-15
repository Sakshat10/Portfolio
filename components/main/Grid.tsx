import { gridItems } from "@/constants";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

const Grid = () => {
  const getClassName = (index: number): string => {
    switch (index) {
      case 0:
        return "md:col-span-6 lg:col-span-3 lg:row-span-2";
      case 4:
        return "md:row-span-2 md:col-span-3 lg:col-span-3 lg:row-span-2";
      default:
        return "md:col-span-3 lg:col-span-2";
    }
  };

  return (
    <section id="about">
      <BentoGrid className="max-w-[90vw] w-full py-20 text-white z-50">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            className={getClassName(i)}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
