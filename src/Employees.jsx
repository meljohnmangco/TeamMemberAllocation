
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";

const Employees = () => {

	return (
		<main className="container">  
			<div className="row justify-content-center mt-3 mb-3">
				<div className="col-12 col-lg-6 col-md-6">
					<Teams/>
				</div>
			</div>

			<div className="row justify-content-center mt-3 mb-3 text-center">
				<div className="col-lg-8">
					<div className="card-collection">
						<TeamMembers />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Employees;