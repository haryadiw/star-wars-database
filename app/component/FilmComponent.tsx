import React from 'react';

export default function FilmComponent(value: any) {

  const valuex = value.value;

  return (
    <div>
    <h2 className="mt-5">Film</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Director</th>
          <th scope="col">Producer</th>
          <th scope="col">Release Date</th>
          <th scope="col">Opening Crawl</th>
        </tr>
        </thead>
        {valuex.length ? (
          <tbody>
            {valuex.map((item: any, key: any) => (
              <tr>
                <td scope="col">{item[0].title}</td>
                <td scope="col">{item[0].director}</td>
                <td scope="col">{item[0].producer}</td>
                <td scope="col">{item[0].release_date}</td>
                <td scope="col">{item[0].opening_crawl}</td>
             </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan="5">No Film</td>
            </tr>
          </tbody>
        )}
      
    </table></div>
  );
}