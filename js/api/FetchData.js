export const fetchData = async () => {
    const response = await fetch("https://hp-api.herokuapp.com/api/characters/");
    const json = await response.json();
    return json;
  };