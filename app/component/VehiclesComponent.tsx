import React from 'react';

export default function VehiclesComponent(value: any) {

  const valuex = value.value;

  return (
    <div>
    <h2 className="mt-5">Vehicle</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Model</th>
          <th scope="col">Manufacturer</th>
          <th scope="col">Cost In Credits</th>
          <th scope="col">Length</th>
          <th scope="col">Max Atmosphering Speed</th>
          <th scope="col">Crew</th>
          <th scope="col">Passengers</th>
          <th scope="col">Cargo Capacity</th>
          <th scope="col">Consumables</th>
          <th scope="col">Vehicle Class</th>
        </tr>
        </thead>
        {valuex.length ? (
          <tbody>
            {valuex.map((item: any, key: any) => (
              <tr>
                <td scope="col">{item[0]?.name}</td>
                <td scope="col">{item[0]?.model}</td>
                <td scope="col">{item[0]?.manufacturer}</td>
                <td scope="col">{item[0]?.cost_in_credits}</td>
                <td scope="col">{item[0]?.length}</td>

                <td scope="col">{item[0]?.max_atmosphering_speed}</td>
                <td scope="col">{item[0]?.crew}</td>
                <td scope="col">{item[0]?.passengers}</td>
                <td scope="col">{item[0]?.cargo_capacity}</td>
                <td scope="col">{item[0]?.consumables}</td>
                <td scope="col">{item[0]?.vehicle_class}</td>
             </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan="11">No Vehicles</td>
            </tr>
          </tbody>
        )}
      
    </table></div>
  );
}