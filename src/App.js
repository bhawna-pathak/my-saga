import "./App.css";
import { getAll } from "./actions";
import { connect } from "react-redux";

function App({ users, getUsers }) {
  return (
    <div>
      <button onClick={getUsers}>Show All Users</button>
      <div>
        {users.length &&
          users.map((item, i) => (
            <li key={i}>
              <span>{item.name}</span>
            </li>
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { users: state.list };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
