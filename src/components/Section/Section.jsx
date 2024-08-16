import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Sextion.css";

function Section({ id, title, setModalShow, setactiveEditModal }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleClick = () => {
    setactiveEditModal(title);
    setModalShow(true);
  };

  return (
    <>
      <li
        className="section-element"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div className="wrapper flex">
          <div className="left">
            <img src="delete.svg" alt="" />
            <img src="eddit.svg" alt="" onClick={handleClick} />
          </div>
          <div className="right">
            <span>{title}</span>
            <img src="move.svg" alt="" />
          </div>
        </div>
      </li>
    </>
  );
}

export default Section;
