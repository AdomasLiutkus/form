import { Injectable } from '@angular/core';
import { SelectItem } from '../model/select-item';
import { SelectItemBoolean } from '../model/select-item-boolean';
import { SelectItemCategory } from '../model/select-item-category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  typeList() : SelectItem[] {
    return [
      { id: 1, name: 'Namas'},
      { id: 2, name: 'Butas'},
      { id: 3, name: 'Kotedžas'}
    ];
  }

  roomCountList() : SelectItem[] {
    return [
      { id: 1, name: '1'},
      { id: 2, name: '2'},
      { id: 3, name: '3'},
      { id: 4, name: '4'},
      { id: 5, name: '5'},
      { id: 6, name: '>5'},
    ];
  }

  constructionYearList() : SelectItem[] {
    let returnList: SelectItem[] = [];

    for (var i = 1950; i < 2025; i++) {
      returnList.push({ id: i, name: `${i}`});
    }

    return returnList;
  }

  energyClassList() : SelectItem[] {
    return [
      { id: 1, name: 'D'},
      { id: 2, name: 'C'},
      { id: 3, name: 'B'},
      { id: 4, name: 'A'},
      { id: 5, name: 'A+'},
      { id: 6, name: 'A++'},
      { id: 7, name: 'A+++'},
    ];
  }

  booleanList() : SelectItemBoolean[] {
    return [
      { id: true, name: 'Taip'},
      { id: false, name: 'Ne'}
    ];
  }

  amountList()  : SelectItem[] {
    let returnList: SelectItem[] = [];

    for (var i = 1; i < 11; i++) {
      returnList.push({ id: i, name: `${i}`});
    }

    return returnList;
  }

  reviewFirstList() : SelectItem[] {
    return [
      { id: 1, name: 'Labai patiko'},
      { id: 2, name: 'Patiko'},
      { id: 3, name: 'Nepatiko'},
      { id: 4, name: 'Labai nepatiko'}
    ];
  }

  reviewSecondList() : SelectItemCategory[] {
    return [
      { id: 1, name: 'Surinko visus reikiamus duomenis', category: 1},
      { id: 2, name: 'Gražiai atrodė visas dizainas', category: 1},
      { id: 3, name: 'Neturėjau prie ko prisikabinti', category: 2},
      { id: 4, name: 'Esu naudojęs ir prastesnių formų', category: 2},
      { id: 5, name: 'Man nepatinka mėlyna spalva', category: 3},
      { id: 6, name: 'Labai ilgai užtruko', category: 3},
      { id: 7, name: 'Neleido įvesti, jog mano vaikam virš 100 metų!!', category: 4},
      { id: 8, name: 'Neradau kalbos pasirinkimo', category: 4},
      { id: 9, name: 'Kita', category: 0},
    ];
  }
}
