import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const [path, setPath] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location) {
      let p = location.pathname;
      p = p
        .split("/")
        .filter((item) => item !== "")
        .map((item) => item.replace(/[%20]/g, " "));
      setPath(p);
    }
  }, [location]);

  return (
    <div className="BreadCrumb">
      <Link to="/">home</Link>
      <span>/</span>
      {path
        ? path.map((string, i) => (
            <div key={i}>
              {i === 0 && path.length > 1 ? (
                <Link to={`/${string}`}>{string}</Link>
              ) : i === 0 ? (
                <>{string}</>
              ) : i < path.length - 1 ? (
                <Link to={`/${path[0]}/${string}`}>{string}</Link>
              ) : (
                <>{string}</>
              )}
              {i < path.length - 1 ? <span>/</span> : null}
            </div>
          ))
        : null}
    </div>
  );
}
