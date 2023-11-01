import { Link } from "react-router-dom";
import useUiStore from "../store/uiStore";
import { ACTIONS } from "../store/uiStore";

export default function Home() {
    const bears = useUiStore(state => state.bears);
    const loading = useUiStore(state => state.loading);
    return (
        <div>
            Loading: {""+loading}
            <br/>
              Current Bears: {bears} <button onClick={() => ACTIONS.randomIncrease()}>Add</button>

              <br/>
              <Link to="/page-2">Click here for page 2.</Link>
        </div>
    );
}