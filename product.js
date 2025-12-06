// products.js
// Centralized products data. Edit here to change price/name/image.
// Image filenames expected under /assets/images/products/<slug>.jpg
const PRODUCTS = {
  "Rolex": [
    { slug: "rolex-yachtmaster", name: "Rolex yachtmaster automatic", price: 2499, image: "assets/images/products/rolex-yachtmaster.jpg" },
    { slug: "rolex-daudate-shift", name: "Rolex daudate shift movement", price: 1699, image: "assets/images/products/rolex-daudate-shift.jpg" },
    { slug: "rolex-submariner-shift", name: "Rolex submariner shift movement", price: 1599, image: "assets/images/products/rolex-submariner-shift.jpg" },
    { slug: "rolex-daytona", name: "Rolex Daytona", price: 2199, image: "assets/images/products/rolex-daytona.jpg" },
    { slug: "rolex-sun-moon", name: "Rolex sun moon edition", price: 1699, image: "assets/images/products/rolex-sun-moon.jpg" },
    { slug: "rolex-datejust", name: "Rolex Datejust Automatic", price: 3499, image: "assets/images/products/rolex-datejust.jpg" },
    { slug: "rolex-explorer2", name: "Rolex explorer 2", price: 3999, image: "assets/images/products/rolex-explorer2.jpg" },
    { slug: "rolex-king-automatic", name: "Rolex king automatic", price: 1899, image: "assets/images/products/rolex-king-automatic.jpg" },
    { slug: "rolex-gmt-shift", name: "Rolex GMT shift movement", price: 1699, image: "assets/images/products/rolex-gmt-shift.jpg" },
    { slug: "rolex-sky-dweller", name: "Rolex sky dweller shift movement", price: 1499, image: "assets/images/products/rolex-sky-dweller.jpg" }
  ],

  "Maserati": [
    { slug: "maserati-automatic-skeleton", name: "Maserati automatic skeleton", price: 2199, image: "assets/images/products/maserati-automatic-skeleton.jpg" },
    { slug: "maserati-attraziane", name: "Maserati attraziane", price: 1999, image: "assets/images/products/maserati-attraziane.jpg" },
    { slug: "maserati-classic-automatic", name: "Maserati classic automatic", price: 2499, image: "assets/images/products/maserati-classic-automatic.jpg" },
    { slug: "maserati-potenza-automatic", name: "Maserati potenza automatic", price: 2299, image: "assets/images/products/maserati-potenza-automatic.jpg" }
  ],

  "Omega": [
    { slug: "omega-worldmap", name: "Omega Worldmap", price: 1799, image: "assets/images/products/omega-worldmap.jpg" },
    { slug: "omega-speedmaster", name: "Omega speedmaster", price: 4299, image: "assets/images/products/omega-speedmaster.jpg" },
    { slug: "omega-seemaster", name: "Omega seemaster", price: 1899, image: "assets/images/products/omega-seemaster.jpg" },
    { slug: "omega-worldmap2", name: "Omega Worldmap 2", price: 2099, image: "assets/images/products/omega-worldmap2.jpg" },
    { slug: "omega-seamaster-auto", name: "Omega Seamaster Automatic", price: 4899, image: "assets/images/products/omega-seamaster-auto.jpg" },
    { slug: "omega-sun-moon", name: "Omega sun moon edition", price: 1799, image: "assets/images/products/omega-sun-moon.jpg" }
  ],

  "G-Shock": [
    { slug: "gshock-gav01", name: "G shock Ga V01", price: 1849, image: "assets/images/products/gshock-gav01.jpg" },
    { slug: "gshock-ga2100", name: "G shock Ga2100", price: 1299, image: "assets/images/products/gshock-ga2100.jpg" },
    { slug: "gshock-gm2100", name: "G shock Gm2100", price: 1499, image: "assets/images/products/gshock-gm2100.jpg" },
    { slug: "gshock-ga2300", name: "G shock Ga2300", price: 1199, image: "assets/images/products/gshock-ga2300.jpg" },
    { slug: "gshock-gm700", name: "G Shock Gm700", price: 2399, image: "assets/images/products/gshock-gm700.jpg" },
    { slug: "gshock-second", name: "G shock second", price: 999, image: "assets/images/products/gshock-second.jpg" },
    { slug: "gshock-ga2100-1799", name: "G Shock ga2100 (1799)", price: 1799, image: "assets/images/products/gshock-ga2100-1799.jpg" },
    { slug: "gshock-gmw", name: "G shock Gmw", price: 1149, image: "assets/images/products/gshock-gmw.jpg" },
    { slug: "gshock-ga110", name: "G-shock ga110", price: 1199, image: "assets/images/products/gshock-ga110.jpg" },
    { slug: "gshock-xman", name: "G-Shock Xman", price: 1149, image: "assets/images/products/gshock-xman.jpg" }
  ],

  "Armani": [
    { slug: "armani-ax", name: "Armani Ax", price: 1499, image: "assets/images/products/armani-ax.jpg" },
    { slug: "armani-dante", name: "Armani Exchange Dante", price: 1999, image: "assets/images/products/armani-dante.jpg" },
    { slug: "armani-outerbanks", name: "Armani Exchange Outerbanks", price: 1899, image: "assets/images/products/armani-outerbanks.jpg" },
    { slug: "armani-automatic", name: "Armani Exchange Automatic", price: 2499, image: "assets/images/products/armani-automatic.jpg" },
    { slug: "armani-ar1968", name: "Armani Ar1968", price: 1799, image: "assets/images/products/armani-ar1968.jpg" },
    { slug: "armani-classic", name: "Armani Classic", price: 1349, image: "assets/images/products/armani-classic.jpg" },
    { slug: "armani-alligator", name: "Armani Alligator", price: 2499, image: "assets/images/products/armani-alligator.jpg" },
    { slug: "armani-morocco", name: "Armani Morocco", price: 1899, image: "assets/images/products/armani-morocco.jpg" }
  ],

  "Patek Philippe": [
    { slug: "patek-cubitus-blue", name: "Patek Philippe Cubitus Blue", price: 3299, image: "assets/images/products/patek-cubitus-blue.jpg" },
    { slug: "patek-1", name: "Patek Philippe", price: 3599, image: "assets/images/products/patek-1.jpg" },
    { slug: "patek-cubitus-automatic", name: "Patek Philippe Cubitus Automatic", price: 3999, image: "assets/images/products/patek-cubitus-automatic.jpg" },
    { slug: "patek-belt", name: "Patek Philippe belt", price: 1899, image: "assets/images/products/patek-belt.jpg" },
    { slug: "patek-aura", name: "Patek Philippe Aura", price: 1299, image: "assets/images/products/patek-aura.jpg" },
    { slug: "patek-openheart", name: "Patek Philippe Openheart", price: 2699, image: "assets/images/products/patek-openheart.jpg" },
    { slug: "patek-matt", name: "Patek Philippe Matt", price: 1299, image: "assets/images/products/patek-matt.jpg" },
    { slug: "patek-skeleton", name: "Patek Philippe Skeleton", price: 2499, image: "assets/images/products/patek-skeleton.jpg" },
    { slug: "patek-nautilus-sm", name: "Patek Philippe Nautilus Sun moon Automatic", price: 5999, image: "assets/images/products/patek-nautilus-sm.jpg" },
    { slug: "patek-nautilus", name: "Patek Philippe Nautilus", price: 3299, image: "assets/images/products/patek-nautilus.jpg" },
    { slug: "patek-sm", name: "Patek Philippe sm", price: 1499, image: "assets/images/products/patek-sm.jpg" }
  ],

  "Audemars Piguet": [
    { slug: "ap-aura", name: "Audemars Piguet Aura", price: 1299, image: "assets/images/products/ap-aura.jpg" },
    { slug: "ap-automatic", name: "Audemars Piguet Automatic", price: 3499, image: "assets/images/products/ap-automatic.jpg" },
    { slug: "ap-alyx", name: "Audemars Piguet ALYX", price: 3199, image: "assets/images/products/ap-alyx.jpg" },
    { slug: "ap-diamond", name: "Audemars Piguet Diamond Automatic", price: 6499, image: "assets/images/products/ap-diamond.jpg" },
    { slug: "ap-rainbow", name: "Audemars Piguet Rainbow Automatic", price: 7499, image: "assets/images/products/ap-rainbow.jpg" },
    { slug: "ap-6", name: "Audemrs Piguet", price: 4699, image: "assets/images/products/ap-6.jpg" },
    { slug: "ap-green", name: "Audemars Piguet green", price: 2999, image: "assets/images/products/ap-green.jpg" }
  ],

  "Cartier": [
    { slug: "cartier-santos", name: "Cartier Santos Automatic", price: 4099, image: "assets/images/products/cartier-santos.jpg" },
    { slug: "cartier-ballon", name: "Cartier Ballon", price: 1399, image: "assets/images/products/cartier-ballon.jpg" },
    { slug: "cartier-diamond-belt", name: "Cartier Diamond belt", price: 2199, image: "assets/images/products/cartier-diamond-belt.jpg" },
    { slug: "cartier-diamond", name: "Cartier Diamond", price: 2199, image: "assets/images/products/cartier-diamond.jpg" },
    { slug: "cartier-tank", name: "Cartier Tank", price: 2299, image: "assets/images/products/cartier-tank.jpg" },
    { slug: "cartier-automatic", name: "Cartier Automatic", price: 2999, image: "assets/images/products/cartier-automatic.jpg" }
  ],

  "Tissot": [
    { slug: "tissot-1853-leather", name: "Tissot 1853 leather belt", price: 1399, image: "assets/images/products/tissot-1853-leather.jpg" },
    { slug: "tissot-prx-open", name: "Tissot Prx BackOpen", price: 1699, image: "assets/images/products/tissot-prx-open.jpg" },
    { slug: "tissot-powermatic", name: "Tissot Powermatic80 Gents", price: 2999, image: "assets/images/products/tissot-powermatic.jpg" },
    { slug: "tissot-1853-chain", name: "Tissot 1853 chain", price: 1649, image: "assets/images/products/tissot-1853-chain.jpg" },
    { slug: "tissot-skeleton", name: "Tissot Skeleton", price: 2749, image: "assets/images/products/tissot-skeleton.jpg" },
    { slug: "tissot-prx-powermatic", name: "Tissot Prx Powermatic", price: 1599, image: "assets/images/products/tissot-prx-powermatic.jpg" },
    { slug: "tissot-prx", name: "Tissot prx", price: 1999, image: "assets/images/products/tissot-prx.jpg" },
    { slug: "tissot-1853-japan", name: "Tissot 1853 Japan", price: 3199, image: "assets/images/products/tissot-1853-japan.jpg" }
  ],

  "Rado": [
    { slug: "rado-centrix", name: "RADO CENTRIX", price: 2699, image: "assets/images/products/rado-centrix.jpg" },
    { slug: "rado-true-square", name: "Rado True Square Automatic Open Heart", price: 4499, image: "assets/images/products/rado-true-square.jpg" },
    { slug: "rado-juble", name: "Rado Juble", price: 2499, image: "assets/images/products/rado-juble.jpg" },
    { slug: "rado-daistar", name: "RADO DAISTAR", price: 3299, image: "assets/images/products/rado-daistar.jpg" },
    { slug: "rado-hyperchrome", name: "Rado HyperChrome", price: 4499, image: "assets/images/products/rado-hyperchrome.jpg" }
  ],

  "Longines": [
    { slug: "longines-moonphase", name: "Longines Master Collection Moonphase", price: 2499, image: "assets/images/products/longines-moonphase.jpg" },
    { slug: "longines-two-tone", name: "Longines automatic two-tone", price: 2999, image: "assets/images/products/longines-two-tone.jpg" }
  ],

  // Women (summary as provided)
  "WomenOthers": [
    { slug: "michaelkors-1", name: "MICHAEL KORS", price: 1699, image: "assets/images/products/michaelkors-1.jpg" },
    { slug: "just-cavalli-1", name: "JUST CAVALLI", price: 1999, image: "assets/images/products/just-cavalli-1.jpg" },
    { slug: "dior-1", name: "DIOR", price: 1849, image: "assets/images/products/dior-1.jpg" },
    { slug: "cartier-baignoire-1", name: "Cartier Baignoire", price: 1549, image: "assets/images/products/cartier-baignoire.jpg" },
    { slug: "armani-women-1", name: "Armani (Women)", price: 1599, image: "assets/images/products/armani-women-1.jpg" },
    { slug: "ap-women-1", name: "Audemars pigust (Women)", price: 1999, image: "assets/images/products/ap-women-1.jpg" },
    { slug: "fossil-jacqueline", name: "Fossil Jacqueline", price: 1499, image: "assets/images/products/fossil-jacqueline.jpg" },
    { slug: "omega-women-1", name: "Omega (Women)", price: 2399, image: "assets/images/products/omega-women-1.jpg" },
    { slug: "calvin-klein-1", name: "Calvin Klein", price: 1699, image: "assets/images/products/calvin-klein-1.jpg" }
  ],

  "Kids": [
    { slug: "casio-1", name: "Casio", price: 999, image: "assets/images/products/casio-1.jpg" },
    { slug: "casio-2", name: "Casio 2", price: 1299, image: "assets/images/products/casio-2.jpg" },
    { slug: "gshock-kids-1", name: "G-Shock Kids", price: 1799, image: "assets/images/products/gshock-kids-1.jpg" }
  ]
};
