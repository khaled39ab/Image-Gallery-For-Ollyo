import { useSortable } from "@dnd-kit/sortable";
import ImgCard from "./ImgCard/ImgCard";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = (props) => {
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.image.id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <ImgCard
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            {...props}
        >

        </ImgCard>
    );
};

export default SortableImage;