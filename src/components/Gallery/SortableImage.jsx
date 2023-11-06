import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Checkbox } from "@nextui-org/react";

const SortableImage = ({ handleChecked, index, image } ) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: image.id });

    const style = {
        transition: transition || undefined,
        transform: CSS.Transform.toString(transform),

        height: `${index === 0 ? "350px" : "200px"}`,
        width: `${index === 0 ? "350px" : "200px"}`,
        gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
        gridRow: `${index === 0 ? "1 / span 2" : ""}`,
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="hover:bg-black hover:bg-opacity-30"
        >
            <Checkbox className={`scale-125 absolute ml-4 mt-4`} value={image.id} onChange={handleChecked} size="md" color="primary"></Checkbox>
            <img className="rounded-lg" src={image.img} alt={`image${image.id}`} />
        </div>
    );
};

export default SortableImage;