import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtgeversService {


 omroepen = [
   'KRO',
   'MAX',
   'AVROTROS'
 ];

 artiesten = [
   'BZN',
   'Carel Kraayenhof',
   'Houdini\'s',
   'Leona Philippo',
   'Margriet Eshuijs',
   'Cor Bakker',
   'tania cross'
 ];

 orkesten = [
   'Noord Nederlands Symfonie Orkest',
   'Residentieorkest',
   'Concertgebouworkest',
   'Metropole orkest',
   'Jazz Orchestra Of The ConcertGebouw',
   'Limburgs Symfonie Orkest',
   'Marinierskapel der Koninklijke Marine',
   'Nederlands Philharmonisch Orkest',
   'Orkest van de Koninklijke Luchtmacht',
   'Radio Filharmonisch Orkest',
   'Het orkest van de veenkoloniën',
   'Philips Symfonie Orkest',
   'Holland Concert Koor',
   'Nederlands Philharmonisch Orkest'
  ];

  cultureleOrganisaties = [
    'The New York Cantors',
    'Nationale Opera',
    'Nederlandse Händelvereniging',
    'Koninklijk Concertgebouw',
    'Stichting Papageno',
    'Bank Giro Loterij',
    'De Efteling',
    'Stichting Waterlandproducties',
    'International Chamber Music Festival',
    'Stichting Souk',
    'Uitmarkt',
    'Stichting Omroep Muziek',
    'Endemol',
    'Stokvis & Niehe Producties',
    'IDTV'

 ];

 diversen = [

 ]

  constructor() { }

  getOmroepen() {
    return this.omroepen;
  }

  getArtiesten() {
    return this.artiesten;
  }
  getOrkesten() {
    return this.orkesten;
  }
  getCultureleOrganisaties() {
    return this.cultureleOrganisaties;
  }

}
