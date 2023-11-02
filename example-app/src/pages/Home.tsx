import { Link } from "react-router-dom";
import useUiStore from "../store/uiStore";
import { ACTIONS } from "../store/uiStore";

export default function Home() {
    const resultData = useUiStore(state => state.resultData);
    const loading = useUiStore(state => state.loading);
    return (
        <div>
            Loading: {""+loading}
            <br/>
              Current People: {resultData.count} <button disabled={loading} onClick={() => ACTIONS.getPeople()}>Refresh</button>

              <br/>
              <table>
                <thead>
                    <th>name</th>
                    <th>height</th>
                    <th>url</th>
                </thead>
                <tbody>
                    {resultData.results.map((p) => {
                    return (<tr>
                         <td>{p.name}</td>
                         <td>{p.height}</td>
                         <td>{p.url}</td>
                     </tr>);
                    })}
                   
                </tbody>
                
              </table>
              <Link to="/page-2">Click here for page 2.</Link>
        </div>
    );
}