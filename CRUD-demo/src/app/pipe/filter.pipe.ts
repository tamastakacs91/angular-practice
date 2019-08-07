import { Pipe, PipeTransform } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //szűrjünk a title-ekre
  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter(item => {
      //return item.title.toLowerCase().indexOf(phrase.toLowerCase()) > -1

      //ha mindenben szeretnénk keresni, akkor stringify-jal átalakítva működik:
      let jsonString = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}"]/g, '');
      return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }

  //param1 - phrase: alapérték üres string, így elkerüljük a hibákat
  //value - baseArray - hisze a filmek tömbjét kapja meg
  //az array elemeinek megnézi a titljét és vizsgálja, hogy benne van-e a kereső kifejezés(phrase)

  //pipe első paramétere mindig az, ami mögé tesszük a pipe jelet
}


// objektum kulcsok eltávolítása json stringből reguláris kifejezéssel:
// json.replace(/[\,\]*/g, '');

// json.replace(/\"[^\"]*\"\:/g, '')
// a macskaköröm kivan escape karakterelve - nem kötelező!
// macskakörömmel kezdődjön
// bármennyi karakter, AMI nem macskaköröm
// macskakörömmel végződjön
// utána van egy kettőspont
// globálisan - az egész szövegre nézve

// json.replace(/\"[^\"]*\"\:/g, '').replace(/[",\{\}"]/g)