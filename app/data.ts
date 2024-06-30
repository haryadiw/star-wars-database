import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";

export async function getSpecies(query?: any | null) {

  const res = await fetch("https://swapi.dev/api/species");
  const temp = await res.json();
  const result = new Array();

  var arr = temp["results"].map((v: any) => Object.assign(v, { id: 0 }));

  query.forEach((item: any, index: any) => {

    result.push(arr.filter((e: { url: string; }) => e.url === item));

  });

  return result;

}

export async function getStarShip(query?: any | null) {

  const res = await fetch("https://swapi.dev/api/starships");
  const temp = await res.json();
  const result = new Array();

  var arr = temp["results"].map((v: any) => Object.assign(v, { id: 0 }));

  query.forEach((item: any, index: any) => {

    var t = arr.filter((e: { url: string; }) => e.url === item);
    if (t != null && t != undefined) {
      result.push(t);
    }

  });


  return result;

}

export async function getVehicles(query?: any | null) {

  const res = await fetch("https://swapi.dev/api/vehicles");
  const temp = await res.json();
  const result = new Array();

  var arr = temp["results"].map((v: any) => Object.assign(v, { id: 0 }));

  query.forEach((item: any, index: any) => {

    result.push(arr.filter((e: { url: string; }) => e.url === item));

  });

  return result;

}


export async function getFilms(query?: any | null) {

  const res = await fetch("https://swapi.dev/api/films");
  const temp = await res.json();
  const result = new Array();

  var arr = temp["results"].map((v: any) => Object.assign(v, { id: 0 }));

  query.forEach((item: any, index: any) => {

    result.push(arr.filter((e: { url: string; }) => e.url === item));

  });

  return result;

}

export async function getPeople() {

  const res = await fetch("https://swapi.dev/api/people");

  return (await res.json());

}

export async function getPerson(id: string) {

  const res = await fetch("https://swapi.dev/api/people/" + id);

  return (await res.json());

}