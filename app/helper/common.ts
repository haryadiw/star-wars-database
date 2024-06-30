export function getPeopleId(url : string) {

    var trim = "https://swapi.dev/api/people/";

    url = url.replace(trim, "");
    var id = url.replace("/", "");

    return id;   
  
}
