import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPerson, getFilms, getSpecies, getVehicles, getStarShip } from "../data";
import FilmComponent from "~/component/FilmComponent";
import SpeciesComponent from "~/component/SpeciesComponent";
import VehiclesComponent from "~/component/VehiclesComponent";
import StarShipComponent from "~/component/StarShipComponent";

export const loader = async ({ params }) => {

  const person = await getPerson(params.peopleId);
  const films = await getFilms(person["films"]);
  const species = await getSpecies(person["species"]);
  const vehicles = await getVehicles(person["vehicles"]);
  const starships = await getStarShip(person["starships"]);

  return json({ person, films, species, vehicles, starships });

};


export default function People() {

  const { person, films, species, vehicles, starships } = useLoaderData<typeof loader>();

  return (<div>
    <h2>Detail</h2>
    <table className="table">

      <tbody>
        <tr>
          <th width="15%"></th>
          <th width="5%"></th>
          <th width="80%"></th>
        </tr>
        <tr>
          <th >Name </th>
          <th >:</th>
          <td>{person.name}</td>
        </tr>
        <tr>
          <th >Height </th>
          <th >:</th>
          <td>{person.height}</td>
        </tr>
        <tr>
          <th >Mass </th>
          <th >:</th>
          <td>{person.mass}</td>
        </tr>
        <tr>
          <th >Hair Color </th>
          <th >:</th>
          <td>{person.hair_color}</td>
        </tr>
        <tr>
          <th >Skin Color </th>
          <th >:</th>
          <td>{person.skin_color}</td>
        </tr>
        <tr>
          <th >Eye Color </th>
          <th >:</th>
          <td>{person.eye_color}</td>
        </tr>
        <tr>
          <th >Birth Of Year </th>
          <th >:</th>
          <td>{person.birth_year}</td>
        </tr>
        <tr>
          <th >Gender </th>
          <th >:</th>
          <td>{person.gender}</td>
        </tr>
      </tbody>
    </table>
    
    <FilmComponent value={films} />
    <SpeciesComponent value={species} />
    <VehiclesComponent value={vehicles} />
    <StarShipComponent value={starships} />
    
  </div>)

    ;
}









