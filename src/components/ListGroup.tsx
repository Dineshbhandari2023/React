import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["Dinesh", "Sushan", "Sachin", "Dhankuta"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
