import axios from "axios";

interface Pokemon {
    id: number;
    name: string;
    img: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities:string;

}


const getData = async ():Promise<Pokemon[]> => {

  const response = [];
  for (let i = 0; i <= 5; i++) {

  let id = Math.floor(Math.random() * 1017) + 1;
    
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id + i}`);
    let abilities = ''
    for (let i = 0; i < data.data.abilities.length; i++) {
        const element = data.data.abilities[i];
        abilities = abilities + ` ${element.ability.name},`
    }
    let obj = {
        id: id + i,
        name: data.data.name,
        img: data.data.sprites.front_default,
        base_experience:  data.data.base_experience,
        height: data.data.height,
        weight: data.data.weight,
        abilities:abilities,
    }
    response.push(obj);
  }

  return response;
};

export { getData };
