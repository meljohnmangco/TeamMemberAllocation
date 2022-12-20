
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Teams = () => {

 	const { handleTeamSelectionChange, selectedTeam } = useContext(DataContext);

	return (
		<select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange}>
			<option value="TeamA">TeamA</option>
			<option value="TeamB">TeamB</option>
			<option value="TeamC">TeamC</option>
			<option value="TeamD">TeamD</option>
		</select>	
	)
}


export default Teams;