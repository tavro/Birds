var names = ["","Black Footed Albatross","Laysan Albatross","Sooty Albatross","Groove Billed Ani","Crested Auklet","Least Auklet","Parakeet Auklet","Rhinoceros Auklet",
"Brewer Blackbird","Red Winged Blackbird"];/*,"Rusty Blackbird","Yellow Headed Blackbird","Bobolink","Indigo Bunting","Lazuli Bunting","Painted Bunting","Cardinal",
"Spotted Catbird","Gray Catbird","Yellow Breasted Chat","Eastern Towhee","Chuck Will Widow","Brandt Cormorant","Red Faced Cormorant","Pelagic Cormorant","Bronzed Cowbird",
"Shiny Cowbird","Brown Creeper","American Crow","Fish Crow","Black Billed Cuckoo","Mangrove Cuckoo","Yellow Billed Cuckoo","Gray Crowned Rosy Finch","Purple Finch",
"Northern Flicker","Acadian Flycatcher","Great Crested Flycatcher","Least Flycatcher","Olive Sided Flycatcher","Scissor Tailed Flycatcher","Vermilion Flycatcher",
"Yellow Bellied Flycatcher","Frigatebird","Northern Fulmar","Gadwall","American Goldfinch","European Goldfinch","Boat Tailed Grackle","Eared Grebe","Horned Grebe",
"Pied Billed Grebe","Western Grebe","Blue Grosbeak","Evening Grosbeak","Pine Grosbeak","Rose Breasted Grosbeak","Pigeon Guillemot","California Gull","Glaucous Winged Gull",
"Heermann Gull","Herring Gull","Ivory Gull","Ring Billed Gull","Slaty Backed Gull","Western Gull","Anna Hummingbird","Ruby Throated Hummingbird","Rufous Hummingbird",
"Green Violetear","Long Tailed Jaeger","Pomarine Jaeger","Blue Jay","Florida Jay","Green Jay","Dark Eyed Junco","Tropical Kingbird","Gray Kingbird","Belted Kingfisher",
"Green Kingfisher","Pied Kingfisher","Ringed Kingfisher","White Breasted Kingfisher","Red Legged Kittiwake","Horned Lark","Pacific Loon","Mallard","Western Meadowlark",
"Hooded Merganser","Red Breasted Merganser","Mockingbird","Nighthawk","Clark Nutcracker","White Breasted Nuthatch","Baltimore Oriole","Hooded Oriole","Orchard Oriole",
"Scott Oriole","Ovenbird","Brown Pelican","White Pelican","Western Wood Pewee","Sayornis","American Pipit","Whip Poor Will","Horned Puffin","Common Raven","White Necked Raven",
"American Redstart","Geococcyx","Loggerhead Shrike","Great Grey Shrike","Baird Sparrow","Black Throated Sparrow","Brewer Sparrow","Chipping Sparrow","Clay Colored Sparrow",
"House Sparrow","Field Sparrow","Fox Sparrow","Grasshopper Sparrow","Harris Sparrow","Henslow Sparrow","Le Conte Sparrow","Lincoln Sparrow","Nelson Sharp Tailed Sparrow",
"Savannah Sparrow","Seaside Sparrow","Song Sparrow","Tree Sparrow","Vesper Sparrow","White Crowned Sparrow","White Throated Sparrow","Cape Glossy Starling","Bank Swallow",
"Barn Swallow","Cliff Swallow","Tree Swallow","Scarlet Tanager","Summer Tanager","Artic Tern","Black Tern","Caspian Tern","Common Tern","Elegant Tern","Forsters Tern",
"Least Tern","Green Tailed Towhee","Brown Thrasher","Sage Thrasher","Black Capped Vireo","Blue Headed Vireo","Philadelphia Vireo","Red Eyed Vireo","Warbling Vireo",
"White Eyed Vireo","Yellow Throated Vireo","Bay Breasted Warbler","Black And White Warbler","Black Throated Blue Warbler","Blue Winged Warbler","Canada Warbler",
"Cape May Warbler","Cerulean Warbler","Chestnut Sided Warbler","Golden Winged Warbler","Hooded Warbler","Kentucky Warbler","Magnolia Warbler","Mourning Warbler",
"Myrtle Warbler","Nashville Warbler","Orange Crowned Warbler","Palm Warbler","Pine Warbler","Prairie Warbler","Prothonotary Warbler","Swainson Warbler","Tennessee Warbler",
"Wilson Warbler","Worm Eating Warbler","Yellow Warbler","Northern Waterthrush","Louisiana Waterthrush","Bohemian Waxwing","Cedar Waxwing","American Three Toed Woodpecker",
"Pileated Woodpecker","Red Bellied Woodpecker","Red Cockaded Woodpecker","Red Headed Woodpecker","Downy Woodpecker","Bewick Wren","Cactus Wren","Carolina Wren","House Wren",
"Marsh Wren","Rock Wren","Winter Wren","Common Yellowthroat"];*/

function changeImage() {
	var bird_type = Math.floor((Math.random() * 10) + 1);
	var bird = Math.floor((Math.random() * 10) + 1);

	var dir = "types/" + bird_type + "/";
	var bird_src = dir + bird + ".jpg";

  	document.getElementById("image").src = bird_src;
  	document.getElementById("name").innerHTML = getBirdName(bird_type, bird);
}

function getBirdName(x,y) {
	if(x < names.length) {
		return names[x];
	}
	else{
		return "Bird (" + x + ":" + y + ")";
	}
}
