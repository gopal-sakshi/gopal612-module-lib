import { Club } from "./club-interface";

var club1:Club = {
  name:'Real Madrid',
  manager: 'Ancelotti',
  isUclWinner: true,
  address23: { city: 'Spain', country: 'Madrid' },
  clTitles: 14
}

var club2:Club = {
    name:'Barcelona',
    manager: 'Xavi',    
    clTitles: 6
}

export function mostUclTitles() {
    return club1.clTitles > club2.clTitles ? club1.name : club2.name;
}

export function mostUclTitlesParams(club1:Club, club2:Club) {
    return club1.clTitles > club2.clTitles ? club1.name : club2.name;
}