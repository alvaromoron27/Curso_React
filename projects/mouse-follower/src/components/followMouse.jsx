import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setposition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setposition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    //Se ejecuta solo cuando el componente se desmonta o cambian las dependencias
    return () => {
      //desuscripcion del evento
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <div className="container">
      <div className="titleProyect">
        <h3>Mouse follower</h3>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div className="container-buttonControlMouseFollow">
        <button
          className={`buttonControlMouseFollow ${!enabled ? "active" : ""}`}
          onClick={() => setEnabled(!enabled)}
        >
          {enabled ? "Dejar de seguir" : "Seguir ratón"}
        </button>
      </div>
    </div>
  );
};

export default FollowMouse;
