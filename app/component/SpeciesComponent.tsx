import React from 'react';

export default function SpeciesComponent(value: any) {

  const valuex = value.value;

  return (
    <div>
    <h2 className="mt-5">Species</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Classification</th>
          <th scope="col">Designation</th>
          <th scope="col">Average Height</th>
          <th scope="col">Skin Colors</th>
          <th scope="col">Hair Colors</th>
          <th scope="col">Eye Colors</th>
          <th scope="col">Average Lifespan</th>
          <th scope="col">Homeworld</th>
          <th scope="col">Language</th>
        </tr>
        </thead>
        {valuex.length ? (
          <tbody>
            {valuex.map((item: any, key: any) => (
              <tr>
                <td scope="col">{item[0].name}</td>
                <td scope="col">{item[0].classification}</td>
                <td scope="col">{item[0].designation}</td>
                <td scope="col">{item[0].average_height}</td>
                <td scope="col">{item[0].skin_colors}</td>

                <td scope="col">{item[0].hair_colors}</td>
                <td scope="col">{item[0].eye_colors}</td>
                <td scope="col">{item[0].average_lifespan}</td>
                <td scope="col">{item[0].homeworld}</td>
                <td scope="col">{item[0].language}</td>
             </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan="10">No Species</td>
            </tr>
          </tbody>
        )}
      
    </table></div>
  );
}