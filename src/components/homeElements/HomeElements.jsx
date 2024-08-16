import React, { useLayoutEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import "./HomeElements.css";
import Section from "../Section/Section";
import EditSection from "../EditSection/EditSection";
import AddStaticBanner from "../ِAddStaticBanner/AddStaticBanner";
import { request } from "../utils/Request";
import { Button } from "react-bootstrap";

const getSections = [
  {
    id: 1,
    title: "section 1",
  },
  {
    id: 2,
    title: "section 2",
  },
  {
    id: 3,
    title: "section 3",
  },
  {
    id: 4,
    title: "section 4",
  },
  {
    id: 5,
    title: "section 5",
  },
  {
    id: 6,
    title: "section 6",
  },
];

function HomeElements({ settoggleSidebar }) {
  const [activeEditSection, setactiveEditSection] = useState(null);

  const [modalShow, setModalShow] = useState(false);
  const [sections, setSections] = useState([]);
  const [activeEditModal, setactiveEditModal] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 10 } })
  );

  const getSectionsPos = (id) =>
    sections.findIndex((section) => section.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSections((sections) => {
      const originalPos = getSectionsPos(active.id);
      const newPos = getSectionsPos(over.id);

      return arrayMove(sections, originalPos, newPos);
    });
  };

  const handleMovingSections = async () => {
    try {
      const { data } = await request({
        url: "/api/dashboard/sections/order",
        method: "post",
        data: { sections },
      });
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    const getSections = async () => {
      try {
        const { data } = await request({
          url: "/api/website/sections?lang=en",
        });
        setSections(data);
      } catch (error) {
        console.error("Error fetching brands data:", error);
      }
    };
    getSections();
  }, []);

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <ul className="menu-sub home-sections">
          <li className="menu-sub-title">
            <label className="submenu-label back" htmlFor="sub-two">
              عناصر الصفحه الرئيسية
            </label>
            <div className="arrow left">&#8250;</div>
          </li>
          <li className="add-sections section-element">
            <input
              type="checkbox"
              id="sub-sections"
              className="submenu-toggle"
            />
            <label className="submenu-label " htmlFor="sub-sections">
              Add New Section
            </label>
            <ul className="menu-sub home-sections">
              <li className="menu-sub-title">
                <label className="submenu-label back" htmlFor="sub-sections">
                  اضافة سكشن جديد
                </label>
                <div className="arrow left">&#8250;</div>
              </li>
              <li className="add-wrapper-list">
                <div className="add-wrapper-sections">
                  <button
                    onClick={() => setactiveEditSection("ADD staticBanner")}
                  >
                    Static Banner{" "}
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Static Products")}
                  >
                    ADD Static Products
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Banner")}
                  >
                    ADD Dynamic Banner
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Products")}
                  >
                    ADD Dynamic Products
                  </button>
                  <button onClick={() => setactiveEditSection("ADD Features")}>
                    ADD Features
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Count Down")}
                  >
                    ADD Count Down
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD staticBanner")}
                  >
                    Static Banner{" "}
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Static Products")}
                  >
                    ADD Static Products
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Banner")}
                  >
                    ADD Dynamic Banner
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Products")}
                  >
                    ADD Dynamic Products
                  </button>
                  <button onClick={() => setactiveEditSection("ADD Features")}>
                    ADD Features
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Count Down")}
                  >
                    ADD Count Down
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD staticBanner")}
                  >
                    Static Banner{" "}
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Static Products")}
                  >
                    ADD Static Products
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Banner")}
                  >
                    ADD Dynamic Banner
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Dynamic Products")}
                  >
                    ADD Dynamic Products
                  </button>
                  <button onClick={() => setactiveEditSection("ADD Features")}>
                    ADD Features
                  </button>
                  <button
                    onClick={() => setactiveEditSection("ADD Count Down")}
                  >
                    ADD Count Down
                  </button>
                </div>
              </li>
            </ul>
          </li>

          <SortableContext
            items={sections}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((el) => (
              <div key={el.id}>
                <Section
                  id={el.id}
                  title={el.name}
                  setModalShow={setModalShow}
                  setactiveEditModal={setactiveEditModal}
                  settoggleSidebar={settoggleSidebar}
                />
              </div>
            ))}
          </SortableContext>
          <li style={{ padding: "12px 16px", height: "auto" }}>
            <Button
              type="submit"
              onClick={handleMovingSections}
              className="submit-button"
              variant="info"
            >
              حفظ التغييرات
            </Button>
          </li>
        </ul>
      </DndContext>
      <EditSection
        setModalShow={setModalShow}
        modalShow={modalShow}
        activeEditModal={activeEditModal}
      />

      <AddStaticBanner
        activeEditSection={activeEditSection}
        setactiveEditSection={setactiveEditSection}
      />
    </>
  );
}

export default HomeElements;
