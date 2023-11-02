import { Link } from "react-router-dom";
import useUiStore from "../store/uiStore";
import { actions } from "../store/actions";

export default function Home() {
    const filteredData = useUiStore(state => state.filteredData);
    const filter = useUiStore(state => state.filter);
    const loading = useUiStore(state => state.loading);
    
    return (
        <div>
            Loading: {""+loading}
            <br/>
              Current People: {filteredData.count} <button disabled={loading} onClick={() => actions.getPeople()}>Refresh</button>
              <br/>
              Filters:
              <br/>
              <ul>
                    {Object.values(filter.films).map((item) => (
                    <li key={item.id}>
                        <input
                        type="checkbox"
                        checked={item.enabled}
                        onChange={(e) => actions.setFilmFilterEnabled(item.id)}
                        />
                        {item.name}
                    </li>
                    ))}
              </ul>
              <br/>
              <table>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>height</th>
                    <th>url</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.results.map((p) => {
                    return (<tr key={p.url}>
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