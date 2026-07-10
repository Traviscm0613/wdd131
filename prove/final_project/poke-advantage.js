

const pokemon = [
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
  { name: 'Mew', type: ['Psychic'], description: "A mythical Pokémon said to contain the DNA of every Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" }
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

/* for the enter key to work on search - not just clicking the search button */
function handleEnter(event) {
    if (event.key === "Enter") {
        if (options.value === "pokemon") {
            searchPokemon();
        } else {
            searchType();
        }
    }
}

let randomNumPokemon = Math.floor(Math.random() * pokemon.length);
console.log(randomNumPokemon);


//template for pokemon
function pokemonsTemplate(pokemon) {
  return `
    <div class="pokemon-content">
    <h2>${pokemon.name}</h2>
    <div class="pokemon">
    <img src="${pokemon.image}" alt="${pokemon.name} photo">
    
      <h3>${pokemon.type}</h3>

        <p>${pokemon.description}</p>
      </div>
    </div>
  `;
}


//template for types
//.join adds a space in between each word if there are various words in the table
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
function renderType(type) {
    let html = typesTemplate(type);
    typeContainer.innerHTML += html
}

//puts random pokemon and stats on screen
function init() {
    render(pokemon[randomNumPokemon]);
}

init();