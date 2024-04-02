import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";

const gridSize = 10;
const deviceLocations = {
  callBell: { x: 2, y: 3 },
  elevator: { x: 5, y: 5 },
  chimeBell: { x: 8, y: 2 },
};
const path = [
  { x: 0, y: 0 },
  { x: 2, y: 3 },
  { x: 5, y: 5 },
  { x: 8, y: 2 },
  { x: 9, y: 9 },
];

function RobotPage() {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [pathIndex, setPathIndex] = useState(0);
  const [action, setAction] = useState<string>("At the starting point");

  useEffect(() => {
    if (pathIndex < path.length - 1) {
      const timer = setTimeout(() => {
        setRobotPosition(path[pathIndex]);
        setPathIndex(pathIndex + 1);

        if (
          path[pathIndex].x === deviceLocations.callBell.x &&
          path[pathIndex].y === deviceLocations.callBell.y
        ) {
          setAction("Interacting with Call Bell");
        } else if (
          path[pathIndex].x === deviceLocations.elevator.x &&
          path[pathIndex].y === deviceLocations.elevator.y
        ) {
          setAction("Interacting with Elevator");
        } else if (
          path[pathIndex].x === deviceLocations.chimeBell.x &&
          path[pathIndex].y === deviceLocations.chimeBell.y
        ) {
          setAction("Interacting with Chime Bell");
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [robotPosition, pathIndex]);

  return (
    <>
      <div className="grid">
        {Array.from({ length: gridSize }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: gridSize }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${
                  robotPosition.x === colIndex && robotPosition.y === rowIndex
                    ? "robot"
                    : ""
                }`}
              >
                {deviceLocations.callBell.x === colIndex &&
                  deviceLocations.callBell.y === rowIndex &&
                  "C"}
                {deviceLocations.elevator.x === colIndex &&
                  deviceLocations.elevator.y === rowIndex &&
                  "E"}
                {deviceLocations.chimeBell.x === colIndex &&
                  deviceLocations.chimeBell.y === rowIndex &&
                  "B"}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        disabled={pathIndex !== path.length - 1}
        onClick={() => {
          setPathIndex(0);
          setRobotPosition({ x: 0, y: 0 });
          setAction("At the starting point");
        }}
      >
        Restart
      </button>
      <h3>State: {action}</h3>
    </>
  );
}

export default Layout(RobotPage);
