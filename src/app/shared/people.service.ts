import { Injectable } from "@angular/core";
import { Person } from "./models/person.model";
import { Logging } from "./logging.service";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(logger: Logging) {
    logger.log("Im calling another service!");
  }

  getPeople(): Person[] {
    return [
      {
        id: 1,
        first_name: "Bengt",
        last_name: "Wankel",
        email: "bwankel9@upenn.edu",
        gender: "Male",
        avatar:
          "https://robohash.org/distinctioquasiomnis.png?size=100x100&set=set1",
        img: "male2.png"
      },
      {
        id: 2,
        first_name: "Berry",
        last_name: "Tarrier",
        email: "btarrier1@liveinternet.ru",
        gender: "Female",
        avatar:
          "https://robohash.org/voluptatessuntet.png?size=100x100&set=set1",
        img: "female1.png"
      },
      {
        id: 3,
        first_name: "Warden",
        last_name: "Burnall",
        email: "wburnallc@dot.gov",
        gender: "Male",
        avatar:
          "https://robohash.org/cupiditateofficiissit.png?size=100x100&set=set1",
        img: "male1.png"
      },
      {
        id: 4,
        first_name: "Phyllida",
        last_name: "Lansly",
        email: "plansly3@bloglines.com",
        gender: "Female",
        avatar: "https://robohash.org/nonrerumillum.png?size=100x100&set=set1",
        img: "female2.png"
      },
      {
        id: 5,
        first_name: "Pippa",
        last_name: "Serginson",
        email: "pserginson4@narod.ru",
        gender: "Female",
        avatar: "https://robohash.org/ipsamfacereaut.png?size=100x100&set=set1",
        img: "female3.png"
      },
      {
        id: 6,
        first_name: "Della",
        last_name: "Roebuck",
        email: "droebuck5@zdnet.com",
        gender: "Female",
        avatar: "https://robohash.org/sintetrerum.png?size=100x100&set=set1",
        img: "female4.png"
      },
      {
        id: 7,
        first_name: "Dulcine",
        last_name: "Melsome",
        email: "dmelsome6@ycombinator.com",
        gender: "Female",
        avatar: "https://robohash.org/sitnihiliusto.png?size=100x100&set=set1",
        img: "female3.png"
      },
      {
        id: 8,
        first_name: "Frasco",
        last_name: "Lynes",
        email: "flynes7@narod.ru",
        gender: "Male",
        avatar:
          "https://robohash.org/ducimustemporibusaccusantium.png?size=100x100&set=set1",
        img: "male1.png"
      },
      {
        id: 9,
        first_name: "Sheelah",
        last_name: "Durman",
        email: "sdurman8@goodreads.com",
        gender: "Female",
        avatar:
          "https://robohash.org/errorconsecteturfacere.png?size=100x100&set=set1",
        img: "female1.png"
      },
      {
        id: 10,
        first_name: "Millisent",
        last_name: "Okeshott",
        email: "mokeshott0@seesaa.net",
        gender: "Female",
        avatar:
          "https://robohash.org/suntmolestiaenostrum.png?size=100x100&set=set1",
        img: "female2.png"
      },
      {
        id: 11,
        first_name: "Aubine",
        last_name: "Spellacy",
        email: "aspellacya@seattletimes.com",
        gender: "Female",
        avatar:
          "https://robohash.org/inciduntsitautem.png?size=100x100&set=set1",
        img: "female2.png"
      },
      {
        id: 12,
        first_name: "Ingeborg",
        last_name: "Fernier",
        email: "ifernierb@springer.com",
        gender: "Female",
        avatar:
          "https://robohash.org/fugitundequidem.png?size=100x100&set=set1",
        img: "female2.png"
      },
      {
        id: 13,
        first_name: "Bell",
        last_name: "Renehan",
        email: "brenehan2@shinystat.com",
        gender: "Female",
        avatar: "https://robohash.org/doloremsedquia.png?size=100x100&set=set1",
        img: "female1.png"
      },
      {
        id: 14,
        first_name: "Brena",
        last_name: "Steane",
        email: "bsteaned@reddit.com",
        gender: "Female",
        avatar: "https://robohash.org/autemdebitisut.png?size=100x100&set=set1",
        img: "female5.png"
      },
      {
        id: 15,
        first_name: "Alison",
        last_name: "Aynsley",
        email: "aaynsleye@yale.edu",
        gender: "Female",
        avatar: "https://robohash.org/omnisetenim.png?size=100x100&set=set1",
        img: "female3.png"
      },
      {
        id: 16,
        first_name: "Devlin",
        last_name: "Caney",
        email: "dcaneyf@yahoo.com",
        gender: "Male",
        avatar:
          "https://robohash.org/iddolorconsectetur.png?size=100x100&set=set1",
        img: "male5.png"
      },
      {
        id: 17,
        first_name: "Garth",
        last_name: "Schankel",
        email: "gschankelg@cnet.com",
        gender: "Male",
        avatar:
          "https://robohash.org/quodetassumenda.png?size=100x100&set=set1",
        img: "male2.png"
      },
      {
        id: 18,
        first_name: "Aveline",
        last_name: "Stronack",
        email: "astronackh@bbb.org",
        gender: "Female",
        avatar:
          "https://robohash.org/voluptatibusprovidentconsequatur.png?size=100x100&set=set1",
        img: "female5.png"
      },
      {
        id: 19,
        first_name: "Mick",
        last_name: "Howatt",
        email: "mhowatti@go.com",
        gender: "Male",
        avatar: "https://robohash.org/quodeumest.png?size=100x100&set=set1",
        img: "male1.png"
      },
      {
        id: 20,
        first_name: "Kristofor",
        last_name: "Haselhurst",
        email: "khaselhurstj@gizmodo.com",
        gender: "Male",
        avatar:
          "https://robohash.org/voluptatemdelenitimaiores.png?size=100x100&set=set1",
        img: "male2.png"
      }
    ];
  }
}
