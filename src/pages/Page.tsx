import "./Page.css";
import { useNavigate } from "@/router";

const pageList = ["1", "2", "3"] as const;

type Props = {
  name: (typeof pageList)[number];
};

const Template = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1 className="title">Page {props.name}</h1>
      <div>
        {pageList.map((name) => (
          <button className="button" onClick={() => navigate(`/${name}`)}>
            Page {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Template;
