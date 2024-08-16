import { useEffect, useRef, useState } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "./EditSection.css";

const data = [
  {
    title: "title 1",
    link: "link 1",
    img: "adv-three.ed0ec4ece2573f81e9a3.png",
  },
  {
    title: "title 2",
    link: "link 2",
    img: "adv-two.86856c8bd957e2fbea4e.png",
  },
  {
    title: "title 3",
    link: "link 3",
    img: "adv-one.bd0d3e8b986138b8e229.png",
  },
];

function EditSection({ setModalShow, modalShow, activeEditModal }) {
  const onCloseModal = () => setModalShow(false);
  const [sectionData, setsectionData] = useState([]);

  const add = () => {
    setsectionData((prev) => [
      ...prev,
      {
        title: "",
        link: "",
      },
    ]);
  };

  const deleteSection = (e, i) => {
    setsectionData(sectionData.filter((item, index) => index !== i));
  };

  useEffect(() => {
    setsectionData(data);
  }, []);

  const handleInputChange = (e, i) => {
    setsectionData((prev) =>
      prev.map((el, index) => {
        if (index == i) {
          return {
            ...el,
            [e.target.name]: e.target.value,
          };
        } else {
          return el;
        }
      })
    );
  };

  const handleFileChange = (e, i) => {
    setsectionData((prev) =>
      prev.map((el, index) => {
        if (index == i) {
          return {
            ...el,
            file: e.target.files[0],
          };
        } else {
          return el;
        }
      })
    );
  };

  const submit = (e) => {
    e.preventDefault();
    onCloseModal();
    console.log(sectionData);
  };

  return (
    <div className="edit-section">
      <div>
        <Modal open={modalShow} onClose={onCloseModal} center>
          <form onSubmit={submit}>
            <div>
              {" "}
              <h2>{activeEditModal}</h2>
            </div>
            {sectionData.map((section, i) => (
              <div className="wrapper" key={i}>
                <h4>
                  {sectionData.length == 1 ? null : (
                    <img
                      style={{ width: "25px", cursor: "pointer" }}
                      src="delete.svg"
                      alt=""
                      onClick={(e) => deleteSection(e, i)}
                    />
                  )}
                  {i + 1} صورة رقم{" "}
                </h4>
                <p>*صورة البنر</p>
                <span>* المقاس المناسب للصورة هو 1108×428 بكسل</span>
                <label htmlFor={`file ${i}`}>
                  {sectionData[i].img ? (
                    <img
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      src={sectionData[i].img}
                    />
                  ) : sectionData[i].file ? (
                    <img
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      src={URL.createObjectURL(sectionData[i].file)}
                      alt=""
                    />
                  ) : (
                    <>
                      <img
                        style={{ width: "60px" }}
                        src="/landscape-placeholder-svgrepo-com.svg"
                        alt=""
                      />
                      <span>ارفع صورة (jpg, jpeg, gif, png)</span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id={`file ${i}`}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, i)}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  required
                  onChange={(e) => handleInputChange(e, i)}
                  value={sectionData[i].title}
                />
                <input
                  type="text"
                  name="link"
                  placeholder="Link"
                  required
                  onChange={(e) => handleInputChange(e, i)}
                  value={sectionData[i].link}
                />
              </div>
            ))}
            <button className="add" onClick={add}>
              اضافة +
            </button>
            <button className="submit" type="submit">
              حفظ التغيرات
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default EditSection;
