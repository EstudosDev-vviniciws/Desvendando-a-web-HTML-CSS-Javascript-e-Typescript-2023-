type marcaTenis = "Nike" | "Puma" | "Adidas";

//Enum:Facilita o manuseio de grupos de constantes nomeadas. 
enum MarcaTenis2 {
  NIKE = 5,
  PUMA = "Puma",
  ADIDAS = "Adidas",
}

interface Tenis {
    marcaTenis: MarcaTenis2
}

const test: Tenis = {
    marcaTenis:MarcaTenis2.NIKE
}


if (test.marcaTenis === MarcaTenis2.NIKE) {
    console.log("é nike");
}