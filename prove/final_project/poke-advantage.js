//AI helped me to fill these arrays with pokemon in the format I gave it.

const pokemon = [
  // Generation 1
  { name: 'Bulbasaur', type: ['Grass', 'Poison'], description: "A small Pokémon that grows a plant bulb on its back, storing energy for evolution.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: 'Ivysaur', type: ['Grass', 'Poison'], description: "The bulb on its back blooms as it absorbs sunlight, giving it greater strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  { name: 'Venusaur', type: ['Grass', 'Poison'], description: "Its large flower releases a soothing aroma that calms Pokémon around it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },

  { name: 'Charmander', type: ['Fire'], description: "Its tail flame shows its life force and burns brighter when it’s excited.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { name: 'Charmeleon', type: ['Fire'], description: "A fierce fighter whose tail burns hot enough to melt rock.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
  { name: 'Charizard', type: ['Fire', 'Flying'], description: "It breathes intense flames and soars high while searching for strong opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },

  { name: 'Squirtle', type: ['Water'], description: "A tiny turtle Pokémon that hides in its shell and sprays water to defend itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { name: 'Wartortle', type: ['Water'], description: "Its fluffy tail stores air, helping it swim swiftly through water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
  { name: 'Blastoise', type: ['Water'], description: "It fires powerful water blasts from the cannons on its shell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },

  { name: 'Caterpie', type: ['Bug'], description: "A gentle caterpillar that eats leaves and grows quickly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
  { name: 'Metapod', type: ['Bug'], description: "Its shell is extremely hard as it prepares for evolution.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
  { name: 'Butterfree', type: ['Bug', 'Flying'], description: "It scatters pollen from its wings to help plants grow.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },

  { name: 'Weedle', type: ['Bug', 'Poison'], description: "A small bug Pokémon with a sharp stinger used for protection.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
  { name: 'Kakuna', type: ['Bug', 'Poison'], description: "It remains still while its body transforms inside its cocoon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
  { name: 'Beedrill', type: ['Bug', 'Poison'], description: "A fast attacker that uses its twin stingers to defend its nest.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },

  { name: 'Pidgey', type: ['Normal', 'Flying'], description: "A small bird Pokémon that prefers to avoid conflict.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
  { name: 'Pidgeotto', type: ['Normal', 'Flying'], description: "It patrols wide areas and protects its territory fiercely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
  { name: 'Pidgeot', type: ['Normal', 'Flying'], description: "Its powerful wings let it fly at incredible speeds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },

  { name: 'Rattata', type: ['Normal'], description: "A quick and cautious Pokémon that adapts to any environment.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
  { name: 'Raticate', type: ['Normal'], description: "Its sharp teeth grow constantly and can gnaw through tough materials.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" },

  { name: 'Spearow', type: ['Normal', 'Flying'], description: "A loud and energetic bird that defends itself with sharp pecks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" },
  { name: 'Fearow', type: ['Normal', 'Flying'], description: "Its long neck and wings allow it to fly for hours without resting.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" },

  { name: 'Ekans', type: ['Poison'], description: "A stealthy snake Pokémon that silently stalks its prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" },
  { name: 'Arbok', type: ['Poison'], description: "Its hood markings intimidate enemies and vary between regions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" },

  { name: 'Pikachu', type: ['Electric'], description: "It stores electricity in its cheeks and releases sparks when excited.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  { name: 'Raichu', type: ['Electric'], description: "Its powerful tail can ground electricity and deliver strong shocks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" },

  { name: 'Sandshrew', type: ['Ground'], description: "A desert Pokémon that curls into a ball to protect itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" },
  { name: 'Sandslash', type: ['Ground'], description: "Its sharp claws let it dig quickly and defend against threats.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" },

  { name: 'Nidoran♀', type: ['Poison'], description: "A cautious Pokémon with small but toxic spines.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png" },
  { name: 'Nidorina', type: ['Poison'], description: "It becomes gentle around its young and avoids using its spines.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" },
  { name: 'Nidoqueen', type: ['Poison', 'Ground'], description: "A powerful defender that protects its allies fiercely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" },

  { name: 'Nidoran♂', type: ['Poison'], description: "Its large ears help it detect danger from far away.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" },
  { name: 'Nidorino', type: ['Poison'], description: "It charges bravely at foes using its venomous horn.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" },
  { name: 'Nidoking', type: ['Poison', 'Ground'], description: "Its immense strength lets it topple large obstacles easily.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" },

  { name: 'Clefairy', type: ['Fairy'], description: "A mystical Pokémon said to gather under the moonlight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" },
  { name: 'Clefable', type: ['Fairy'], description: "Its quiet nature makes it prefer peaceful, secluded places.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" },

  { name: 'Vulpix', type: ['Fire'], description: "Its six tails curl beautifully and grow more tails as it matures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png" },
  { name: 'Ninetales', type: ['Fire'], description: "A wise Pokémon said to live for a thousand years.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" },

  { name: 'Jigglypuff', type: ['Normal', 'Fairy'], description: "It sings soothing melodies that lull listeners to sleep.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" },
  { name: 'Wigglytuff', type: ['Normal', 'Fairy'], description: "Its soft body expands when it inhales deeply.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" },

  { name: 'Zubat', type: ['Poison', 'Flying'], description: "A cave-dwelling Pokémon that navigates using ultrasonic cries.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" },
  { name: 'Golbat', type: ['Poison', 'Flying'], description: "It drains energy from prey using its sharp fangs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" },

  { name: 'Oddish', type: ['Grass', 'Poison'], description: "It buries itself in soil during the day to absorb nutrients.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png" },
  { name: 'Gloom', type: ['Grass', 'Poison'], description: "Its flower emits a strong scent that can attract or repel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" },
  { name: 'Vileplume', type: ['Grass', 'Poison'], description: "Its large petals release clouds of pollen when shaken.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },

  { name: 'Paras', type: ['Bug', 'Grass'], description: "Mushrooms on its back grow by draining nutrients from its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png" },
  { name: 'Parasect', type: ['Bug', 'Grass'], description: "The mushroom fully controls its movements as it matures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" },

  { name: 'Venonat', type: ['Bug', 'Poison'], description: "Its large eyes act like radar to track prey at night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" },
  { name: 'Venomoth', type: ['Bug', 'Poison'], description: "It scatters toxic powder from its wings when threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" },

  { name: 'Diglett', type: ['Ground'], description: "A mysterious Pokémon that rarely shows its full body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" },
  { name: 'Dugtrio', type: ['Ground'], description: "Three Digletts work together to dig at incredible speeds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" },

  { name: 'Meowth', type: ['Normal'], description: "It loves shiny objects and prowls at night to find treasures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" },
  { name: 'Persian', type: ['Normal'], description: "A sleek and agile Pokémon known for its swift movements.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" },

  { name: 'Psyduck', type: ['Water'], description: "It suffers from headaches that trigger bursts of psychic power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" },
  { name: 'Golduck', type: ['Water'], description: "A strong swimmer that glides gracefully through water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" },

  { name: 'Mankey', type: ['Fighting'], description: "A quick-tempered Pokémon that becomes enraged easily.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png" },
  { name: 'Primeape', type: ['Fighting'], description: "It chases opponents relentlessly once angered.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" },

  { name: 'Growlithe', type: ['Fire'], description: "A loyal Pokémon that protects its trainer bravely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" },
  { name: 'Arcanine', type: ['Fire'], description: "Its majestic speed is said to rival the wind itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" },

  { name: 'Poliwag', type: ['Water'], description: "Its spiral pattern helps it confuse predators.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png" },
  { name: 'Poliwhirl', type: ['Water'], description: "Its smooth skin helps it slip away from danger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" },
  { name: 'Poliwrath', type: ['Water', 'Fighting'], description: "A strong swimmer that uses its muscles to battle fiercely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },

  { name: 'Abra', type: ['Psychic'], description: "It sleeps most of the day and teleports when threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" },
  { name: 'Kadabra', type: ['Psychic'], description: "Its spoon amplifies its psychic abilities.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" },
  { name: 'Alakazam', type: ['Psychic'], description: "Its powerful mind can solve complex calculations instantly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" },

  { name: 'Machop', type: ['Fighting'], description: "A strong Pokémon that trains constantly to grow stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png" },
  { name: 'Machoke', type: ['Fighting'], description: "Its muscles are so powerful it wears a belt to regulate them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" },
  { name: 'Machamp', type: ['Fighting'], description: "Its four arms let it strike with incredible speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" },

  { name: 'Bellsprout', type: ['Grass', 'Poison'], description: "It uses its flexible body to dodge attacks gracefully.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" },
  { name: 'Weepinbell', type: ['Grass', 'Poison'], description: "It hangs from trees and waits to swallow prey whole.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" },
  { name: 'Victreebel', type: ['Grass', 'Poison'], description: "Its sweet scent lures prey into its deadly mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" },

  { name: 'Tentacool', type: ['Water', 'Poison'], description: "Its transparent body floats in the ocean currents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png" },
  { name: 'Tentacruel', type: ['Water', 'Poison'], description: "It controls its many tentacles with precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" },

  { name: 'Geodude', type: ['Rock', 'Ground'], description: "It remains still to blend in with rocky terrain.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" },
  { name: 'Graveler', type: ['Rock', 'Ground'], description: "It rolls down paths without stopping, crushing anything in its way.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" },
  { name: 'Golem', type: ['Rock', 'Ground'], description: "Its rocky shell is so tough that even dynamite can't break it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" },

  { name: 'Ponyta', type: ['Fire'], description: "Its fiery mane burns hotter as it grows stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" },
  { name: 'Rapidash', type: ['Fire'], description: "It gallops at incredible speeds, leaving blazing trails behind.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" },

  { name: 'Slowpoke', type: ['Water', 'Psychic'], description: "A relaxed Pokémon that often forgets what it was doing.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" },
  { name: 'Slowbro', type: ['Water', 'Psychic'], description: "A Shellder biting its tail boosts its psychic abilities.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" },

  { name: 'Magnemite', type: ['Electric', 'Steel'], description: "It floats using electromagnetic waves and sticks to metal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png" },
  { name: 'Magneton', type: ['Electric', 'Steel'], description: "Three Magnemite link together, generating strong magnetic fields.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" },

  { name: 'Farfetch’d', type: ['Normal', 'Flying'], description: "It carries a leek stalk that it uses as both weapon and tool.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png" },

  { name: 'Doduo', type: ['Normal', 'Flying'], description: "Its two heads think independently, helping it stay alert.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png" },
  { name: 'Dodrio', type: ['Normal', 'Flying'], description: "Its three heads coordinate to run at high speeds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" },

  { name: 'Seel', type: ['Water'], description: "A playful swimmer that thrives in icy waters.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png" },
  { name: 'Dewgong', type: ['Water', 'Ice'], description: "Its sleek body lets it glide gracefully through frozen seas.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" },

  { name: 'Grimer', type: ['Poison'], description: "A sludge Pokémon formed from industrial waste.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" },
  { name: 'Muk', type: ['Poison'], description: "Its toxic body emits a foul stench that can overwhelm foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" },

  { name: 'Shellder', type: ['Water'], description: "Its shell is harder than diamond and protects it from attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png" },
  { name: 'Cloyster', type: ['Water', 'Ice'], description: "Its spiked shell hides a mysterious interior.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" },

  { name: 'Gastly', type: ['Ghost', 'Poison'], description: "A gaseous Pokémon that can slip through any opening.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" },
  { name: 'Haunter', type: ['Ghost', 'Poison'], description: "It hides in shadows and scares prey with eerie gestures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" },
  { name: 'Gengar', type: ['Ghost', 'Poison'], description: "It lurks in darkness and steals the warmth of its surroundings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },

  { name: 'Onix', type: ['Rock', 'Ground'], description: "A massive rock snake that tunnels through mountains.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" },

  { name: 'Drowzee', type: ['Psychic'], description: "It feeds on dreams and prefers pleasant ones.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png" },
  { name: 'Hypno', type: ['Psychic'], description: "It uses its pendulum to lull opponents into deep sleep.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" },

  { name: 'Krabby', type: ['Water'], description: "It snaps its claws to communicate and defend itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" },
  { name: 'Kingler', type: ['Water'], description: "Its massive claw can crush boulders with ease.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" },

  { name: 'Voltorb', type: ['Electric'], description: "It resembles a Poké Ball and explodes when disturbed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" },
  { name: 'Electrode', type: ['Electric'], description: "It stores too much energy and often explodes unexpectedly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" },

  { name: 'Exeggcute', type: ['Grass', 'Psychic'], description: "A group of six eggs that communicate telepathically.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" },
  { name: 'Exeggutor', type: ['Grass', 'Psychic'], description: "Its heads think independently and sometimes argue.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" },

  { name: 'Cubone', type: ['Ground'], description: "It wears the skull of its mother and cries at night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png" },
  { name: 'Marowak', type: ['Ground'], description: "A hardened warrior that fights skillfully with its bone club.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" },

  { name: 'Hitmonlee', type: ['Fighting'], description: "Its legs stretch to deliver powerful kicks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" },
  { name: 'Hitmonchan', type: ['Fighting'], description: "A master puncher that throws rapid, precise blows.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png" },

  { name: 'Lickitung', type: ['Normal'], description: "Its long tongue explores and tastes its surroundings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" },

  { name: 'Koffing', type: ['Poison'], description: "It floats by storing toxic gases inside its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" },
  { name: 'Weezing', type: ['Poison'], description: "Two Koffing merge and mix their poisonous fumes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" },

  { name: 'Rhyhorn', type: ['Ground', 'Rock'], description: "It charges forward without thinking, smashing obstacles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png" },
  { name: 'Rhydon', type: ['Ground', 'Rock'], description: "Its tough hide protects it from lava and extreme heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" },

  { name: 'Chansey', type: ['Normal'], description: "It carries a nutritious egg that it shares with the injured.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" },

  { name: 'Tangela', type: ['Grass'], description: "Its vines constantly grow and regenerate when lost.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" },

  { name: 'Kangaskhan', type: ['Normal'], description: "A protective parent that shelters its young in its pouch.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png" },

  { name: 'Horsea', type: ['Water'], description: "It shoots ink to escape predators and hide itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" },
  { name: 'Seadra', type: ['Water'], description: "Its sharp spines deter enemies from approaching.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" },

  { name: 'Goldeen', type: ['Water'], description: "A graceful swimmer known as the queen of the water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png" },
  { name: 'Seaking', type: ['Water'], description: "It digs nests in riverbeds during spawning season.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png" },

  { name: 'Staryu', type: ['Water'], description: "Its core glows brightly when it feels threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png" },
  { name: 'Starmie', type: ['Water', 'Psychic'], description: "Its central gem emits mysterious, powerful energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" },

  { name: 'Mr. Mime', type: ['Psychic', 'Fairy'], description: "It creates invisible walls using its miming skills.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" },

  { name: 'Scyther', type: ['Bug', 'Flying'], description: "A swift hunter that slices foes with razor-sharp blades.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" },

  { name: 'Jynx', type: ['Ice', 'Psychic'], description: "It communicates through expressive dances.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png" },

  { name: 'Electabuzz', type: ['Electric'], description: "It thrives during thunderstorms and absorbs lightning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" },
  { name: 'Magmar', type: ['Fire'], description: "Its body burns constantly, giving off intense heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" },

  { name: 'Pinsir', type: ['Bug'], description: "It crushes foes with its powerful horns.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png" },

  { name: 'Tauros', type: ['Normal'], description: "A fierce bull Pokémon that charges wildly when provoked.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png" },

  { name: 'Magikarp', type: ['Water'], description: "A weak swimmer that flops helplessly, yet endures anything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" },
  { name: 'Gyarados', type: ['Water', 'Flying'], description: "A fearsome Pokémon known for its destructive rage.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" },

  { name: 'Lapras', type: ['Water', 'Ice'], description: "A gentle giant that ferries people across the sea.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" },

  { name: 'Ditto', type: ['Normal'], description: "It transforms perfectly into any Pokémon it sees.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" },

  { name: 'Eevee', type: ['Normal'], description: "Its unstable genes allow it to evolve in many ways.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" },
  { name: 'Vaporeon', type: ['Water'], description: "Its body becomes water-like when it dives underwater.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png" },
  { name: 'Jolteon', type: ['Electric'], description: "It builds up static electricity that it releases as lightning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" },
  { name: 'Flareon', type: ['Fire'], description: "Its internal flame sac heats its body to extreme temperatures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png" },

  { name: 'Porygon', type: ['Normal'], description: "A digital Pokémon created entirely from computer code.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png" },

  { name: 'Omanyte', type: ['Rock', 'Water'], description: "An ancient Pokémon revived from a fossil.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png" },
  { name: 'Omastar', type: ['Rock', 'Water'], description: "Its sharp tentacles help it capture prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png" },

  { name: 'Kabuto', type: ['Rock', 'Water'], description: "A fossil Pokémon that hides under its tough shell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png" },
  { name: 'Kabutops', type: ['Rock', 'Water'], description: "A swift predator that slices prey with its blades.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png" },
  { name: 'Aerodactyl', type: ['Rock', 'Flying'], description: "A ferocious prehistoric Pokémon that ruled the skies in ancient times.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png" },

  { name: 'Snorlax', type: ['Normal'], description: "It eats nearly 900 pounds of food every day and then promptly goes to sleep.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" },

  { name: 'Articuno', type: ['Ice', 'Flying'], description: "A legendary bird Pokémon that can create blizzards with its wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" },
  { name: 'Zapdos', type: ['Electric', 'Flying'], description: "A legendary bird Pokémon that appears during thunderstorms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" },
  { name: 'Moltres', type: ['Fire', 'Flying'], description: "A legendary bird Pokémon that embodies fire and ignites flames with every flap.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" },

  { name: 'Dratini', type: ['Dragon'], description: "A mysterious Pokémon that sheds its skin as it grows.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png" },
  { name: 'Dragonair', type: ['Dragon'], description: "Its aura gives it a mystical presence, and it can control the weather.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png" },
  { name: 'Dragonite', type: ['Dragon', 'Flying'], description: "A kindhearted Pokémon that can circle the globe in 16 hours.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" },

  { name: 'Mewtwo', type: ['Psychic'], description: "A genetically engineered Pokémon created to be the ultimate fighter.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" },
  { name: 'Mew', type: ['Psychic'], description: "A mythical Pokémon said to contain the DNA of every Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" },
  // Generation 2
  { name: 'Chikorita', type: ['Grass'], description: "A gentle Grass-type that soothes others with the aroma of its leaf.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png" },
  { name: 'Bayleef', type: ['Grass'], description: "The fragrance of its neck leaves has a spicy aroma that energizes people.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png" },
  { name: 'Meganium', type: ['Grass'], description: "Its breath has the power to revive dead grass and plants.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png" },

  { name: 'Cyndaquil', type: ['Fire'], description: "It flares up its back flames when nervous or threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png" },
  { name: 'Quilava', type: ['Fire'], description: "It intimidates foes with intense flames and scorching heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png" },
  { name: 'Typhlosion', type: ['Fire'], description: "It can create explosive blasts of fire that incinerate everything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png" },

  { name: 'Totodile', type: ['Water'], description: "A playful Pokémon that bites anything it sees.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png" },
  { name: 'Croconaw', type: ['Water'], description: "Once it bites down, it won’t let go until it tears something apart.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png" },
  { name: 'Feraligatr', type: ['Water'], description: "It charges in with incredible speed despite its large body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png" },

  { name: 'Sentret', type: ['Normal'], description: "It stands on its tail to scout for danger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png" },
  { name: 'Furret', type: ['Normal'], description: "A very quick and agile Pokémon that can slip through narrow spaces.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png" },

  { name: 'Hoothoot', type: ['Normal', 'Flying'], description: "It has an internal clock that allows it to keep rhythm perfectly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png" },
  { name: 'Noctowl', type: ['Normal', 'Flying'], description: "A wise Pokémon that can see in complete darkness.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png" },

  { name: 'Ledyba', type: ['Bug', 'Flying'], description: "It communicates using scent and is very social.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png" },
  { name: 'Ledian', type: ['Bug', 'Flying'], description: "The patterns on its back shine with starlight energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png" },

  { name: 'Spinarak', type: ['Bug', 'Poison'], description: "It waits patiently for prey to get caught in its web.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png" },
  { name: 'Ariados', type: ['Bug', 'Poison'], description: "It uses its long legs to trap prey with precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png" },

  { name: 'Crobat', type: ['Poison', 'Flying'], description: "It flies silently using its newly grown wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png" },

  { name: 'Chinchou', type: ['Water', 'Electric'], description: "It uses its antenna lights to communicate underwater.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png" },
  { name: 'Lanturn', type: ['Water', 'Electric'], description: "Its light can illuminate the darkest ocean depths.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png" },

  { name: 'Pichu', type: ['Electric'], description: "It can’t store much electricity yet and often shocks itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png" },

  { name: 'Cleffa', type: ['Fairy'], description: "Its dance is said to bring good fortune.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png" },
  { name: 'Igglybuff', type: ['Normal', 'Fairy'], description: "Its body is soft and bouncy like a balloon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png" },

  { name: 'Togepi', type: ['Fairy'], description: "It is filled with happiness and shares it with others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png" },
  { name: 'Togetic', type: ['Fairy', 'Flying'], description: "It is said to bring blessings to kind-hearted people.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png" },

  { name: 'Natu', type: ['Psychic', 'Flying'], description: "It stares at the sun for long periods of time.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png" },
  { name: 'Xatu', type: ['Psychic', 'Flying'], description: "It is believed to see both the past and the future.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png" },

  { name: 'Mareep', type: ['Electric'], description: "Its wool stores static electricity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png" },
  { name: 'Flaaffy', type: ['Electric'], description: "Its wool has lost insulation, making its electricity stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png" },
  { name: 'Ampharos', type: ['Electric'], description: "Its light can be seen from great distances and used for signaling.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png" },

  { name: 'Bellossom', type: ['Grass'], description: "Its dance is said to be the most beautiful in the world.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png" },

  { name: 'Marill', type: ['Water', 'Fairy'], description: "Its tail acts as a flotation device.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png" },
  { name: 'Azumarill', type: ['Water', 'Fairy'], description: "It can make air bubbles that let it hear underwater.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png" },

  { name: 'Sudowoodo', type: ['Rock'], description: "It disguises itself as a tree to avoid enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png" },

  { name: 'Politoed', type: ['Water'], description: "Its loud croaking signals leadership among Poliwags and Poliwhirls.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png" },

  { name: 'Hoppip', type: ['Grass', 'Flying'], description: "It drifts on the wind and can be blown far away.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png" },
  { name: 'Skiploom', type: ['Grass', 'Flying'], description: "It blooms when the temperature rises.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png" },
  { name: 'Jumpluff', type: ['Grass', 'Flying'], description: "It rides warm southern winds to travel great distances.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png" },

  { name: 'Aipom', type: ['Normal'], description: "It uses its tail like a hand with great dexterity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png" },

  { name: 'Sunkern', type: ['Grass'], description: "It lives off only morning dew.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png" },
  { name: 'Sunflora', type: ['Grass'], description: "It converts sunlight into energy with great efficiency.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png" },

  { name: 'Yanma', type: ['Bug', 'Flying'], description: "Its eyes can spot movement from far away.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png" },

  { name: 'Wooper', type: ['Water', 'Ground'], description: "It wanders around with a clueless expression.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png" },
  { name: 'Quagsire', type: ['Water', 'Ground'], description: "It bumps into things without caring due to its carefree nature.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png" },

  { name: 'Espeon', type: ['Psychic'], description: "Its fur reacts to air currents, letting it predict attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png" },
  { name: 'Umbreon', type: ['Dark'], description: "It glows in the dark when excited or threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png" },

  { name: 'Murkrow', type: ['Dark', 'Flying'], description: "It is feared as a symbol of misfortune.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png" },

  { name: 'Slowking', type: ['Water', 'Psychic'], description: "It becomes smarter every time its Shellder bites.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png" },

  { name: 'Misdreavus', type: ['Ghost'], description: "It loves to startle people with eerie cries.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png" },

  { name: 'Unown', type: ['Psychic'], description: "It resembles ancient writing and comes in many forms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" },

  { name: 'Wobbuffet', type: ['Psychic'], description: "It endures attacks and strikes back twice as hard.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png" },

  { name: 'Girafarig', type: ['Normal', 'Psychic'], description: "Its tail has a mind of its own.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png" },

  { name: 'Pineco', type: ['Bug'], description: "It explodes if disturbed while eating.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png" },
  { name: 'Forretress', type: ['Bug', 'Steel'], description: "It hides inside its steel shell and rarely moves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png" },

  { name: 'Dunsparce', type: ['Normal'], description: "It burrows deep underground to hide.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png" },

  { name: 'Gligar', type: ['Ground', 'Flying'], description: "It glides silently and attacks from above.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png" },

  { name: 'Steelix', type: ['Steel', 'Ground'], description: "Its body is harder than diamond.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png" },

  { name: 'Snubbull', type: ['Fairy'], description: "Despite its scary face, it is actually very timid.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png" },
  { name: 'Granbull', type: ['Fairy'], description: "Its powerful jaws can crush almost anything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png" },

  { name: 'Qwilfish', type: ['Water', 'Poison'], description: "It inflates and fires its spikes when threatened.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png" },

  { name: 'Scizor', type: ['Bug', 'Steel'], description: "Its pincers crush anything like steel jaws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png" },

  { name: 'Shuckle', type: ['Bug', 'Rock'], description: "It stores berries inside its shell to ferment juice.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png" },

  { name: 'Heracross', type: ['Bug', 'Fighting'], description: "It can lift and throw objects many times its weight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png" },

  { name: 'Sneasel', type: ['Dark', 'Ice'], description: "It uses its claws to steal eggs from nests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png" },

  { name: 'Teddiursa', type: ['Normal'], description: "It licks its paws because they are coated in honey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png" },
  { name: 'Ursaring', type: ['Normal'], description: "It searches for food hidden deep in forests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png" },

  { name: 'Slugma', type: ['Fire'], description: "Its body is made entirely of magma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png" },
  { name: 'Magcargo', type: ['Fire', 'Rock'], description: "Its shell is actually hardened magma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png" },

  { name: 'Swinub', type: ['Ice', 'Ground'], description: "It searches for food by sniffing the ground.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png" },
  { name: 'Piloswine', type: ['Ice', 'Ground'], description: "Its thick coat protects it from harsh cold.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png" },

  { name: 'Corsola', type: ['Water', 'Rock'], description: "Its branches break easily but grow back quickly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png" },

  { name: 'Remoraid', type: ['Water'], description: "It can shoot water with incredible accuracy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png" },
  { name: 'Octillery', type: ['Water'], description: "It uses its suction cups to cling to surfaces.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png" },

  { name: 'Delibird', type: ['Ice', 'Flying'], description: "It carries food in its tail to share with others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png" },

  { name: 'Mantine', type: ['Water', 'Flying'], description: "It swims gracefully alongside Remoraid.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png" },

  { name: 'Skarmory', type: ['Steel', 'Flying'], description: "Its wings are sharp like blades.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png" },

  { name: 'Houndour', type: ['Dark', 'Fire'], description: "It hunts in packs with coordinated teamwork.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"},
  { name: 'Houndoom', type: ['Dark', 'Fire'], description: "Its eerie howl is said to cause those who hear it to shudder.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png" },

  { name: 'Kingdra', type: ['Water', 'Dragon'], description: "It sleeps deep on the ocean floor and causes whirlpools when it wakes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png" },

  { name: 'Phanpy', type: ['Ground'], description: "It marks its territory by dragging its trunk along the ground.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png" },
  { name: 'Donphan', type: ['Ground'], description: "Its armor-like hide protects it from almost anything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png" },

  { name: 'Porygon2', type: ['Normal'], description: "It was upgraded to enable space exploration.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png" },

  { name: 'Stantler', type: ['Normal'], description: "Its antlers create illusions that confuse enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png" },

  { name: 'Smeargle', type: ['Normal'], description: "It paints with the fluid from its tail, leaving unique marks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png" },

  { name: 'Tyrogue', type: ['Fighting'], description: "It constantly trains to become stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png" },
  { name: 'Hitmontop', type: ['Fighting'], description: "It spins on its head to attack and evade with grace.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png" },

  { name: 'Smoochum', type: ['Ice', 'Psychic'], description: "It tests everything by touching it with its lips.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png" },
  { name: 'Elekid', type: ['Electric'], description: "It generates electricity by spinning its arms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png" },
  { name: 'Magby', type: ['Fire'], description: "Its body temperature is always extremely high.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png" },

  { name: 'Miltank', type: ['Normal'], description: "It produces nutritious milk that is loved worldwide.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png" },

  { name: 'Blissey', type: ['Normal'], description: "It senses sadness and shares its soothing egg to help.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png" },

  { name: 'Raikou', type: ['Electric'], description: "It embodies the speed of lightning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png" },
  { name: 'Entei', type: ['Fire'], description: "A volcanic eruption is said to create a new Entei.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png" },
  { name: 'Suicune', type: ['Water'], description: "It purifies dirty water with a mere touch.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png" },

  { name: 'Larvitar', type: ['Rock', 'Ground'], description: "It is born deep underground and eats soil to grow.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png" },
  { name: 'Pupitar', type: ['Rock', 'Ground'], description: "It moves by blasting compressed air from its shell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png" },
  { name: 'Tyranitar', type: ['Rock', 'Dark'], description: "It is so powerful it can change the landscape with ease.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png" },

  { name: 'Lugia', type: ['Psychic', 'Flying'], description: "It is said to live deep in the ocean to avoid causing storms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png" },
  { name: 'Ho-Oh', type: ['Fire', 'Flying'], description: "Legends say it brings eternal happiness to those who see it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png" },

  { name: 'Celebi', type: ['Psychic', 'Grass'], description: "A mythical Pokémon that travels through time.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png" },
  // Generation 3
  { name: 'Treecko', type: ['Grass'], description: "It makes its home in tall trees and attacks with swift agility.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png" },
  { name: 'Grovyle', type: ['Grass'], description: "It leaps from branch to branch with incredible speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png" },
  { name: 'Sceptile', type: ['Grass'], description: "It nurtures the trees in its forest and moves with blinding quickness.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png" },

  { name: 'Torchic', type: ['Fire'], description: "It keeps a flame inside its body and loves to cuddle for warmth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png" },
  { name: 'Combusken', type: ['Fire', 'Fighting'], description: "It delivers powerful kicks and lets out fierce battle cries.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png" },
  { name: 'Blaziken', type: ['Fire', 'Fighting'], description: "It can unleash blazing kicks that scorch the air.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png" },

  { name: 'Mudkip', type: ['Water'], description: "It can lift boulders with its powerful tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png" },
  { name: 'Marshtomp', type: ['Water', 'Ground'], description: "Its sturdy legs let it move easily through mud.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png" },
  { name: 'Swampert', type: ['Water', 'Ground'], description: "It can swim faster than a jet ski and predict storms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png" },

  { name: 'Poochyena', type: ['Dark'], description: "It bites at anything that moves and never backs down.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png" },
  { name: 'Mightyena', type: ['Dark'], description: "It follows its leader’s commands faithfully.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png" },

  { name: 'Zigzagoon', type: ['Normal'], description: "It wanders restlessly and loves to pick up anything it finds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png" },
  { name: 'Linoone', type: ['Normal'], description: "It runs in straight lines at incredible speeds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png" },

  { name: 'Wurmple', type: ['Bug'], description: "It eats leaves and is preyed upon by many Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png" },
  { name: 'Silcoon', type: ['Bug'], description: "It prepares for evolution by wrapping itself in silk.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png" },
  { name: 'Beautifly', type: ['Bug', 'Flying'], description: "It flits around fields and drinks nectar with its long proboscis.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png" },

  { name: 'Cascoon', type: ['Bug'], description: "It remains motionless, waiting for evolution.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png" },
  { name: 'Dustox', type: ['Bug', 'Poison'], description: "It scatters toxic dust from its wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png" },

  { name: 'Lotad', type: ['Water', 'Grass'], description: "It lives on ponds and ferries small Pokémon across the water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png" },
  { name: 'Lombre', type: ['Water', 'Grass'], description: "It enjoys playing pranks on people.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png" },
  { name: 'Ludicolo', type: ['Water', 'Grass'], description: "It becomes energetic when it hears festive music.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png" },

  { name: 'Seedot', type: ['Grass'], description: "It hangs from branches and absorbs nutrients.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png" },
  { name: 'Nuzleaf', type: ['Grass', 'Dark'], description: "It plays flute-like melodies to communicate.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png" },
  { name: 'Shiftry', type: ['Grass', 'Dark'], description: "It is feared as a guardian of the forest.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png" },

  { name: 'Taillow', type: ['Normal', 'Flying'], description: "It never gives up, even when hungry or tired.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png" },
  { name: 'Swellow', type: ['Normal', 'Flying'], description: "It dives at foes with great precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png" },

  { name: 'Wingull', type: ['Water', 'Flying'], description: "It rides ocean winds and carries food in its beak.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png" },
  { name: 'Pelipper', type: ['Water', 'Flying'], description: "It stores items in its large beak pouch.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png" },

  { name: 'Ralts', type: ['Psychic', 'Fairy'], description: "It senses emotions and approaches those with kind hearts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png" },
  { name: 'Kirlia', type: ['Psychic', 'Fairy'], description: "It dances gracefully and boosts its psychic power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png" },
  { name: 'Gardevoir', type: ['Psychic', 'Fairy'], description: "It will protect its trainer even at the cost of its life.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" },

  { name: 'Surskit', type: ['Bug', 'Water'], description: "It glides across water surfaces effortlessly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png" },
  { name: 'Masquerain', type: ['Bug', 'Flying'], description: "Its intimidating eyespots ward off enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png" },

  { name: 'Shroomish', type: ['Grass'], description: "It scatters spores when startled.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png" },
  { name: 'Breloom', type: ['Grass', 'Fighting'], description: "It attacks with elastic punches and poisonous spores.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png" },

  { name: 'Slakoth', type: ['Normal'], description: "It sleeps for most of the day and barely moves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png" },
  { name: 'Vigoroth', type: ['Normal'], description: "It is always bursting with energy and never sits still.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png" },
  { name: 'Slaking', type: ['Normal'], description: "It is incredibly powerful but extremely lazy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png" },

  { name: 'Nincada', type: ['Bug', 'Ground'], description: "It lives underground and feeds on tree roots.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png" },
  { name: 'Ninjask', type: ['Bug', 'Flying'], description: "It moves so quickly it is almost invisible.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png" },
  { name: 'Shedinja', type: ['Bug', 'Ghost'], description: "It is a mysterious shell that appears without warning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png" },

  { name: 'Whismur', type: ['Normal'], description: "Its cries are very quiet, but it can scream loudly when scared.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png" },
  { name: 'Loudred', type: ['Normal'], description: "It shouts to communicate and can shake the ground.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png" },
  { name: 'Exploud', type: ['Normal'], description: "Its voice can break through rock and steel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png" },

  { name: 'Makuhita', type: ['Fighting'], description: "It trains tirelessly to build its strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png" },
  { name: 'Hariyama', type: ['Fighting'], description: "It uses powerful slaps to send opponents flying.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png" },

  { name: 'Azurill', type: ['Normal', 'Fairy'], description: "It bounces around on its large tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png" },

  { name: 'Nosepass', type: ['Rock'], description: "It always faces north due to its magnetic nose.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png" },

  { name: 'Skitty', type: ['Normal'], description: "It chases its tail endlessly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png" },
  { name: 'Delcatty', type: ['Normal'], description: "It prefers to live a carefree lifestyle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png" },

  { name: 'Sableye', type: ['Dark', 'Ghost'], description: "It eats gemstones and hides in caves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png" },

  { name: 'Mawile', type: ['Steel', 'Fairy'], description: "Its huge jaws are actually horns that can crush anything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png" },

  { name: 'Aron', type: ['Steel', 'Rock'], description: "It eats iron to grow its metal body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png" },
  { name: 'Lairon', type: ['Steel', 'Rock'], description: "It battles rivals over sources of iron.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png" },
  { name: 'Aggron', type: ['Steel', 'Rock'], description: "It fiercely guards its territory.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png" },

  { name: 'Meditite', type: ['Fighting', 'Psychic'], description: "It meditates to heighten its inner power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png" },
  { name: 'Medicham', type: ['Fighting', 'Psychic'], description: "It uses yoga to sharpen its mind and body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png" },

  { name: 'Electrike', type: ['Electric'], description: "It stores electricity in its fur.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png" },
  { name: 'Manectric', type: ['Electric'], description: "It gathers storm clouds and unleashes lightning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png" },

  { name: 'Plusle', type: ['Electric'], description: "It cheers loudly for its teammates.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png" },
  { name: 'Minun', type: ['Electric'], description: "It boosts team morale with its positive energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png" },

  { name: 'Volbeat', type: ['Bug'], description: "It communicates with light signals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png" },
  { name: 'Illumise', type: ['Bug'], description: "It guides Volbeat with its sweet fragrance.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png" },

  { name: 'Roselia', type: ['Grass', 'Poison'], description: "Its flowers give off a relaxing fragrance.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png" },

  { name: 'Gulpin', type: ['Poison'], description: "It swallows anything whole with its stretchy mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png" },
  { name: 'Swalot', type: ['Poison'], description: "It can swallow objects larger than itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png" },

  { name: 'Carvanha', type: ['Water', 'Dark'], description: "It attacks ships in packs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png" },
  { name: 'Sharpedo', type: ['Water', 'Dark'], description: "It is feared as the bully of the sea.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png" },

  { name: 'Wailmer', type: ['Water'], description: "It bounces playfully on the surface of the ocean.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png" },
  { name: 'Wailord', type: ['Water'], description: "It is one of the largest Pokémon ever discovered.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png" },

  { name: 'Numel', type: ['Fire', 'Ground'], description: "It stores magma in its hump.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png" },
  { name: 'Camerupt', type: ['Fire', 'Ground'], description: "Its volcano-like humps erupt violently.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png" },

  { name: 'Torkoal', type: ['Fire'], description: "It burns coal inside its shell to produce energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png" },

  { name: 'Spoink', type: ['Psychic'], description: "It bounces constantly to keep its heart beating.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png" },
  { name: 'Grumpig', type: ['Psychic'], description: "It uses black pearls to amplify its psychic power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png" },

  { name: 'Spinda', type: ['Normal'], description: "Its dizzying movements confuse opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png" },

  { name: 'Trapinch', type: ['Ground'], description: "It has powerful jaws that snap shut like a trap.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png" },
  { name: 'Vibrava', type: ['Ground', 'Dragon'], description: "It vibrates its wings to create ultrasonic waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png" },
    { name: 'Flygon', type: ['Ground', 'Dragon'], description: "It is known as the spirit of the desert and creates melodies with its wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png" },

  { name: 'Cacnea', type: ['Grass'], description: "It lives in arid regions and attacks by swinging its arms full of thorns.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png" },
  { name: 'Cacturne', type: ['Grass', 'Dark'], description: "It wanders the desert at night, following travelers like a shadow.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png" },

  { name: 'Swablu', type: ['Normal', 'Flying'], description: "It perches on people’s heads and gently cleans them with its cottony wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png" },
  { name: 'Altaria', type: ['Dragon', 'Flying'], description: "It sings with a beautiful voice that sounds like the sky itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png" },

  { name: 'Zangoose', type: ['Normal'], description: "It has a long-standing rivalry with Seviper and fights with sharp claws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png" },
  { name: 'Seviper', type: ['Poison'], description: "Its tail blade is filled with venom and used in fierce battles with Zangoose.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png" },

  { name: 'Lunatone', type: ['Rock', 'Psychic'], description: "It becomes active under the full moon and floats silently through the night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png" },
  { name: 'Solrock', type: ['Rock', 'Psychic'], description: "It absorbs sunlight and releases blazing beams of energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png" },

  { name: 'Barboach', type: ['Water', 'Ground'], description: "Its whiskers act as radar sensors to detect movement in muddy water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png" },
  { name: 'Whiscash', type: ['Water', 'Ground'], description: "It can cause earthquakes by thrashing its body wildly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png" },

  { name: 'Corphish', type: ['Water'], description: "It is a hardy Pokémon that thrives in any environment.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png" },
  { name: 'Crawdaunt', type: ['Water', 'Dark'], description: "It is extremely aggressive and challenges anything that enters its territory.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png" },

  { name: 'Baltoy', type: ['Ground', 'Psychic'], description: "It spins around on one foot and was discovered in ancient ruins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png" },
  { name: 'Claydol', type: ['Ground', 'Psychic'], description: "It is said to be a clay statue animated by mysterious energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png" },

  { name: 'Lileep', type: ['Rock', 'Grass'], description: "An ancient Pokémon revived from a fossil; it uses its tentacles to ensnare prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png" },
  { name: 'Cradily', type: ['Rock', 'Grass'], description: "It filters seawater to catch prey and anchors itself to the ocean floor.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png" },

  { name: 'Anorith', type: ['Rock', 'Bug'], description: "A prehistoric Pokémon with sharp claws used for hunting.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png" },
  { name: 'Armaldo', type: ['Rock', 'Bug'], description: "Its tough armor protects it from attacks while it strikes with powerful claws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png" },

  { name: 'Feebas', type: ['Water'], description: "It is shunned for its shabby appearance but is very hardy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png" },
  { name: 'Milotic', type: ['Water'], description: "It is said to be the most beautiful Pokémon and calms hostility.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png" },

  { name: 'Castform', type: ['Normal'], description: "It changes form depending on the weather conditions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png" },

  { name: 'Kecleon', type: ['Normal'], description: "It can change its body color to blend into its surroundings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png" },

  { name: 'Shuppet', type: ['Ghost'], description: "It feeds on negative emotions like jealousy and hatred.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png" },
  { name: 'Banette', type: ['Ghost'], description: "A doll that became a Pokémon after being abandoned; it seeks revenge.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png" },

  { name: 'Duskull', type: ['Ghost'], description: "It wanders silently through the night and loves playing pranks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png" },
  { name: 'Dusclops', type: ['Ghost'], description: "Its body is hollow and absorbs anything into its vortex-like core.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png" },

  { name: 'Tropius', type: ['Grass', 'Flying'], description: "It grows fruit around its neck that is delicious and nutritious.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png" },

  { name: 'Chimecho', type: ['Psychic'], description: "Its cries echo with a beautiful, bell-like sound.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png" },

  { name: 'Absol', type: ['Dark'], description: "It appears before disasters, earning it an undeserved reputation.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png" },

  { name: 'Wynaut', type: ['Psychic'], description: "It grows stronger by enduring attacks with a cheerful attitude.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png" },

  { name: 'Snorunt', type: ['Ice'], description: "It survives by living in groups inside cold caves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png" },
  { name: 'Glalie', type: ['Ice'], description: "It freezes prey with its icy breath.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png" },

  { name: 'Spheal', type: ['Ice', 'Water'], description: "It rolls around playfully and claps when happy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png" },
  { name: 'Sealeo', type: ['Ice', 'Water'], description: "It balances objects on its nose and juggles them skillfully.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png" },
  { name: 'Walrein', type: ['Ice', 'Water'], description: "Its thick hide protects it from harsh cold and enemy attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png" },

  { name: 'Clamperl', type: ['Water'], description: "Its shell is extremely strong and protects it from predators.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png" },
  { name: 'Huntail', type: ['Water'], description: "It lurks in deep seas and uses its glowing tail to lure prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png" },
  { name: 'Gorebyss', type: ['Water'], description: "It feeds by draining bodily fluids from prey with its thin mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png" },

  { name: 'Relicanth', type: ['Water', 'Rock'], description: "A living fossil that has remained unchanged for millions of years.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png" },

  { name: 'Luvdisc', type: ['Water'], description: "It is a symbol of love and is often seen in couples.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png" },

  { name: 'Bagon', type: ['Dragon'], description: "It dreams of flying and repeatedly leaps off cliffs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png" },
  { name: 'Shelgon', type: ['Dragon'], description: "Its shell is extremely hard, protecting it as it evolves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png" },
  { name: 'Salamence', type: ['Dragon', 'Flying'], description: "It finally achieves flight after long years of longing.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png" },

  { name: 'Beldum', type: ['Steel', 'Psychic'], description: "It communicates with others by using magnetic pulses.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png" },
  { name: 'Metang', type: ['Steel', 'Psychic'], description: "It is formed when two Beldum join together.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png" },
  { name: 'Metagross', type: ['Steel', 'Psychic'], description: "It analyzes battles with its supercomputer-like brain.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png" },

  { name: 'Regirock', type: ['Rock'], description: "Its body is made of rocks that it constantly repairs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png" },
  { name: 'Regice', type: ['Ice'], description: "Its body is made of ice from the Antarctic and never melts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png" },
  { name: 'Registeel', type: ['Steel'], description: "Its body is harder than any known metal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png" },

  { name: 'Latias', type: ['Dragon', 'Psychic'], description: "It can cloak itself in glass-like down to become invisible.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png" },
  { name: 'Latios', type: ['Dragon', 'Psychic'], description: "It understands human speech and is highly intelligent.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png" },

  { name: 'Kyogre', type: ['Water'], description: "It expanded the oceans and is said to embody the sea itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png" },
  { name: 'Groudon', type: ['Ground'], description: "It expanded the land and is said to embody the earth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png" },
  { name: 'Rayquaza', type: ['Dragon', 'Flying'], description: "It lives high in the ozone layer and calms the clash of land and sea.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" },

  { name: 'Jirachi', type: ['Steel', 'Psychic'], description: "It awakens for seven days every thousand years to grant wishes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png" },

  { name: 'Deoxys', type: ['Psychic'], description: "A virus mutated in space, giving rise to this powerful Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png" },
  // Generation 4
  { name: 'Turtwig', type: ['Grass'], description: "It absorbs water through the leaf on its head to stay healthy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png" },
  { name: 'Grotle', type: ['Grass'], description: "It carries fertile soil on its shell where small plants grow.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png" },
  { name: 'Torterra', type: ['Grass', 'Ground'], description: "Large Pokémon sometimes make their nests on its back.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png" },

  { name: 'Chimchar', type: ['Fire'], description: "Its flame burns weakly when it is tired.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png" },
  { name: 'Monferno', type: ['Fire', 'Fighting'], description: "It uses its fiery tail as a weapon in battle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png" },
  { name: 'Infernape', type: ['Fire', 'Fighting'], description: "Its fiery punches and kicks are unmatched.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png" },

  { name: 'Piplup', type: ['Water'], description: "It is proud and dislikes accepting help.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png" },
  { name: 'Prinplup', type: ['Water'], description: "It lives alone and claims large territories.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png" },
  { name: 'Empoleon', type: ['Water', 'Steel'], description: "Its wings are sharp enough to slice through icebergs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png" },

  { name: 'Starly', type: ['Normal', 'Flying'], description: "It lives in flocks and cries loudly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png" },
  { name: 'Staravia', type: ['Normal', 'Flying'], description: "It fights fiercely to protect its territory.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png" },
  { name: 'Staraptor', type: ['Normal', 'Flying'], description: "It never stops attacking until its opponent gives up.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png" },

  { name: 'Bidoof', type: ['Normal'], description: "A hardworking Pokémon that constantly gnaws on wood.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png" },
  { name: 'Bibarel', type: ['Normal', 'Water'], description: "It builds dams along rivers using its sturdy teeth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png" },

  { name: 'Kricketot', type: ['Bug'], description: "It communicates by vibrating its antennae.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png" },
  { name: 'Kricketune', type: ['Bug'], description: "It produces melodies with its arms like a violin.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png" },

  { name: 'Shinx', type: ['Electric'], description: "Its muscles generate electricity when it contracts them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png" },
  { name: 'Luxio', type: ['Electric'], description: "It forms packs that hunt together.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png" },
  { name: 'Luxray', type: ['Electric'], description: "It can see through solid objects with its piercing eyes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png" },

  { name: 'Budew', type: ['Grass', 'Poison'], description: "It blooms when exposed to sunlight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png" },
  { name: 'Roserade', type: ['Grass', 'Poison'], description: "Its bouquet contains deadly toxins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png" },

  { name: 'Cranidos', type: ['Rock'], description: "It headbutts everything with its thick skull.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png" },
  { name: 'Rampardos', type: ['Rock'], description: "Its headbutts can shatter even the hardest bedrock.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png" },

  { name: 'Shieldon', type: ['Rock', 'Steel'], description: "It protects itself with its sturdy face.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png" },
  { name: 'Bastiodon', type: ['Rock', 'Steel'], description: "Its massive face acts as a fortress.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png" },

  { name: 'Burmy', type: ['Bug'], description: "It changes its cloak depending on its environment.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png" },
  { name: 'Wormadam', type: ['Bug', 'Grass'], description: "Its cloak varies based on where it evolved.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" },
  { name: 'Mothim', type: ['Bug', 'Flying'], description: "It travels far to find food.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png" },

  { name: 'Combee', type: ['Bug', 'Flying'], description: "It works with others to collect honey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png" },
  { name: 'Vespiquen', type: ['Bug', 'Flying'], description: "It commands its hive with royal authority.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png" },

  { name: 'Pachirisu', type: ['Electric'], description: "It stores electricity in its fluffy tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png" },

  { name: 'Buizel', type: ['Water'], description: "It swims by spinning its twin tails like a propeller.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png" },
  { name: 'Floatzel', type: ['Water'], description: "It rescues drowning people with its flotation sac.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png" },

  { name: 'Cherubi', type: ['Grass'], description: "It absorbs sunlight to grow its second head.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png" },
  { name: 'Cherrim', type: ['Grass'], description: "It blooms brightly in sunlight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png" },

  { name: 'Shellos', type: ['Water'], description: "Its color varies depending on where it lives.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png" },
  { name: 'Gastrodon', type: ['Water', 'Ground'], description: "Its body is soft and squishy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png" },

  { name: 'Ambipom', type: ['Normal'], description: "It uses its twin tails with incredible dexterity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png" },

  { name: 'Drifloon', type: ['Ghost', 'Flying'], description: "It drifts along the wind and sometimes carries children away.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png" },
  { name: 'Drifblim', type: ['Ghost', 'Flying'], description: "It floats through the sky like a balloon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png" },

  { name: 'Buneary', type: ['Normal'], description: "It curls up tightly when scared.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png" },
  { name: 'Lopunny', type: ['Normal'], description: "It is extremely cautious and avoids danger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png" },

  { name: 'Mismagius', type: ['Ghost'], description: "Its chants can cause hallucinations.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png" },

  { name: 'Honchkrow', type: ['Dark', 'Flying'], description: "It commands its underlings with a deep cry.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png" },

  { name: 'Glameow', type: ['Normal'], description: "It has a fickle personality and may suddenly become hostile.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png" },
  { name: 'Purugly', type: ['Normal'], description: "It intimidates opponents by making itself appear larger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png" },

  { name: 'Chingling', type: ['Psychic'], description: "Its cries ring like a bell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png" },

  { name: 'Stunky', type: ['Poison', 'Dark'], description: "It sprays a foul-smelling fluid to repel enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png" },
  { name: 'Skuntank', type: ['Poison', 'Dark'], description: "Its spray can reach over 160 feet.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png" },

  { name: 'Bronzor', type: ['Steel', 'Psychic'], description: "It was once used as a mirror.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png" },
  { name: 'Bronzong', type: ['Steel', 'Psychic'], description: "It can summon rain clouds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png" },

  { name: 'Bonsly', type: ['Rock'], description: "It cries to expel excess moisture.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png" },

  { name: 'Mime Jr.', type: ['Psychic', 'Fairy'], description: "It mimics others to learn new skills.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png" },

  { name: 'Happiny', type: ['Normal'], description: "It carries a round stone as a treasure.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png" },

  { name: 'Chatot', type: ['Normal', 'Flying'], description: "It can mimic human speech perfectly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png" },

  { name: 'Spiritomb', type: ['Ghost', 'Dark'], description: "It is formed from 108 spirits bound to a keystone.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png" },

  { name: 'Gible', type: ['Dragon', 'Ground'], description: "It nests in caves warmed by geothermal heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png" },
  { name: 'Gabite', type: ['Dragon', 'Ground'], description: "It hoards gems and treasures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png" },
  { name: 'Garchomp', type: ['Dragon', 'Ground'], description: "It flies at incredible speeds and hunts prey from above.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png" },

  { name: 'Munchlax', type: ['Normal'], description: "It eats constantly and stores food in its fur.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png" },

  { name: 'Riolu', type: ['Fighting'], description: "It communicates through aura waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png" },
  { name: 'Lucario', type: ['Fighting', 'Steel'], description: "It can sense the emotions of others through aura.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" },

  { name: 'Hippopotas', type: ['Ground'], description: "It avoids water and lives in dry deserts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png" },
  { name: 'Hippowdon', type: ['Ground'], description: "It creates sandstorms by exhaling sand.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png" },

  { name: 'Skorupi', type: ['Poison', 'Bug'], description: "It grips prey with its claws and injects venom.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png" },
  { name: 'Drapion', type: ['Poison', 'Dark'], description: "It is extremely dangerous and can tear apart cars.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png" },

  { name: 'Croagunk', type: ['Poison', 'Fighting'], description: "It stores poison in its cheek sacs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png" },
  { name: 'Toxicroak', type: ['Poison', 'Fighting'], description: "Its knuckle claws are filled with deadly venom.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png" },

  { name: 'Carnivine', type: ['Grass'], description: "It lures prey with sweet-smelling saliva.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png" },

  { name: 'Finneon', type: ['Water'], description: "Its tail shines brightly in the water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png" },
  { name: 'Lumineon', type: ['Water'], description: "It guides others through the deep sea with its glowing fins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png" },

  { name: 'Mantyke', type: ['Water', 'Flying'], description: "It swims with a friendly smile.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png" },

  { name: 'Snover', type: ['Grass', 'Ice'], description: "It lives in snowy mountains and announces winter’s arrival.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png" },
  { name: 'Abomasnow', type: ['Grass', 'Ice'], description: "It can summon blizzards at will.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png" },

  { name: 'Weavile', type: ['Dark', 'Ice'], description: "It hunts in packs with coordinated strategies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png" },

  { name: 'Magnezone', type: ['Electric', 'Steel'], description: "It emits strange magnetic waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png" },

  { name: 'Lickilicky', type: ['Normal'], description: "Its tongue can stretch over 20 feet.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png" },

  { name: 'Rhyperior', type: ['Ground', 'Rock'], description: "It can launch rocks from the holes in its hands.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png" },

  { name: 'Tangrowth', type: ['Grass'], description: "Its vines extend when exposed to sunlight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png" },
     { name: 'Electivire', type: ['Electric'], description: "It can unleash powerful electric shocks from its twin tails.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png" },

  { name: 'Magmortar', type: ['Fire'], description: "It blasts fireballs from the ends of its arms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png" },

  { name: 'Togekiss', type: ['Fairy', 'Flying'], description: "It brings blessings to those who are kind and peaceful.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png" },

  { name: 'Yanmega', type: ['Bug', 'Flying'], description: "Its wings create shockwaves strong enough to shatter glass.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png" },

  { name: 'Leafeon', type: ['Grass'], description: "It purifies the air around it by photosynthesizing.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png" },

  { name: 'Glaceon', type: ['Ice'], description: "It can freeze its fur into sharp needles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png" },

  { name: 'Gliscor', type: ['Ground', 'Flying'], description: "It glides silently through the night and attacks with its claws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png" },

  { name: 'Mamoswine', type: ['Ice', 'Ground'], description: "It emerged when the world’s climate grew colder.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png" },

  { name: 'Porygon-Z', type: ['Normal'], description: "Its programming was upgraded, but it became unstable.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png" },

  { name: 'Gallade', type: ['Psychic', 'Fighting'], description: "It protects the weak with its sword-like arms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png" },

  { name: 'Probopass', type: ['Rock', 'Steel'], description: "It controls its mini-noses with magnetic force.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png" },

  { name: 'Dusknoir', type: ['Ghost'], description: "It guides lost spirits to the afterlife.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png" },

  { name: 'Froslass', type: ['Ice', 'Ghost'], description: "It freezes foes and displays them as icy statues.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png" },

  { name: 'Rotom', type: ['Electric', 'Ghost'], description: "It can possess appliances and change forms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png" },

  { name: 'Uxie', type: ['Psychic'], description: "It is said to have given humans the ability to solve problems.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png" },
  { name: 'Mesprit', type: ['Psychic'], description: "It taught humans the meaning of emotion.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png" },
  { name: 'Azelf', type: ['Psychic'], description: "It gave humans the willpower needed to face challenges.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png" },

  { name: 'Dialga', type: ['Steel', 'Dragon'], description: "It controls time itself and is said to be timeless.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png" },

  { name: 'Palkia', type: ['Water', 'Dragon'], description: "It controls space and can distort dimensions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png" },

  { name: 'Heatran', type: ['Fire', 'Steel'], description: "Its body is made of rugged steel heated by magma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png" },

  { name: 'Regigigas', type: ['Normal'], description: "It towed continents with ropes in ancient times.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png" },

  { name: 'Giratina', type: ['Ghost', 'Dragon'], description: "It lives in a world on the reverse side of ours.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png" },

  { name: 'Cresselia', type: ['Psychic'], description: "It represents the crescent moon and brings pleasant dreams.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png" },

  { name: 'Phione', type: ['Water'], description: "It drifts gently through warm seas.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png" },

  { name: 'Manaphy', type: ['Water'], description: "It is born from a single egg and bonds deeply with others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png" },

  { name: 'Darkrai', type: ['Dark'], description: "It causes nightmares to protect itself from harm.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png" },

  { name: 'Shaymin', type: ['Grass'], description: "It purifies polluted air and transforms into a swift Sky Forme.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png" },

  { name: 'Arceus', type: ['Normal'], description: "Said to have shaped the universe with its thousand arms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png" },
  // Generation 5
  { name: 'Victini', type: ['Psychic', 'Fire'], description: "It brings victory to its Trainer and radiates boundless energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png" },

  { name: 'Snivy', type: ['Grass'], description: "It is calm and collected, using its vines with precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png" },
  { name: 'Servine', type: ['Grass'], description: "It moves swiftly and avoids attacks with elegant motions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png" },
  { name: 'Serperior', type: ['Grass'], description: "It gives opponents a cold glare that can freeze them in place.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png" },

  { name: 'Tepig', type: ['Fire'], description: "It blows fire from its snout to roast berries.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png" },
  { name: 'Pignite', type: ['Fire', 'Fighting'], description: "Its internal fire burns stronger when it is excited.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png" },
  { name: 'Emboar', type: ['Fire', 'Fighting'], description: "It can throw fire punches with blazing speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png" },

  { name: 'Oshawott', type: ['Water'], description: "It fights using the scalchop on its belly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png" },
  { name: 'Dewott', type: ['Water'], description: "It trains endlessly to perfect its scalchop techniques.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png" },
  { name: 'Samurott', type: ['Water'], description: "It wields a hidden blade to strike with samurai-like precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png" },

  { name: 'Patrat', type: ['Normal'], description: "It keeps watch for danger with its sharp eyes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png" },
  { name: 'Watchog', type: ['Normal'], description: "It uses luminescent markings to intimidate foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png" },

  { name: 'Lillipup', type: ['Normal'], description: "It is intelligent and faces opponents bravely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png" },
  { name: 'Herdier', type: ['Normal'], description: "It is loyal and helps Trainers with daily tasks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png" },
  { name: 'Stoutland', type: ['Normal'], description: "It rescues people stranded in blizzards.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png" },

  { name: 'Purrloin', type: ['Dark'], description: "It steals from others with a sly grin.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png" },
  { name: 'Liepard', type: ['Dark'], description: "It moves gracefully and strikes without warning.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png" },

  { name: 'Pansage', type: ['Grass'], description: "It shares its leafy head with others to heal them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png" },
  { name: 'Simisage', type: ['Grass'], description: "It is fierce and attacks with its thorny tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png" },

  { name: 'Pansear', type: ['Fire'], description: "It heats food with the flame atop its head.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png" },
  { name: 'Simisear', type: ['Fire'], description: "It loves sweets and stores heat in its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png" },

  { name: 'Panpour', type: ['Water'], description: "It stores water in its head and sprays it playfully.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png" },
  { name: 'Simipour', type: ['Water'], description: "It releases water from its tail with great force.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png" },

  { name: 'Munna', type: ['Psychic'], description: "It eats dreams and exhales dream mist.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png" },
  { name: 'Musharna', type: ['Psychic'], description: "Its dream mist can show dreams and nightmares.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png" },

  { name: 'Pidove', type: ['Normal', 'Flying'], description: "It is naïve but very loyal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png" },
  { name: 'Tranquill', type: ['Normal', 'Flying'], description: "It lives peacefully deep in forests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png" },
  { name: 'Unfezant', type: ['Normal', 'Flying'], description: "The males are proud and never show weakness.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png" },

  { name: 'Blitzle', type: ['Electric'], description: "Its mane flashes when it is excited.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png" },
  { name: 'Zebstrika', type: ['Electric'], description: "It runs at lightning-like speeds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png" },

  { name: 'Roggenrola', type: ['Rock'], description: "Its ear-like hole can hear distant sounds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png" },
  { name: 'Boldore', type: ['Rock'], description: "It stores energy in its orange crystals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png" },
  { name: 'Gigalith', type: ['Rock'], description: "It can fire powerful beams from its crystals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png" },

  { name: 'Woobat', type: ['Psychic', 'Flying'], description: "It leaves heart-shaped marks wherever it goes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png" },
  { name: 'Swoobat', type: ['Psychic', 'Flying'], description: "It generates ultrasonic waves with its nose.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png" },

  { name: 'Drilbur', type: ['Ground'], description: "It digs tunnels rapidly with its spinning claws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png" },
  { name: 'Excadrill', type: ['Ground', 'Steel'], description: "It can tunnel through bedrock with ease.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png" },

  { name: 'Audino', type: ['Normal'], description: "It can sense the heartbeat of others by touching them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png" },

  { name: 'Timburr', type: ['Fighting'], description: "It carries a wooden beam as a symbol of strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png" },
  { name: 'Gurdurr', type: ['Fighting'], description: "It trains with steel beams to grow stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png" },
  { name: 'Conkeldurr', type: ['Fighting'], description: "It uses concrete pillars as weapons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png" },

  { name: 'Tympole', type: ['Water'], description: "It warns others of danger by vibrating its cheeks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png" },
  { name: 'Palpitoad', type: ['Water', 'Ground'], description: "It uses vibrations to communicate and attack.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png" },
  { name: 'Seismitoad', type: ['Water', 'Ground'], description: "Its fists vibrate to increase the power of its punches.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png" },

  { name: 'Throh', type: ['Fighting'], description: "It trains endlessly and never gives up.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png" },
  { name: 'Sawk', type: ['Fighting'], description: "It sharpens its karate chops on boulders.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png" },

  { name: 'Sewaddle', type: ['Bug', 'Grass'], description: "It makes clothes for itself out of leaves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png" },
  { name: 'Swadloon', type: ['Bug', 'Grass'], description: "It hides in its cloak to stay warm.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png" },
  { name: 'Leavanny', type: ['Bug', 'Grass'], description: "It crafts leaf clothing for small Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png" },

  { name: 'Venipede', type: ['Bug', 'Poison'], description: "It is extremely aggressive and attacks anything that moves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png" },
  { name: 'Whirlipede', type: ['Bug', 'Poison'], description: "It curls up to protect itself and rolls at high speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png" },
  { name: 'Scolipede', type: ['Bug', 'Poison'], description: "It charges at foes with incredible speed and power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png" },

  { name: 'Cottonee', type: ['Grass', 'Fairy'], description: "It is blown around by the wind like a cotton ball.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png" },
  { name: 'Whimsicott', type: ['Grass', 'Fairy'], description: "It slips through cracks and causes mischief.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png" },

  { name: 'Petilil', type: ['Grass'], description: "It grows well when cared for by a Trainer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png" },
  { name: 'Lilligant', type: ['Grass'], description: "Its elegant movements captivate those who see it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png" },

  { name: 'Basculin', type: ['Water'], description: "It is extremely hostile and fights constantly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png" },

  { name: 'Sandile', type: ['Ground', 'Dark'], description: "It lives buried in sand and ambushes prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png" },
  { name: 'Krokorok', type: ['Ground', 'Dark'], description: "It hunts in small groups.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png" },
  { name: 'Krookodile', type: ['Ground', 'Dark'], description: "Its jaws can crush cars.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png" },

  { name: 'Darumaka', type: ['Fire'], description: "It sleeps deeply to preserve its heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png" },
  { name: 'Darmanitan', type: ['Fire'], description: "Its fire burns so hot it can melt iron.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png" },

  { name: 'Maractus', type: ['Grass'], description: "It dances rhythmically to ward off enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png" },

  { name: 'Dwebble', type: ['Bug', 'Rock'], description: "It makes its home inside rocks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png" },
  { name: 'Crustle', type: ['Bug', 'Rock'], description: "It carries a massive stone on its back.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png" },

  { name: 'Scraggy', type: ['Dark', 'Fighting'], description: "It headbutts foes with its thick skull.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png" },
  { name: 'Scrafty', type: ['Dark', 'Fighting'], description: "It protects its turf fiercely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png" },

  { name: 'Sigilyph', type: ['Psychic', 'Flying'], description: "It guards ancient ruins with mysterious power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png" },

  { name: 'Yamask', type: ['Ghost'], description: "It carries a mask that used to be its face.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png" },
  { name: 'Cofagrigus', type: ['Ghost'], description: "It traps grave robbers inside its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png" },

  { name: 'Tirtouga', type: ['Water', 'Rock'], description: "A prehistoric Pokémon revived from a fossil.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png" },
  { name: 'Carracosta', type: ['Water', 'Rock'], description: "Its jaws can bite through steel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png" },

  { name: 'Archen', type: ['Rock', 'Flying'], description: "It is believed to be the ancestor of all bird Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png" },
  { name: 'Archeops', type: ['Rock', 'Flying'], description: "It is intelligent and hunts in coordinated packs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png" },

  { name: 'Trubbish', type: ['Poison'], description: "It is formed from garbage and industrial waste.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png" },
  { name: 'Garbodor', type: ['Poison'], description: "It sprays toxic chemicals from its fingertips.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png" },

  { name: 'Zorua', type: ['Dark'], description: "It tricks opponents by creating illusions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png" },
  { name: 'Zoroark', type: ['Dark'], description: "It protects its lair with powerful illusions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png" },

  { name: 'Minccino', type: ['Normal'], description: "It cleans everything with its tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png" },
    { name: 'Cinccino', type: ['Normal'], description: "Its tail is coated in a special oil that repels dust.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png" },

  { name: 'Gothita', type: ['Psychic'], description: "It stares intently at everything, studying its surroundings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png" },
  { name: 'Gothorita', type: ['Psychic'], description: "It uses its psychic powers to control others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png" },
  { name: 'Gothitelle', type: ['Psychic'], description: "It can predict the future by reading the stars.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png" },

  { name: 'Solosis', type: ['Psychic'], description: "Its body is surrounded by a special fluid that protects it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png" },
  { name: 'Duosion', type: ['Psychic'], description: "Its two brains communicate to increase its psychic power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png" },
  { name: 'Reuniclus', type: ['Psychic'], description: "It uses its arms to amplify its psychic abilities.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png" },

  { name: 'Ducklett', type: ['Water', 'Flying'], description: "It swims gracefully and flaps its wings playfully.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png" },
  { name: 'Swanna', type: ['Water', 'Flying'], description: "It dances elegantly on the water’s surface.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png" },

  { name: 'Vanillite', type: ['Ice'], description: "It is born from a snow cloud and loves cold climates.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png" },
  { name: 'Vanillish', type: ['Ice'], description: "It freezes opponents with its icy breath.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png" },
  { name: 'Vanilluxe', type: ['Ice'], description: "Its two heads can create powerful blizzards.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png" },

  { name: 'Deerling', type: ['Normal', 'Grass'], description: "Its appearance changes with the seasons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png" },
  { name: 'Sawsbuck', type: ['Normal', 'Grass'], description: "Its antlers change shape depending on the season.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png" },

  { name: 'Emolga', type: ['Electric', 'Flying'], description: "It glides using its membrane-like wings.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png" },

  { name: 'Karrablast', type: ['Bug'], description: "It attacks foes by charging at them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png" },
  { name: 'Escavalier', type: ['Bug', 'Steel'], description: "It fights with the lances it stole from Shelmet.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png" },

  { name: 'Foongus', type: ['Grass', 'Poison'], description: "It lures prey with its Poké Ball-like appearance.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png" },
  { name: 'Amoonguss', type: ['Grass', 'Poison'], description: "It waves its arms to attract prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png" },

  { name: 'Frillish', type: ['Water', 'Ghost'], description: "It drags prey into the depths of the sea.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png" },
  { name: 'Jellicent', type: ['Water', 'Ghost'], description: "It is feared by sailors for pulling ships underwater.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png" },

  { name: 'Alomomola', type: ['Water'], description: "It heals injured Pokémon by wrapping them in its fins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png" },

  { name: 'Joltik', type: ['Bug', 'Electric'], description: "It attaches itself to larger Pokémon to absorb electricity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png" },
  { name: 'Galvantula', type: ['Bug', 'Electric'], description: "It shoots electrically charged threads to trap foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png" },

  { name: 'Ferroseed', type: ['Grass', 'Steel'], description: "It sticks its spikes into cave walls to absorb minerals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png" },
  { name: 'Ferrothorn', type: ['Grass', 'Steel'], description: "It swings its spiked vines to attack enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png" },

  { name: 'Klink', type: ['Steel'], description: "Its gears rotate together in perfect synchronization.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png" },
  { name: 'Klang', type: ['Steel'], description: "It fires energy blasts from its rotating gears.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png" },
  { name: 'Klinklang', type: ['Steel'], description: "It uses its gear system to generate powerful electricity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png" },

  { name: 'Tynamo', type: ['Electric'], description: "It flashes electricity to intimidate foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png" },
  { name: 'Eelektrik', type: ['Electric'], description: "It wraps foes with its body and shocks them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png" },
  { name: 'Eelektross', type: ['Electric'], description: "It drags prey into the ocean depths.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png" },

  { name: 'Elgyem', type: ['Psychic'], description: "It is believed to have come from outer space.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png" },
  { name: 'Beheeyem', type: ['Psychic'], description: "It communicates using flashing lights on its hands.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png" },

  { name: 'Litwick', type: ['Ghost', 'Fire'], description: "It uses its flame to absorb the life energy of others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png" },
  { name: 'Lampent', type: ['Ghost', 'Fire'], description: "It appears at the moment of death to absorb spirits.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png" },
  { name: 'Chandelure', type: ['Ghost', 'Fire'], description: "Its flames burn the spirits of the deceased.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png" },

  { name: 'Axew', type: ['Dragon'], description: "It marks territory by bashing its tusks into trees.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png" },
  { name: 'Fraxure', type: ['Dragon'], description: "Its tusks are so tough they never break.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png" },
  { name: 'Haxorus', type: ['Dragon'], description: "Its axe-like tusks can cut through steel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png" },

  { name: 'Cubchoo', type: ['Ice'], description: "Its runny nose is a sign of its health.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png" },
  { name: 'Beartic', type: ['Ice'], description: "It freezes its breath to create ice weapons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png" },

  { name: 'Cryogonal', type: ['Ice'], description: "It captures prey by freezing them with its icy chains.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png" },

  { name: 'Shelmet', type: ['Bug'], description: "It protects itself by closing its shell tightly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png" },
  { name: 'Accelgor', type: ['Bug'], description: "It moves so fast it leaves afterimages.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png" },

  { name: 'Stunfisk', type: ['Ground', 'Electric'], description: "It lies flat and waits to shock unsuspecting prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png" },

  { name: 'Mienfoo', type: ['Fighting'], description: "It practices elegant martial arts techniques.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png" },
  { name: 'Mienshao', type: ['Fighting'], description: "It attacks with whip-like strikes from its long arms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png" },

  { name: 'Druddigon', type: ['Dragon'], description: "It absorbs sunlight to warm its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png" },

  { name: 'Golett', type: ['Ground', 'Ghost'], description: "It was created by an ancient civilization.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png" },
  { name: 'Golurk', type: ['Ground', 'Ghost'], description: "It can fly by releasing energy from its hands and feet.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png" },

  { name: 'Pawniard', type: ['Dark', 'Steel'], description: "It fights in packs and never retreats.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png" },
  { name: 'Bisharp', type: ['Dark', 'Steel'], description: "It commands Pawniard troops in battle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png" },

  { name: 'Bouffalant', type: ['Normal'], description: "Its headbutts can shatter trucks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png" },

  { name: 'Rufflet', type: ['Normal', 'Flying'], description: "It never backs down from a challenge.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png" },
  { name: 'Braviary', type: ['Normal', 'Flying'], description: "It is a symbol of bravery and heroism.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png" },

  { name: 'Vullaby', type: ['Dark', 'Flying'], description: "It wears a cracked skull as a diaper.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png" },
  { name: 'Mandibuzz', type: ['Dark', 'Flying'], description: "It circles the skies searching for carrion.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png" },

  { name: 'Heatmor', type: ['Fire'], description: "It melts steel with its fiery tongue.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png" },
  { name: 'Durant', type: ['Bug', 'Steel'], description: "It builds intricate underground nests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png" },

  { name: 'Deino', type: ['Dark', 'Dragon'], description: "It bites everything because it cannot see.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png" },
  { name: 'Zweilous', type: ['Dark', 'Dragon'], description: "Its two heads fight over food constantly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png" },
  { name: 'Hydreigon', type: ['Dark', 'Dragon'], description: "It is ruthless and destroys everything in its path.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png" },

  { name: 'Larvesta', type: ['Bug', 'Fire'], description: "It shoots fire from its horns.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png" },
  { name: 'Volcarona', type: ['Bug', 'Fire'], description: "It is said to be a replacement for the sun during cold eras.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png" },

  { name: 'Cobalion', type: ['Steel', 'Fighting'], description: "It has a calm disposition and leads with wisdom.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png" },
  { name: 'Terrakion', type: ['Rock', 'Fighting'], description: "It can shatter massive walls with a single charge.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png" },
  { name: 'Virizion', type: ['Grass', 'Fighting'], description: "It moves gracefully and protects Pokémon from harm.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png" },

  { name: 'Tornadus', type: ['Flying'], description: "It rides the wind and causes massive storms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png" },
  { name: 'Thundurus', type: ['Electric', 'Flying'], description: "It flies through the sky firing lightning bolts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png" },
  { name: 'Reshiram', type: ['Dragon', 'Fire'], description: "Its flames can burn the world to ashes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png" },
  { name: 'Zekrom', type: ['Dragon', 'Electric'], description: "It generates electricity by spinning its tail.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png" },

  { name: 'Landorus', type: ['Ground', 'Flying'], description: "It blesses the land with fertility.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png" },

  { name: 'Kyurem', type: ['Dragon', 'Ice'], description: "It is said to be the empty shell of a once-complete dragon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png" },

  { name: 'Keldeo', type: ['Water', 'Fighting'], description: "It trains to master the sword-like horn on its head.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png" },

  { name: 'Meloetta', type: ['Normal', 'Psychic'], description: "Its songs can change the emotions of listeners.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png" },

  { name: 'Genesect', type: ['Bug', 'Steel'], description: "A prehistoric Pokémon modified by Team Plasma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png" },

  // generation 6
  { name: 'Chespin', type: ['Grass'], description: "Its shell is tough enough to withstand powerful attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png" },
  { name: 'Quilladin', type: ['Grass'], description: "It defends itself by rolling into foes with its spiky armor.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png" },
  { name: 'Chesnaught', type: ['Grass', 'Fighting'], description: "It shields allies with its massive body and powerful armor.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png" },

  { name: 'Fennekin', type: ['Fire'], description: "It chews on twigs to keep its fire burning hot.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png" },
  { name: 'Braixen', type: ['Fire'], description: "It uses the branch in its tail as a wand to cast fiery attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png" },
  { name: 'Delphox', type: ['Fire', 'Psychic'], description: "It gazes into flames to see the future.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png" },

  { name: 'Froakie', type: ['Water'], description: "It protects itself with bubbles made from its frills.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png" },
  { name: 'Frogadier', type: ['Water'], description: "It moves silently and strikes with precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png" },
  { name: 'Greninja', type: ['Water', 'Dark'], description: "It creates throwing stars from compressed water.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png" },

  { name: 'Bunnelby', type: ['Normal'], description: "It digs deep holes using its powerful ears.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png" },
  { name: 'Diggersby', type: ['Normal', 'Ground'], description: "Its ears can lift boulders weighing over a ton.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png" },

  { name: 'Fletchling', type: ['Normal', 'Flying'], description: "It communicates with beautiful chirps.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png" },
  { name: 'Fletchinder', type: ['Fire', 'Flying'], description: "It heats up the air around it to soar faster.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png" },
  { name: 'Talonflame', type: ['Fire', 'Flying'], description: "It dives at incredible speeds to strike prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png" },

  { name: 'Scatterbug', type: ['Bug'], description: "It can survive in any climate thanks to its special powder.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png" },
  { name: 'Spewpa', type: ['Bug'], description: "Its stiff fur protects it from predators.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png" },
  { name: 'Vivillon', type: ['Bug', 'Flying'], description: "Its wing patterns vary depending on its habitat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png" },

  { name: 'Litleo', type: ['Fire', 'Normal'], description: "Its mane burns hotter when it is excited.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png" },
  { name: 'Pyroar', type: ['Fire', 'Normal'], description: "The male’s fiery mane intimidates foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png" },

  { name: 'Flabébé', type: ['Fairy'], description: "It lives on flowers and draws power from them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png" },
  { name: 'Floette', type: ['Fairy'], description: "It nurtures flowers and protects them fiercely.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png" },
  { name: 'Florges', type: ['Fairy'], description: "It can control flower gardens with its energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png" },

  { name: 'Skiddo', type: ['Grass'], description: "It can climb steep mountains with ease.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png" },
  { name: 'Gogoat', type: ['Grass'], description: "It can sense its Trainer’s feelings through its horns.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png" },

  { name: 'Pancham', type: ['Fighting'], description: "It tries to act tough but is actually playful.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png" },
  { name: 'Pangoro', type: ['Fighting', 'Dark'], description: "It protects the weak and punishes bullies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png" },

  { name: 'Furfrou', type: ['Normal'], description: "It is highly intelligent and enjoys being groomed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png" },

  { name: 'Espurr', type: ['Psychic'], description: "Its psychic power is so strong it must keep its ears shut.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png" },
  { name: 'Meowstic', type: ['Psychic'], description: "It keeps its psychic energy sealed until needed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png" },

  { name: 'Honedge', type: ['Steel', 'Ghost'], description: "It drains the life of anyone who grips it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png" },
  { name: 'Doublade', type: ['Steel', 'Ghost'], description: "Its twin blades work together in perfect harmony.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png" },
  { name: 'Aegislash', type: ['Steel', 'Ghost'], description: "It can sense the qualities of leadership in people.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png" },

  { name: 'Spritzee', type: ['Fairy'], description: "It emits a fragrance that enchants those around it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png" },
  { name: 'Aromatisse', type: ['Fairy'], description: "It releases scents that can soothe or repel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png" },

  { name: 'Swirlix', type: ['Fairy'], description: "It eats nothing but sweets and becomes sticky.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png" },
  { name: 'Slurpuff', type: ['Fairy'], description: "Its sense of smell is 100 times stronger than a human’s.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png" },

  { name: 'Inkay', type: ['Dark', 'Psychic'], description: "It uses its flashing lights to confuse opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png" },
  { name: 'Malamar', type: ['Dark', 'Psychic'], description: "It is known for its hypnotic powers.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png" },

  { name: 'Binacle', type: ['Rock', 'Water'], description: "Two Binacle share one body and cooperate to survive.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png" },
  { name: 'Barbaracle', type: ['Rock', 'Water'], description: "Its limbs act independently to attack foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png" },

  { name: 'Skrelp', type: ['Poison', 'Water'], description: "It camouflages itself as seaweed to ambush prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png" },
  { name: 'Dragalge', type: ['Poison', 'Dragon'], description: "It can melt metal with its corrosive poison.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png" },

  { name: 'Clauncher', type: ['Water'], description: "It fires compressed water from its claw.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png" },
  { name: 'Clawitzer', type: ['Water'], description: "Its massive claw can fire powerful blasts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png" },

  { name: 'Helioptile', type: ['Electric', 'Normal'], description: "It generates electricity by basking in the sun.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png" },
  { name: 'Heliolisk', type: ['Electric', 'Normal'], description: "Its frills act like solar panels.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png" },

  { name: 'Tyrunt', type: ['Rock', 'Dragon'], description: "It throws tantrums when it doesn’t get its way.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png" },
  { name: 'Tyrantrum', type: ['Rock', 'Dragon'], description: "Its jaws can crush anything.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png" },

  { name: 'Amaura', type: ['Rock', 'Ice'], description: "It lived in cold climates long ago.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png" },
  { name: 'Aurorus', type: ['Rock', 'Ice'], description: "It can create diamond dust with its icy breath.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png" },

  { name: 'Sylveon', type: ['Fairy'], description: "It calms foes with its ribbon-like feelers.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png" },

  { name: 'Hawlucha', type: ['Fighting', 'Flying'], description: "It battles with elegant wrestling moves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png" },

  { name: 'Dedenne', type: ['Electric', 'Fairy'], description: "It communicates using its whiskers as antennas.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png" },

  { name: 'Carbink', type: ['Rock', 'Fairy'], description: "It lives in deep caves and glitters like a jewel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png" },

  { name: 'Goomy', type: ['Dragon'], description: "It is considered the weakest Dragon-type Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png" },
  { name: 'Sliggoo', type: ['Dragon'], description: "It protects itself with its slimy body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png" },
  { name: 'Goodra', type: ['Dragon'], description: "It is very affectionate and hugs with its gooey body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png" },

  { name: 'Klefki', type: ['Steel', 'Fairy'], description: "It collects keys and never lets them go.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png" },

  { name: 'Phantump', type: ['Ghost', 'Grass'], description: "It is said to be the spirit of a child who got lost in the woods.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png" },
  { name: 'Trevenant', type: ['Ghost', 'Grass'], description: "It protects forests and punishes those who harm them.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png" },

  { name: 'Pumpkaboo', type: ['Ghost', 'Grass'], description: "It carries wandering spirits inside its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png" },
  { name: 'Gourgeist', type: ['Ghost', 'Grass'], description: "It sings in eerie voices during the night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png" },

  { name: 'Bergmite', type: ['Ice'], description: "It uses ice chunks to protect itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png" },
  { name: 'Avalugg', type: ['Ice'], description: "Its massive body can carry entire groups of Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png" },

  { name: 'Noibat', type: ['Flying', 'Dragon'], description: "It emits ultrasonic waves to navigate in the dark.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png" },
  { name: 'Noivern', type: ['Flying', 'Dragon'], description: "It can shatter boulders with its powerful sound waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png" },

  { name: 'Xerneas', type: ['Fairy'], description: "It can share eternal life with others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png" },

  { name: 'Yveltal', type: ['Dark', 'Flying'], description: "It absorbs life energy when its wings spread wide.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png" },

  { name: 'Zygarde', type: ['Dragon', 'Ground'], description: "It monitors the ecosystem and intervenes when needed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png" },

  { name: 'Diancie', type: ['Rock', 'Fairy'], description: "It creates diamonds by compressing carbon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png" },

  { name: 'Hoopa', type: ['Psychic', 'Ghost'], description: "It can warp space and summon treasures.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png" },

  { name: 'Volcanion', type: ['Fire', 'Water'], description: "It uses steam pressure to unleash explosive blasts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png" },
  // Generation 7
  { name: 'Rowlet', type: ['Grass', 'Flying'], description: "It stores energy during the day and hunts at night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png" },
  { name: 'Dartrix', type: ['Grass', 'Flying'], description: "It is extremely picky about its appearance.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png" },
  { name: 'Decidueye', type: ['Grass', 'Ghost'], description: "It fires arrows with ghostly precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png" },

  { name: 'Litten', type: ['Fire'], description: "It grooms itself by licking its fur, which becomes fiery.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png" },
  { name: 'Torracat', type: ['Fire'], description: "Its bell-like organ produces intense heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png" },
  { name: 'Incineroar', type: ['Fire', 'Dark'], description: "It performs pro-wrestling moves fueled by flames.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png" },

  { name: 'Popplio', type: ['Water'], description: "It creates balloons to perform acrobatic tricks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png" },
  { name: 'Brionne', type: ['Water'], description: "It dances gracefully while creating water balloons.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png" },
  { name: 'Primarina', type: ['Water', 'Fairy'], description: "It sings to control its water balloons in battle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png" },

  { name: 'Pikipek', type: ['Normal', 'Flying'], description: "It can peck holes in trees at incredible speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png" },
  { name: 'Trumbeak', type: ['Normal', 'Flying'], description: "It fires seeds from its beak like bullets.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png" },
  { name: 'Toucannon', type: ['Normal', 'Flying'], description: "Its beak heats up during emotional outbursts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png" },

  { name: 'Yungoos', type: ['Normal'], description: "It is always hungry and constantly searching for prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png" },
  { name: 'Gumshoos', type: ['Normal'], description: "It patiently waits for hours to ambush prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png" },

  { name: 'Grubbin', type: ['Bug'], description: "It uses its strong jaws to dig and chew.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png" },
  { name: 'Charjabug', type: ['Bug', 'Electric'], description: "It stores electricity like a battery.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png" },
  { name: 'Vikavolt', type: ['Bug', 'Electric'], description: "It fires powerful electric beams from its jaws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png" },

  { name: 'Crabrawler', type: ['Fighting'], description: "It punches anything it sees as a challenge.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png" },
  { name: 'Crabominable', type: ['Fighting', 'Ice'], description: "It climbed a mountain and adapted to the cold.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png" },

  { name: 'Oricorio', type: ['Fire', 'Flying'], description: "It changes form by sipping different nectars.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png" },

  { name: 'Cutiefly', type: ['Bug', 'Fairy'], description: "It detects auras and approaches those with kind hearts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png" },
  { name: 'Ribombee', type: ['Bug', 'Fairy'], description: "It makes pollen puffs to attack or heal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png" },

  { name: 'Rockruff', type: ['Rock'], description: "It is extremely loyal and energetic.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png" },
  { name: 'Lycanroc', type: ['Rock'], description: "Its form changes depending on the time of day.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png" },

  { name: 'Wishiwashi', type: ['Water'], description: "Its school form is incredibly powerful.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png" },

  { name: 'Mareanie', type: ['Poison', 'Water'], description: "It eats Corsola branches as a delicacy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png" },
  { name: 'Toxapex', type: ['Poison', 'Water'], description: "It traps prey inside its spiked shell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png" },

  { name: 'Mudbray', type: ['Ground'], description: "It can carry loads many times its own weight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png" },
  { name: 'Mudsdale', type: ['Ground'], description: "Its legs are coated in a protective mud.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png" },

  { name: 'Dewpider', type: ['Water', 'Bug'], description: "It carries a water bubble on its head to breathe.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png" },
  { name: 'Araquanid', type: ['Water', 'Bug'], description: "It protects smaller Pokémon inside its water bubble.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png" },

  { name: 'Fomantis', type: ['Grass'], description: "It grows by basking in the sun.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png" },
  { name: 'Lurantis', type: ['Grass'], description: "It disguises itself as a flower to lure prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png" },

  { name: 'Salandit', type: ['Poison', 'Fire'], description: "It emits toxic gas to weaken opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png" },
  { name: 'Salazzle', type: ['Poison', 'Fire'], description: "It commands a harem of male Salandit.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png" },

  { name: 'Stufful', type: ['Normal', 'Fighting'], description: "Its cute appearance hides incredible strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png" },
  { name: 'Bewear', type: ['Normal', 'Fighting'], description: "It hugs so hard it can break bones.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png" },

  { name: 'Bounsweet', type: ['Grass'], description: "It smells sweet and is often eaten by other Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png" },
  { name: 'Steenee', type: ['Grass'], description: "It uses its legs to deliver powerful kicks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png" },
  { name: 'Tsareena', type: ['Grass'], description: "It rules over others with its regal presence.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png" },

  { name: 'Comfey', type: ['Fairy'], description: "It gathers flowers to decorate itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png" },

  { name: 'Oranguru', type: ['Normal', 'Psychic'], description: "It acts as a sage and gives commands to others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png" },
  { name: 'Passimian', type: ['Fighting'], description: "It leads its troop in coordinated teamwork.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png" },

  { name: 'Wimpod', type: ['Bug', 'Water'], description: "It is cowardly and flees at the slightest threat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png" },
  { name: 'Golisopod', type: ['Bug', 'Water'], description: "It is a master of sword-like slashing techniques.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png" },

  { name: 'Sandygast', type: ['Ghost', 'Ground'], description: "It is born from grudges that gather in sand.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png" },
  { name: 'Palossand', type: ['Ghost', 'Ground'], description: "It steals life force from those it buries.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png" },

  { name: 'Pyukumuku', type: ['Water'], description: "It ejects its organs to attack enemies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png" },

  { name: 'Type: Null', type: ['Normal'], description: "It was created to be a perfect combatant.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png" },
  { name: 'Silvally', type: ['Normal'], description: "It changes type depending on the memory it holds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png" },

  { name: 'Minior', type: ['Rock', 'Flying'], description: "It forms a protective shell around its core.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png" },

  { name: 'Komala', type: ['Normal'], description: "It spends its entire life asleep.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png" },

  { name: 'Turtonator', type: ['Fire', 'Dragon'], description: "Its shell explodes when struck.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png" },

  { name: 'Togedemaru', type: ['Electric', 'Steel'], description: "It curls up into a ball to defend itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png" },

  { name: 'Mimikyu', type: ['Ghost', 'Fairy'], description: "It wears a Pikachu disguise to make friends.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png" },

  { name: 'Bruxish', type: ['Water', 'Psychic'], description: "It grinds its teeth to produce psychic waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png" },

  { name: 'Drampa', type: ['Normal', 'Dragon'], description: "It is gentle but becomes furious when its friends are hurt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png" },

  { name: 'Dhelmise', type: ['Ghost', 'Grass'], description: "It controls a ship’s anchor as its weapon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png" },

  { name: 'Jangmo-o', type: ['Dragon'], description: "It trains hard to grow stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png" },
  { name: 'Hakamo-o', type: ['Dragon', 'Fighting'], description: "It dances in battle to intimidate foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png" },
  { name: 'Kommo-o', type: ['Dragon', 'Fighting'], description: "It clatters its scales to announce its presence.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png" },

  { name: 'Tapu Koko', type: ['Electric', 'Fairy'], description: "It is a guardian deity of Melemele Island.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png" },
  { name: 'Tapu Lele', type: ['Psychic', 'Fairy'], description: "Its scales can heal or harm depending on its mood.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png" },
  { name: 'Tapu Bulu', type: ['Grass', 'Fairy'], description: "It can make plants grow with a single strike.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png" },
  { name: 'Tapu Fini', type: ['Water', 'Fairy'], description: "It creates a mystical fog to protect itself.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png" },

  { name: 'Cosmog', type: ['Psychic'], description: "It is extremely curious and drifts aimlessly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png" },
  { name: 'Cosmoem', type: ['Psychic'], description: "Its body is as heavy as a black hole.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png" },
  { name: 'Solgaleo', type: ['Psychic', 'Steel'], description: "It radiates light and is said to be the sun incarnate.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png" },
  { name: 'Lunala', type: ['Psychic', 'Ghost'], description: "It absorbs light and is said to be the moon incarnate.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png" },

  { name: 'Nihilego', type: ['Rock', 'Poison'], description: "An Ultra Beast that resembles a jellyfish.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png" },
  { name: 'Buzzwole', type: ['Bug', 'Fighting'], description: "It flexes to intimidate opponents.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png" },
  { name: 'Pheromosa', type: ['Bug', 'Fighting'], description: "It moves with incredible speed and grace.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png" },
  { name: 'Xurkitree', type: ['Electric'], description: "It absorbs electricity from power lines.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png" },
  { name: 'Celesteela', type: ['Steel', 'Flying'], description: "It launches itself like a rocket.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png" },
  { name: 'Kartana', type: ['Grass', 'Steel'], description: "Its body is as sharp as a blade.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png" },
  { name: 'Guzzlord', type: ['Dark', 'Dragon'], description: "It devours everything in sight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png" },

  { name: 'Necrozma', type: ['Psychic'], description: "It absorbs light to grow stronger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png" },
  { name: 'Magearna', type: ['Steel', 'Fairy'], description: "A mechanical Pokémon created by ancient science; its soul-heart is its life force.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png" },

  { name: 'Marshadow', type: ['Fighting', 'Ghost'], description: "It hides in shadows and copies the movements of others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png" },

  { name: 'Poipole', type: ['Poison'], description: "An Ultra Beast that sprays poison from its needles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png" },
  { name: 'Naganadel', type: ['Poison', 'Dragon'], description: "It can fire beams of venom from its stinger.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png" },

  { name: 'Stakataka', type: ['Rock', 'Steel'], description: "An Ultra Beast composed of many stone bodies stacked together.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png" },

  { name: 'Blacephalon', type: ['Fire', 'Ghost'], description: "It causes explosions by removing its head and igniting it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png" },

  { name: 'Zeraora', type: ['Electric'], description: "It moves faster than lightning and tears foes apart with its claws.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png" },

  { name: 'Meltan', type: ['Steel'], description: "It dissolves metal and absorbs it into its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png" },
  { name: 'Melmetal', type: ['Steel'], description: "It is formed when many Meltan merge; its body is liquid metal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png" },
  // Generation 8
  { name: 'Grookey', type: ['Grass'], description: "It beats rhythm on its stick to energize plants.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png" },
  { name: 'Thwackey', type: ['Grass'], description: "It uses two sticks to perform complex drumming.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png" },
  { name: 'Rillaboom', type: ['Grass'], description: "It commands its drum to unleash powerful sound waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png" },

  { name: 'Scorbunny', type: ['Fire'], description: "It warms up by running and can ignite its feet.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png" },
  { name: 'Raboot', type: ['Fire'], description: "It protects its legs to deliver fiery kicks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png" },
  { name: 'Cinderace', type: ['Fire'], description: "It kicks fireballs with incredible accuracy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png" },

  { name: 'Sobble', type: ['Water'], description: "It hides by blending into its surroundings when scared.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png" },
  { name: 'Drizzile', type: ['Water'], description: "It uses stealth and strategy in battle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png" },
  { name: 'Inteleon', type: ['Water'], description: "It snipes foes with water bullets from its fingertips.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png" },

  { name: 'Skwovet', type: ['Normal'], description: "It stores berries in its cheeks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png" },
  { name: 'Greedent', type: ['Normal'], description: "It hides food everywhere and forgets where it put it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png" },

  { name: 'Rookidee', type: ['Flying'], description: "It is brave and never backs down.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png" },
  { name: 'Corvisquire', type: ['Flying'], description: "It learns tactics from watching others fight.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png" },
  { name: 'Corviknight', type: ['Flying', 'Steel'], description: "It serves as a taxi service in Galar.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png" },

  { name: 'Blipbug', type: ['Bug'], description: "It is highly intelligent despite its small size.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png" },
  { name: 'Dottler', type: ['Bug', 'Psychic'], description: "It uses psychic powers while hidden in its shell.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png" },
  { name: 'Orbeetle', type: ['Bug', 'Psychic'], description: "Its brain is immense and highly developed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png" },

  { name: 'Nickit', type: ['Dark'], description: "It steals food quietly and leaves no trace.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png" },
  { name: 'Thievul', type: ['Dark'], description: "It marks targets and steals from them at night.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png" },

  { name: 'Gossifleur', type: ['Grass'], description: "It drifts on the wind to travel long distances.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png" },
  { name: 'Eldegoss', type: ['Grass'], description: "Its cotton fluff protects it from harsh weather.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png" },

  { name: 'Wooloo', type: ['Normal'], description: "Its fleece is extremely soft and springy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png" },
  { name: 'Dubwool', type: ['Normal'], description: "Its horns are used for powerful headbutts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png" },

  { name: 'Chewtle', type: ['Water'], description: "It bites with tremendous force.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png" },
  { name: 'Drednaw', type: ['Water', 'Rock'], description: "Its jaws can crush boulders.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png" },

  { name: 'Yamper', type: ['Electric'], description: "It generates electricity as it runs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png" },
  { name: 'Boltund', type: ['Electric'], description: "It can run nonstop for three days.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png" },

  { name: 'Rolycoly', type: ['Rock'], description: "It moves using its single coal wheel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png" },
  { name: 'Carkol', type: ['Rock', 'Fire'], description: "It transports coal in its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png" },
  { name: 'Coalossal', type: ['Rock', 'Fire'], description: "It can create massive coal explosions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png" },

  { name: 'Applin', type: ['Grass', 'Dragon'], description: "It hides inside an apple to avoid predators.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png" },
  { name: 'Flapple', type: ['Grass', 'Dragon'], description: "It spits acid to weaken foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png" },
  { name: 'Appletun', type: ['Grass', 'Dragon'], description: "Its sweet nectar attracts many Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png" },

  { name: 'Silicobra', type: ['Ground'], description: "It stores sand in its neck pouch.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png" },
  { name: 'Sandaconda', type: ['Ground'], description: "It expels sand from its body to attack.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png" },

  { name: 'Cramorant', type: ['Flying', 'Water'], description: "It gulps anything it can fit in its mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png" },

  { name: 'Arrokuda', type: ['Water'], description: "It swims at high speed to ram prey.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png" },
  { name: 'Barraskewda', type: ['Water'], description: "It moves faster than a jet ski.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png" },

  { name: 'Toxel', type: ['Electric', 'Poison'], description: "It stores poison in its body and shocks foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png" },
  { name: 'Toxtricity', type: ['Electric', 'Poison'], description: "It plays electricity like a guitar.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png" },

  { name: 'Sizzlipede', type: ['Fire', 'Bug'], description: "It burns its prey with its heated body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png" },
  { name: 'Centiskorch', type: ['Fire', 'Bug'], description: "Its body temperature can exceed 800 degrees.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png" },

  { name: 'Clobbopus', type: ['Fighting'], description: "It punches anything it doesn't understand.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png" },
  { name: 'Grapploct', type: ['Fighting'], description: "It uses its octopus limbs for grappling techniques.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png" },

  { name: 'Sinistea', type: ['Ghost'], description: "It inhabits leftover tea.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png" },
  { name: 'Polteageist', type: ['Ghost'], description: "Its tea is said to have healing properties.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png" },

  { name: 'Hatenna', type: ['Psychic'], description: "It senses emotions from afar.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png" },
  { name: 'Hattrem', type: ['Psychic'], description: "It avoids strong emotions and loud noises.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png" },
  { name: 'Hatterene', type: ['Psychic', 'Fairy'], description: "It punishes those who disturb its peace.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png" },

  { name: 'Impidimp', type: ['Dark', 'Fairy'], description: "It feeds on negative emotions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png" },
  { name: 'Morgrem', type: ['Dark', 'Fairy'], description: "It tricks foes with fake apologies.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png" },
  { name: 'Grimmsnarl', type: ['Dark', 'Fairy'], description: "It uses its hair as muscle fibers.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png" },

  { name: 'Obstagoon', type: ['Dark', 'Normal'], description: "It taunts opponents to provoke fights.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png" },

  { name: 'Perrserker', type: ['Steel'], description: "Its Viking-like spirit makes it fearless.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png" },

  { name: 'Cursola', type: ['Ghost'], description: "Its body is fragile and crumbles easily.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png" },

  { name: 'Sirfetch’d', type: ['Fighting'], description: "It wields its leek like a knight’s sword.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png" },

  { name: 'Mr. Rime', type: ['Ice', 'Psychic'], description: "It entertains others with its dancing.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png" },

  { name: 'Runerigus', type: ['Ground', 'Ghost'], description: "It carries cursed memories within its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png" },

  { name: 'Milcery', type: ['Fairy'], description: "It is born from sweet-smelling particles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png" },
  { name: 'Alcremie', type: ['Fairy'], description: "Its cream becomes sweeter the happier it is.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png" },

  { name: 'Falinks', type: ['Fighting'], description: "Six Pokémon march together as one unit.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png" },

  { name: 'Pincurchin', type: ['Electric'], description: "It stores electricity in its spines.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png" },

  { name: 'Snom', type: ['Ice', 'Bug'], description: "It eats snow to survive.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png" },
  { name: 'Frosmoth', type: ['Ice', 'Bug'], description: "It protects snowy mountains with icy winds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png" },

  { name: 'Stonjourner', type: ['Rock'], description: "It stands still for long periods like a monolith.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png" },

  { name: 'Eiscue', type: ['Ice'], description: "Its ice head protects it from attacks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png" },

  { name: 'Indeedee', type: ['Psychic', 'Normal'], description: "It serves others with great care.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png" },

  { name: 'Morpeko', type: ['Electric', 'Dark'], description: "Its hunger changes its form.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png" },

  { name: 'Cufant', type: ['Steel'], description: "It digs with its strong trunk.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png" },
  { name: 'Copperajah', type: ['Steel'], description: "It can lift massive loads with its trunk.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png" },

  { name: 'Dracozolt', type: ['Electric', 'Dragon'], description: "A fossil Pokémon assembled incorrectly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png" },
  { name: 'Arctozolt', type: ['Electric', 'Ice'], description: "Its upper body is frozen solid.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png" },
  { name: 'Dracovish', type: ['Water', 'Dragon'], description: "Its mismatched body makes it unstable.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png" },
  { name: 'Arctovish', type: ['Water', 'Ice'], description: "It struggles to breathe due to its fossil mismatch.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png" },

  { name: 'Duraludon', type: ['Steel', 'Dragon'], description: "Its body is lightweight but incredibly strong.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png" },

  { name: 'Dreepy', type: ['Dragon', 'Ghost'], description: "It haunts battlefields from ancient times.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png" },
  { name: 'Drakloak', type: ['Dragon', 'Ghost'], description: "It carries Dreepy on its head into battle.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png" },
  { name: 'Dragapult', type: ['Dragon', 'Ghost'], description: "It launches Dreepy like missiles.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png" },

  { name: 'Zacian', type: ['Fairy'], description: "It is honored as a hero of Galar.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png" },
  { name: 'Zamazenta', type: ['Fighting'], description: "It is revered as a shield that protected Galar in ancient times.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png" },

  { name: 'Eternatus', type: ['Poison', 'Dragon'], description: "It absorbs energy from the atmosphere and can cause massive storms.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png" },

  { name: 'Kubfu', type: ['Fighting'], description: "It trains hard to perfect its martial arts techniques.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png" },
  { name: 'Urshifu', type: ['Fighting', 'Dark'], description: "It masters powerful strikes through rigorous training.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png" },

  { name: 'Zarude', type: ['Dark', 'Grass'], description: "It lives in packs deep within dense forests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png" },

  { name: 'Regieleki', type: ['Electric'], description: "Its entire body is made of electrical energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png" },
  { name: 'Regidrago', type: ['Dragon'], description: "Its body is composed of crystallized dragon energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png" },

  { name: 'Glastrier', type: ['Ice'], description: "It is cold and relentless, freezing everything it touches.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png" },
  { name: 'Spectrier', type: ['Ghost'], description: "It moves silently and drains life energy from others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png" },

  { name: 'Calyrex', type: ['Psychic', 'Grass'], description: "A regal Pokémon that once ruled over Galar’s harvests.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png" },

  { name: 'Wyrdeer', type: ['Normal', 'Psychic'], description: "It grows magnificent antlers that are treasured by artisans.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png" },

  { name: 'Kleavor', type: ['Bug', 'Rock'], description: "Its axe-like arms are sharpened by stone fragments.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png" },

  { name: 'Ursaluna', type: ['Ground', 'Normal'], description: "It uses its keen sense of smell to find treasure buried underground.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png" },

  { name: 'Basculegion', type: ['Water', 'Ghost'], description: "It is possessed by the souls of its fallen comrades.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png" },

  { name: 'Sneasler', type: ['Poison', 'Fighting'], description: "It climbs sheer cliffs with ease using its long limbs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png" },

  { name: 'Overqwil', type: ['Dark', 'Poison'], description: "It inflates its spines to intimidate foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png" },

  { name: 'Enamorus', type: ['Fairy', 'Flying'], description: "It brings springtime with its gentle winds.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png" },
  // Generation 9
  { name: 'Sprigatito', type: ['Grass'], description: "It kneads and rubs its paws to release a calming aroma.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png" },
  { name: 'Floragato', type: ['Grass'], description: "It uses its vine-like appendage with expert precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png" },
  { name: 'Meowscarada', type: ['Grass', 'Dark'], description: "It performs dazzling tricks with its floral bomb.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png" },

  { name: 'Fuecoco', type: ['Fire'], description: "It absorbs heat and stores fire energy in its belly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png" },
  { name: 'Crocalor', type: ['Fire'], description: "Its flame grows stronger as its singing improves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png" },
  { name: 'Skeledirge', type: ['Fire', 'Ghost'], description: "It sings to soothe souls and unleash fiery power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png" },

  { name: 'Quaxly', type: ['Water'], description: "It keeps its feathers impeccably clean.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png" },
  { name: 'Quaxwell', type: ['Water'], description: "It practices elegant dance-like movements.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png" },
  { name: 'Quaquaval', type: ['Water', 'Fighting'], description: "It dances flamboyantly while unleashing powerful kicks.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png" },

  { name: 'Lechonk', type: ['Normal'], description: "It uses its keen sense of smell to find food.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png" },
  { name: 'Oinkologne', type: ['Normal'], description: "Its scent varies depending on its mood.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png" },

  { name: 'Tarountula', type: ['Bug'], description: "It wraps foes in its strong thread.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png" },
  { name: 'Spidops', type: ['Bug'], description: "It sets traps using its elastic web.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png" },

  { name: 'Nymble', type: ['Bug'], description: "It jumps with incredible speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png" },
  { name: 'Lokix', type: ['Bug', 'Dark'], description: "It delivers devastating kicks with its long legs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png" },

  { name: 'Pawmi', type: ['Electric'], description: "It stores electricity in its fur.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png" },
  { name: 'Pawmo', type: ['Electric', 'Fighting'], description: "It uses its fists to deliver electric punches.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png" },
  { name: 'Pawmot', type: ['Electric', 'Fighting'], description: "It can revive allies with a jolt of electricity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png" },

  { name: 'Tandemaus', type: ['Normal'], description: "It lives happily with its partner.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png" },
  { name: 'Maushold', type: ['Normal'], description: "A family Pokémon that works together.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png" },

  { name: 'Fidough', type: ['Fairy'], description: "Its yeast-filled body is soft and warm.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png" },
  { name: 'Dachsbun', type: ['Fairy'], description: "Its body becomes tough when exposed to heat.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png" },

  { name: 'Smoliv', type: ['Grass', 'Normal'], description: "It stores oil in its fruit-like head.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png" },
  { name: 'Dolliv', type: ['Grass', 'Normal'], description: "It produces fragrant oil to calm others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png" },
  { name: 'Arboliva', type: ['Grass', 'Normal'], description: "It protects allies with soothing oil.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png" },

  { name: 'Squawkabilly', type: ['Normal', 'Flying'], description: "It forms flocks with distinct color variations.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png" },

  { name: 'Nacli', type: ['Rock'], description: "Its body is made of rock salt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png" },
  { name: 'Naclstack', type: ['Rock'], description: "It protects allies with its salt armor.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png" },
  { name: 'Garganacl', type: ['Rock'], description: "It creates healing salt for its companions.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png" },

  { name: 'Charcadet', type: ['Fire'], description: "It trains to become a powerful warrior.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png" },
  { name: 'Armarouge', type: ['Fire', 'Psychic'], description: "It fights with armor forged from its inner fire.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png" },
  { name: 'Ceruledge', type: ['Fire', 'Ghost'], description: "It wields blades made of ghostly fire.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png" },

  { name: 'Tadbulb', type: ['Electric'], description: "It lights up its body to communicate.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png" },
  { name: 'Bellibolt', type: ['Electric'], description: "It generates electricity using its elastic body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png" },

  { name: 'Wattrel', type: ['Electric', 'Flying'], description: "It uses wind to charge its electricity.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png" },
  { name: 'Kilowattrel', type: ['Electric', 'Flying'], description: "It unleashes powerful electric gusts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png" },

  { name: 'Maschiff', type: ['Dark'], description: "It tries to act tough but is very loyal.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png" },
  { name: 'Mabosstiff', type: ['Dark'], description: "It protects those it cares about with fierce devotion.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png" },

  { name: 'Shroodle', type: ['Poison', 'Normal'], description: "It marks territory with toxic graffiti.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png" },
  { name: 'Grafaiai', type: ['Poison', 'Normal'], description: "It paints symbols to communicate with its troop.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png" },

  { name: 'Bramblin', type: ['Ghost', 'Grass'], description: "It wanders endlessly, blown by the wind.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png" },
  { name: 'Brambleghast', type: ['Ghost', 'Grass'], description: "It drains life from those who touch it.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png" },

  { name: 'Toedscool', type: ['Ground', 'Grass'], description: "It runs quickly on its tentacle-like legs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png" },
  { name: 'Toedscruel', type: ['Ground', 'Grass'], description: "It commands its tentacles with precision.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png" },

  { name: 'Klawf', type: ['Rock'], description: "It ambushes prey from cliffs.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png" },

  { name: 'Capsakid', type: ['Grass'], description: "It stores spicy energy in its body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png" },
  { name: 'Scovillain', type: ['Grass', 'Fire'], description: "Its two heads have different temperaments.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png" },

  { name: 'Rellor', type: ['Bug'], description: "It rolls a ball of mud everywhere it goes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png" },
  { name: 'Rabsca', type: ['Bug', 'Psychic'], description: "It carries a psychic larva inside its orb.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png" },

  { name: 'Flittle', type: ['Psychic'], description: "It flutters lightly using its psychic powers.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png" },
  { name: 'Espathra', type: ['Psychic'], description: "It intimidates foes with its elegant movements.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png" },

  { name: 'Tinkatink', type: ['Fairy', 'Steel'], description: "It collects metal scraps to forge its hammer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png" },
  { name: 'Tinkatuff', type: ['Fairy', 'Steel'], description: "It hammers foes with increasing strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png" },
  { name: 'Tinkaton', type: ['Fairy', 'Steel'], description: "It wields a massive hammer capable of crushing steel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png" },

  { name: 'Wiglett', type: ['Water'], description: "It burrows in sand near the ocean.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png" },
  { name: 'Wugtrio', type: ['Water'], description: "Its bodies stretch and contract rapidly.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png" },

  { name: 'Bombirdier', type: ['Flying', 'Dark'], description: "It drops objects from the sky to attack.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png" },

  { name: 'Finizen', type: ['Water'], description: "It loves playing with others.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png" },
  { name: 'Palafin', type: ['Water'], description: "It transforms into a hero form when allies are near.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png" },

  { name: 'Varoom', type: ['Steel', 'Poison'], description: "It runs on toxic gases.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png" },
  { name: 'Revavroom', type: ['Steel', 'Poison'], description: "It revs its engine to intimidate foes.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png" },

  { name: 'Cyclizar', type: ['Dragon', 'Normal'], description: "It is commonly used as a mount.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png" },

  { name: 'Orthworm', type: ['Steel'], description: "It burrows underground using its steel body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png" },

  { name: 'Glimmet', type: ['Rock', 'Poison'], description: "It spreads toxic dust from its petals.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png" },
  { name: 'Glimmora', type: ['Rock', 'Poison'], description: "It fires toxic crystals at high speed.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png" },

  { name: 'Greavard', type: ['Ghost'], description: "It is friendly but drains life energy unintentionally.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png" },
  { name: 'Houndstone', type: ['Ghost'], description: "It loyally guards graves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png" },

  { name: 'Flamigo', type: ['Flying', 'Fighting'], description: "It ties its neck to stabilize its power.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png" },

  { name: 'Cetoddle', type: ['Ice'], description: "It roams snowy mountains happily.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png" },
  { name: 'Cetitan', type: ['Ice'], description: "Its massive body stores tremendous cold energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png" },

  { name: 'Veluza', type: ['Water', 'Psychic'], description: "It sheds its flesh to move faster.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png" },

  { name: 'Dondozo', type: ['Water'], description: "It is huge and obeys Tatsugiri’s commands.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png" },
  { name: 'Tatsugiri', type: ['Dragon', 'Water'], description: "It commands Dondozo from inside its mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png" },

  { name: 'Annihilape', type: ['Fighting', 'Ghost'], description: "Its rage transformed it beyond death.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png" },

  { name: 'Clodsire', type: ['Poison', 'Ground'], description: "It protects friends with its large, squishy body.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png" },

  { name: 'Farigiraf', type: ['Normal', 'Psychic'], description: "Its two brains work together harmoniously.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png" },

  { name: 'Dudunsparce', type: ['Normal'], description: "Its body grows longer as it evolves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png" },

  { name: 'Kingambit', type: ['Dark', 'Steel'], description: "It commands Pawniard and Bisharp like a king.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png" },
    { name: 'Great Tusk', type: ['Ground', 'Fighting'], description: "A Paradox Pokémon resembling a prehistoric Donphan.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png" },

  { name: 'Scream Tail', type: ['Fairy', 'Psychic'], description: "A Paradox Pokémon said to be an ancient form of Jigglypuff.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png" },

  { name: 'Brute Bonnet', type: ['Grass', 'Dark'], description: "A Paradox Pokémon resembling a savage Amoonguss.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png" },

  { name: 'Flutter Mane', type: ['Ghost', 'Fairy'], description: "A mysterious Paradox Pokémon similar to Misdreavus.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png" },

  { name: 'Slither Wing', type: ['Bug', 'Fighting'], description: "A Paradox Pokémon resembling a primal Volcarona.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png" },

  { name: 'Sandy Shocks', type: ['Electric', 'Ground'], description: "A Paradox Pokémon that looks like an ancient Magneton.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png" },

  { name: 'Iron Treads', type: ['Ground', 'Steel'], description: "A futuristic Paradox Pokémon resembling Donphan.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png" },

  { name: 'Iron Bundle', type: ['Ice', 'Water'], description: "A robotic Paradox Pokémon similar to Delibird.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png" },

  { name: 'Iron Hands', type: ['Fighting', 'Electric'], description: "A powerful Paradox Pokémon resembling Hariyama.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png" },

  { name: 'Iron Jugulis', type: ['Dark', 'Flying'], description: "A Paradox Pokémon that looks like a robotic Hydreigon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png" },

  { name: 'Iron Moth', type: ['Fire', 'Poison'], description: "A futuristic Paradox Pokémon resembling Volcarona.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png" },

  { name: 'Iron Thorns', type: ['Rock', 'Electric'], description: "A robotic Paradox Pokémon similar to Tyranitar.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png" },

  { name: 'Frigibax', type: ['Dragon', 'Ice'], description: "It lives in icy caves and stores cold energy.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png" },
  { name: 'Arctibax', type: ['Dragon', 'Ice'], description: "It strengthens its icy armor as it grows.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png" },
  { name: 'Baxcalibur', type: ['Dragon', 'Ice'], description: "It launches icy missiles from its mouth.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png" },

  { name: 'Gimmighoul', type: ['Ghost'], description: "It hides in treasure chests and collects coins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png" },
  { name: 'Gholdengo', type: ['Steel', 'Ghost'], description: "It becomes lively after being formed from 1,000 coins.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png" },

  { name: 'Wo-Chien', type: ['Dark', 'Grass'], description: "A Ruinous Pokémon born from ancient resentment.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png" },
  { name: 'Chien-Pao', type: ['Dark', 'Ice'], description: "Its icy body contains the hatred of thousands.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png" },
  { name: 'Ting-Lu', type: ['Dark', 'Ground'], description: "Its vessel-like body holds catastrophic fear.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png" },
  { name: 'Chi-Yu', type: ['Dark', 'Fire'], description: "Its flames burn with the sorrow of ancient texts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png" },

  { name: 'Roaring Moon', type: ['Dragon', 'Dark'], description: "A Paradox Pokémon resembling a savage Salamence.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png" },

  { name: 'Iron Valiant', type: ['Fairy', 'Fighting'], description: "A Paradox Pokémon combining traits of Gardevoir and Gallade.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png" },

  { name: 'Koraidon', type: ['Fighting', 'Dragon'], description: "An ancient legendary Pokémon that moves with primal strength.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png" },

  { name: 'Miraidon', type: ['Electric', 'Dragon'], description: "A futuristic legendary Pokémon that glides on electromagnetic waves.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png" }
];

 



const type = [
  { 
    type: "Normal", 
    image: "images/normal.png",
    strengths: ["None"], 
    weaknesses: ["Fighting"] 
  },
  { 
    type: "Fire", 
    image: "images/fire.png",
    strengths: ["Grass", "Ice", "Bug", "Steel"], 
    weaknesses: ["Water", "Ground", "Rock"] 
  },
  { 
    type: "Water", 
    image: "images/water.png",
    strengths: ["Fire", "Ground", "Rock"], 
    weaknesses: ["Electric", "Grass"] 
  },
  { 
    type: "Grass", 
    image: "images/grass.png",
    strengths: ["Water", "Ground", "Rock"], 
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"] 
  },
  { 
    type: "Electric", 
    image: "images/electric.png",
    strengths: ["Water"], 
    weaknesses: ["Flying", "Ground"] 
  },
  { 
    type: "Ice", 
    image: "images/ice.png",
    strengths: ["Grass", "Ground", "Flying", "Dragon"], 
    weaknesses: ["Fire", "Fighting", "Rock", "Steel"] 
  },
  { 
    type: "Fighting", 
    image: "images/fighting.png",
    strengths: ["Normal", "Ice", "Rock", "Dark", "Steel"], 
    weaknesses: ["Flying", "Psychic", "Fairy"] 
  },
  { 
    type: "Poison", 
    image: "images/poison.png",
    strengths: ["Grass", "Fairy"], 
    weaknesses: ["Ground", "Psychic"] 
  },
  { 
    type: "Ground", 
    image: "images/ground.png",
    strengths: ["Fire", "Electric", "Poison", "Rock", "Steel"], 
    weaknesses: ["Water", "Ice", "Grass"] 
  },
  { 
    type: "Flying", 
    image: "images/flying.png",
    strengths: ["Grass", "Fighting", "Bug"], 
    weaknesses: ["Electric", "Ice", "Rock"] 
  },
  { 
    type: "Psychic", 
    image: "images/psychic.png",
    strengths: ["Fighting", "Poison"], 
    weaknesses: ["Bug", "Ghost", "Dark"] 
  },
  { 
    type: "Bug", 
    image: "images/bug.png",
    strengths: ["Grass", "Psychic", "Dark"], 
    weaknesses: ["Fire", "Flying", "Rock"] 
  },
  { 
    type: "Rock", 
    image: "images/rock.png",
    strengths: ["Fire", "Ice", "Flying", "Bug"], 
    weaknesses: ["Water", "Grass", "Fighting", "Ground", "Steel"] 
  },
  { 
    type: "Ghost", 
    image: "images/ghost.png",
    strengths: ["Psychic", "Ghost"], 
    weaknesses: ["Ghost", "Dark"] 
  },
  { 
    type: "Dragon", 
    image: "images/dragon.png",
    strengths: ["Dragon"], 
    weaknesses: ["Ice", "Dragon", "Fairy"] 
  },
  { 
    type: "Dark", 
    image: "images/dark.png",
    strengths: ["Psychic", "Ghost"], 
    weaknesses: ["Fighting", "Bug", "Fairy"] 
  },
  { 
    type: "Steel", 
    image: "images/steel.png",
    strengths: ["Ice", "Rock", "Fairy"], 
    weaknesses: ["Fire", "Fighting", "Ground"] 
  },
  { 
    type: "Fairy", 
    image: "images/fairy.png",
    strengths: ["Fighting", "Dragon", "Dark"], 
    weaknesses: ["Poison", "Steel"] 
  }
];



let pokemonContainer = document.querySelector("#pokemon-container");
let typeContainer = document.querySelector("#type-container");

let button = document.querySelector("#search-button");
let input = document.querySelector("#search-input");
const options = document.querySelector("#options");


function updatePageField() {

  // This will change the search function where you change if you want to search a type of a pokemon or then name of a pokemon.
  if (options.value === 'pokemon') {
    pokemonContainer.hidden = false;
    typeContainer.hidden = true;
  }
  else {
    pokemonContainer.hidden = true;
    typeContainer.hidden = false; 
  }
}


options.addEventListener("change", updatePageField);
updatePageField();

// This will make it where it searches only one chart instead of both.
button.addEventListener("click", () => {
    if (options.value === "pokemon") {
        searchPokemon();
    } else {
        searchType();
    }
});

////
//searching pokemon
function searchPokemon() {
  let pokemonQuery = input.value;

  let filteredPokemon = pokemon.filter(function (pokemon) {
  return (
    pokemon.name.toLowerCase().includes(pokemonQuery.toLowerCase()) ||
    pokemon.type.some(type => type.toLowerCase().includes(pokemonQuery.toLowerCase())) ||
    pokemon.description.toLowerCase().includes(pokemonQuery.toLowerCase())
  );
});

  pokemonContainer.innerHTML = '';
  typeContainer.innerHTML = '';

  filteredPokemon.forEach(pokemon => {
    render(pokemon);
  });
}
////
//searching types 
function searchType() {
  let typeQuery = input.value;

  let filteredType = type.filter(function (types) {
  return (
    types.type.toLowerCase().includes(typeQuery.toLowerCase())
  );
});

  typeContainer.innerHTML = '';
  pokemonContainer.innerHTML = '';

  filteredType.forEach(type => {
    renderType(type);
  });
}

input.addEventListener("keydown", handleEnter);

// for the enter key to work on search - not just clicking the search button
function handleEnter(event) {
    if (event.key === "Enter") {
        if (options.value === "pokemon") {
            searchPokemon();
        } else {
            searchType();
        }
    }
}




// This will find the objects in the array depending on the type of the pokemon that you search up.
function pokemonStats(pokemon) {
  let html = "";
  
  //this will do the finding in the arrays
  pokemon.type.forEach(pokemonType => {
    const typeInfo = type.find(types => types.type === pokemonType);
    
    // this creates the format to then insert into my pokemonsTemplate
    if (typeInfo) {
      html += `
      <h3>${pokemonType}</h3>
      <p>Strengths - ${typeInfo.strengths.join(", ")}</p>
      <p>Weaknesses - ${typeInfo.weaknesses.join(", ")}</p>
      `;
    }
  });
  
  return html;
}


//template for pokemon
function pokemonsTemplate(pokemon) {
  return `
  <div class="pokemon-content">
  <h2>${pokemon.name}</h2>
  
  <div class="pokemon">
  <img src="${pokemon.image}" alt="${pokemon.name} photo">
  
  <h3>Type: ${pokemon.type.join(", ")}</h3>
  
  <p>${pokemon.description}</p>
  
  ${pokemonStats(pokemon)}
  </div>
  </div>
  `;
}


//template for types
//.join adds a space
function typesTemplate(type) {
  return `
  <div class="type-content">
  <h2>${type.type}</h2>
  <div class="type">
  <img src="${type.image}" alt="${type.type} photo">
  
  <h3>Strengths: ${type.strengths.join(", ")}</h3>
  <h3>Weaknesses: ${type.weaknesses.join(", ")}</h3>
  </div>
  </div>
  `;
}

//rendering pokemon and types
function render(pokemon) {
  let html = pokemonsTemplate(pokemon);
  pokemonContainer.innerHTML += html
}
//This would be helpful if I want there to as well be a random type but I didn't add it to my init function.
function renderType(type) {
  let html = typesTemplate(type);
  typeContainer.innerHTML += html
}

//puts random pokemon and stats on screen before user searches.
let randomNumPokemon = Math.floor(Math.random() * pokemon.length);
console.log(randomNumPokemon);


function init() {
    render(pokemon[randomNumPokemon]);
}

init();