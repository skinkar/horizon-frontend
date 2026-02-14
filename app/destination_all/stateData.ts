export interface StateTheme {
  background: string
  accent: string
  card: string
  textDark: string
}

export interface StateDataType {
  name: string
  tagline: string
  heroImage: string
  about: string
  theme: StateTheme
}

export const STATE_DATA: Record<string, StateDataType> = {

  goa: {
    name: "Goa",
    tagline: "Explore The Beauty Of Goa & Its Beaches",
    heroImage: "/states/goa.png",

    about:
      "Goa is famous for beaches, nightlife and seafood cuisine. It offers water sports, Portuguese heritage and relaxing coastal vibes.",

    theme: {
      background: "#3BA5C3",
      accent: "#D25700",
      card: "#003A48",
      textDark: "#16242A"
    }
  },

  hp: {
    name: "Himachal Pradesh",
    tagline: "Explore The Beauty Of Himachal Pradesh & Its Mountains",
    heroImage: "/states/hp.png",

    about:
      "Himachal Pradesh is known for mountains, snow valleys, temples and adventure sports like trekking and paragliding.",

    theme: {
      background: "#326BAE",
      accent: "#DAA21B",
      card: "#5188C8",
      textDark: "#FFFFFF"
    }
  }

}
