var tokiWords = {
    "a" : "interj ah, ha, uh, oh, ooh, aw, well (emotion word)",
    "akesi" : "n non-cute animal, reptile, amphibian",
    "ala" : "mod no, not, none, un-\nn nothing, negation, zero\ninterj no!",
    "alasa" : "vt gather, hunt",
    "ale" : "n everything, anything, life, the universe\nmod all, every, complete, whole",
    "ali" : "n everything, anything, life, the universe\nmod all, every, complete, whole",
    "anpa" : "n bottom, lower part, under, below, floor, beneath\nmod low, lower, bottom, down",
    "ante" : "n difference\nmod different\nconj otherwise, or else\nvt change, alter, modify",
    "anu" : "conj or",
    "awen" : "vi stay, wait, remain\nvt keep\nmod remaining, stationary, permanent, sedentary",
    "e" : "sep (introduces a direct object)",
    "epiku" : "epic, awesome",
    "en" : "conj and (used to coordinate head nouns)",
    "esun" : "n market, shop",
    "ijo" : "n thing, something, stuff, anything, object\nmod of something\nvt objectify",
    "ike" : "mod bad, negative, wrong, evil, overly complex, (figuratively) unhealthy\ninterj oh dear! woe! alas!\nn negativity, badness, evil\nvt to make bad, to worsen, to have a negative effect upon\nvi to be bad, to suck\n[sounds like icky]",
    "ilo" : "n tool, device, machine, thing used for a specific purpose",
    "insa" : "n inside, inner world, centre, stomach\nmod inner, internal\n[inside]",
    "jaki" : "mod dirty, gross, filthy\nn dirt, pollution, garbage, filth\nvt pollute, dirty\ninterj ew! yuck!\n[yucky]",
    "jan" : "n person, people, human, being, somebody, anybody\nmod human, somebody's, personal, of people\nvt personify, humanize, personalize",
    "jasima" : "mirror, reflect, reverse, opposite",
    "jelo" : "mod yellow, light green\n[yellow]",
    "jo" : "vt have, contain\nn having\nkama receive, get, take, obtain",
    "kala" : "n fish, sea creature",
    "kalama" : "n sound, noise, voice\nvi make noise\nvt sound, ring, play (an instrument)",
    "kama" : "vi come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to\nn event, happening, chance, arrival, beginning\nmod coming, future\nvt bring about, summon\n[come up]",
    "kasi" : "n plant, leaf, herb, tree, wood",
    "ken" : "vi can, is able to, is allowed to, may, is possible\nn possibility, ability, power to do things, permission\nvt make possible, enable, allow, permit\ncont it is possible that",
    "kepeken" : "vt use\nprep with",
    "kijetesantakalu" : "raccoon or other musteloid",
    "kili" : "n fruit, pulpy vegetable, mushroom",
    "kin" : "mod also, too, even, indeed (emphasizes the word(s) before it)",
    "kipisi" : "to cut, to divide",
    "kiwen" : "mod hard, solid, stone-like, made of stone or metal\nn hard thing, rock, stone, metal, mineral, clay",
    "ko" : "n semi-solid or squishy substance, e.g. paste, powder, gum",
    "kokosila" : "to speak not in toki pona while in a toki pona group",
    "kon" : "n air, wind, smell, soul\nmod air-like, ethereal, gaseous",
    "ku" : "interacting with the Toki Pona Dictionary",
    "pu" : "interacting with the official Toki Pona book",
    "kule" : "n colour, paint\nmod colourful\nvt colour, paint",
    "kulupu" : "n group, community, society, company, people\nmod communal, shared, public, of the society",
    "kute" : "vt listen, hear\nmod auditory, hearing",
    "la" : "sep (between adverb or phrase of context and sentence)",
    "lanpan" : "seize, steal, get",
    "lape" : "n, vi sleep, rest\nmod sleeping, of sleep",
    "laso" : "mod blue, blue-green",
    "lawa" : "n head, mind\nmod main, leading, in charge\nvt lead, control, rule, steer",
    "leko" : "square, block, stairs",
    "len" : "n clothing, cloth, fabric",
    "lete" : "n cold\nmod cold, uncooked\nvt cool down, chill",
    "li" : "sep (between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
    "lili" : "mod small, little, young, a bit, short, few, less\nvt reduce, shorten, shrink, lessen",
    "linja" : "n long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
    "lipu" : "n flat and bendable thing, e.g. paper, card, ticket",
    "loje" : "mod red",
    "lon" : "prep be (located) in/at/on\nvi be there, be present, be real/true, exist, be awake",
    "luka" : "n hand, arm",
    "lukin" : "vt see, look at, watch, read\nvi look, watch out, pay attention\nmod visual(ly)\n[looking]",
    "lupa" : "n hole, orifice, window, door\n[sounds like loop]",
    "ma" : "n land, earth, country, (outdoor) area",
    "mama" : "n parent, mother, father\nmod of the parent, parental, maternal, fatherly\n[sounds like momma]",
    "mani" : "n money, material wealth, currency, dollar, capital\n[money]",
    "meli" : "n woman, female, girl, wife, girlfriend\nmod female, feminine, womanly\n[Mary]",
    "meso" : "average, medium",
    "mi" : "n I, we\nmod my, our\n[me]",
    "mije" : "n man, male, boy, husband, boyfriend\nmod male, masculine, manly",
    "misikeke" : "medicine, cure",
    "moku" : "n food, meal\nvt eat, drink, swallow, ingest, consume",
    "moli" : "n death\nvi die, be dead\nvt kill\nmod dead, deadly, fatal",
    "monsi" : "n back, rear end, butt, behind\nmod back, rear",
    "monsuta" : "fear, monster, scary",
    "mu" : "interj woof! meow! moo! etc. (cute animal noise)\n[moo]",
    "mun" : "n moon\nmod lunar\n[moon]",
    "musi" : "n fun, playing, game, recreation, art, entertainment\nmod artful, fun, recreational\nvi play, have fun\nvt amuse, entertain",
    "mute" : "mod many, very, much, several, a lot, abundant, numerous, more\nn amount, quantity\nvt make many or much\n[multi]",
    "n" : "um, hm",
    "namako" : "n food additive, accessory, something extra\nvt season, embellish, stimulate",
    "nanpa" : "n number\noth -th (ordinal numbers)\n[number]",
    "nasa" : "mod silly, crazy, foolish, drunk, strange, stupid, weird\nvt drive crazy, make weird",
    "nasin" : "n way, manner, custom, road, path, doctrine, system, method",
    "nena" : "n bump, nose, hill, mountain, button",
    "ni" : "mod this, that",
    "nimi" : "n word, name",
    "noka" : "n leg, foot",
    "o" : "sep O (vocative or imperative)\ninterj hey! (calling somebody's attention)",
    "oko" : "n eye\n[similar to oculist]",
    "olin" : "n love\nmod love\nvt to love (a person)",
    "ona" : "n she, he, it, they\nmod her, his, its, their",
    "open" : "vt open, turn on",
    "pakala" : "n blunder, accident, mistake, destruction, damage, breaking\nvt screw up, fuck up, botch, ruin, break, hurt, injure, damage, spoil, ruin\nvi screw up, fall apart, break\ninterj damn! fuck!",
    "pali" : "n activity, work, deed, project\nmod active, work-related, operating, working\nvt do, make, build, create\nvi act, work, function",
    "palisa" : "n long, mostly hard object, e.g. rod, stick, branch",
    "pan" : "n grain, cereal",
    "pana" : "vt give, put, send, place, release, emit, cause\nn giving, transfer, exchange",
    "pi" : "sep of, belonging to",
    "pilin" : "n feelings, emotion, heart\nvi feel\nvt feel, think, sense, touch\n[feeling]",
    "pimeja" : "mod black, dark\nn darkness, shadows\nvt darken",
    "pini" : "n end, tip\nmod completed, finished, past, done, ago\nvt finish, close, end, turn off",
    "pipi" : "n bug, insect, spider",
    "poka" : "n side, hip, next to\nprep in the accompaniment of, with\nmod neighbouring",
    "poki" : "n container, box, bowl, cup, glass\n[box]",
    "pona" : "n good, simplicity, positivity\nmod good, simple, positive, nice, correct, right\ninterj great! good! thanks! OK! cool! yay!\nvt improve, fix, repair, make good\n[bonam]",
    "pu" : "interacting with the official Toki Pona book",
    "sama" : "mod same, similar, equal, of equal status or position\nprep like, as, seem",
    "seli" : "n fire, warmth, heat\nmod hot, warm, cooked\nvt heat, warm up, cook",
    "selo" : "n outside, surface, skin, shell, bark, shape, peel",
    "seme" : "oth what, which, wh- (question word)",
    "sewi" : "n high, up, above, top, over, on\nmod superior, elevated, religious, formal",
    "sijelo" : "n body, physical state",
    "sike" : "n circle, wheel, sphere, ball, cycle\nmod round, cyclical",
    "sin" : "mod new, fresh, another, more\nvt renew, renovate, freshen",
    "sina" : "n you\nmod your",
    "sinpin" : "n front, chest, torso, face, wall",
    "sitelen" : "n picture, image\nvt draw, write",
    "soko" : "mushroom, fungus",
    "sona" : "n knowledge, wisdom, intelligence, understanding\nvt know, understand, know how to\nvi know, understand\nkama learn, study",
    "soweli" : "n animal, especially land mammal, lovable animal",
    "suli" : "mod big, tall, long, adult, important\nvt enlarge, lengthen\nn size",
    "suno" : "n sun, light",
    "supa" : "n horizontal surface, e.g furniture, table, chair, pillow, floor",
    "suwi" : "n candy, sweet food\nmod sweet, cute \nvt sweeten\n[sweet]",
    "tan" : "prep from, by, because of, since\nn origin, cause",
    "taso" : "mod only, sole\nconj but\n[that's all]",
    "tawa" : "prep to, in order to, towards, for, until\nvi go to, walk, travel, move, leave\nn movement, transportation\nmod moving, mobile\nvt move, displace\n[towards]",
    "telo" : "n water, liquid, juice, sauce\nvt water, wash with water",
    "tenpo" : "n time, period of time, moment, duration, situation",
    "toki" : "n language, talking, speech, communication\nmod talking, verbal\nvt say\nvi talk, chat, communicate\ninterj hello! hi!",
    "tomo" : "n indoor constructed space, e.g. house, home, room, building\nmod urban, domestic, household",
    "tonsi" : "non-binary, gender-nonconforming",
    "tu" : "mod two\nn duo, pair\nvt double, separate/cut/divide in two\n[two]",
    "unpa" : "n sex, sexuality\nmod erotic, sexual\nvt have sex with, sleep with, fuck\nvi have sex",
    "uta" : "n mouth\nmod oral",
    "utala" : "n conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence\nvt hit, strike, attack, compete against",
    "walo" : "mod white, light (colour)\nn white thing or part, whiteness, lightness\n[sounds like wall, which is often white]",
    "wan" : "mod one, a\nn unit, element, particle, part, piece\nvt unite, make one\n[one]",
    "waso" : "n bird, winged animal",
    "wawa" : "n energy, strength, power\nmod energetic, strong, fierce, intense, sure, confident\nvt strengthen, energize, empower",
    "weka" : "mod away, absent, missing\nn absence\nvt throw away, remove, get rid of",
    "wile" : "vt to want, need, wish, have to, must, will, should\nn desire, need, will\nmod necessary"
};

var tokiWordsShort = {
    "a" : "ah",
    "akesi" : "animal/amphibian",
    "ala" : "no/not",
    "alasa" : "gather",
    "ale" : "everything/anything/life",
    "ali" : "everything/anything/life",
    "anpa" : "bottom/floor",
    "ante" : "difference",
    "anu" : "or",
    "awen" : "wait",
    "e" : "sep",
    "epiku" : "epic",
    "en" : "and",
    "esun" : "shop",
    "ijo" : "thing",
    "ike" : "bad",
    "ilo" : "tool/machine",
    "insa" : "inside",
    "jaki" : "dirty/gross",
    "jan" : "person",
    "jasima" : "mirror",
    "jelo" : "yellow",
    "jo" : "having/take",
    "kala" : "fish",
    "kalama" : "sound",
    "kama" : "come/become/happen",
    "kasi" : "plant",
    "ken" : "can",
    "kepeken" : "use",
    "kijetesantakalu" : "musteloid",
    "kili" : "fruit/vegetable",
    "kin" : "also",
    "kipisi" : "cut",
    "kiwen" : "hard",
    "ko" : "semi-solid/squishy",
    "kokosila" : "not speaking toki pona",
    "kon" : "air/wind",
    "ku" : "interact w/ Toki Pona Dictionary",
    "kule" : "color",
    "kulupu" : "group",
    "kute" : "listen",
    "la" : "sep",
    "lanpan" : "steal",
    "lape" : "sleep",
    "laso" : "blue",
    "lawa" : "head",
    "leko" : "square",
    "len" : "clothing",
    "lete" : "cold",
    "li" : "sep",
    "lili" : "small",
    "linja" : "long/thin",
    "lipu" : "flat",
    "loje" : "red",
    "lon" : "present/awake",
    "luka" : "hand/arm",
    "lukin" : "see/look/watch/read",
    "lupa" : "hole/window/door",
    "ma" : "land",
    "mama" : "parent",
    "mani" : "money",
    "meli" : "female",
    "meso" : "medium",
    "mi" : "I/me/we",
    "mije" : "male",
    "misikeke" : "medicine",
    "moku" : "food/eat",
    "moli" : "death/kill",
    "monsi" : "back/rear",
    "monsuta" : "fear",
    "mu" : "animal noise/woof/meow",
    "mun" : "moon",
    "musi" : "fun",
    "mute" : "many",
    "n" : "um/hm",
    "namako" : "food additive",
    "nanpa" : "number",
    "nasa" : "silly/crazy",
    "nasin" : "way/path",
    "nena" : "bump/nose/hill",
    "ni" : "this/that",
    "nimi" : "word/name",
    "noka" : "leg/foot",
    "o" : "calling attention",
    "oko" : "eye",
    "olin" : "love",
    "ona" : "she/he/it/they",
    "open" : "open",
    "pakala" : "blunder",
    "pali" : "activity/work",
    "palisa" : "long/hard",
    "pan" : "grain",
    "pana" : "give",
    "pi" : "of/belonging to",
    "pilin" : "feelings",
    "pimeja" : "black",
    "pini" : "end",
    "pipi" : "bug",
    "poka" : "side/hip/next",
    "poki" : "container",
    "pona" : "good",
    "pu" : "interacting w/ Toki Pona",
    "sama" : "same",
    "seli" : "fire",
    "selo" : "outside/skin",
    "seme" : "what/which/question",
    "sewi" : "high/up",
    "sijelo" : "body",
    "sike" : "n circle",
    "sin" : "new",
    "sina" : "you",
    "sinpin" : "front/chest",
    "sitelen" : "picture/draw/write",
    "soko" : "mushroom",
    "sona" : "knowledge",
    "soweli" : "animal/mammal",
    "suli" : "big/tall",
    "suno" : "sun/light",
    "supa" : "flat surface",
    "suwi" : "candy/sweet",
    "tan" : "because",
    "taso" : "but",
    "tawa" : "towards",
    "telo" : "water",
    "tenpo" : "time",
    "toki" : "language",
    "tomo" : "house",
    "tonsi" : "non-binary",
    "tu" : "two",
    "unpa" : "sex",
    "uta" : "mouth",
    "utala" : "conflict",
    "walo" : "white",
    "wan" : "one",
    "waso" : "bird",
    "wawa" : "energy",
    "weka" : "away",
    "wile" : "want/need"
};


var search = window.location.search;
var textarea = document.getElementById("text");

if( search.indexOf('?t=') !== -1 )
{
    var words = search.replace('\?t=','').replace(/\\n/g,"\n").split('%20');
    textarea.value = search.replace('\?t=','').replace(/\\n/g,"\n").replace(/%20/g,' ');
    processWords(words);
}

textarea.addEventListener("keyup", processWords, false);
document.getElementById("show-dict").addEventListener("click", toggleDict, false);

var dictOutput = '';
var dict = document.getElementById("dict");
for( x in tokiWords )
{
    dictOutput += '<dt>'+x+'</dt><dd>'+tokiWords[x].replace(/\n/g,'<br>')+'</dd>'
}
dict.innerHTML = dictOutput;

function toggleDict(e) {
    e.preventDefault();
    var dict = document.getElementById("dict");
    dict.setAttribute("class",dict.getAttribute("class") == "collapse" ? "" : "collapse");
}

function processWords(words)
{
    if( typeof(words) !== "Array" )
    {
        var sentence = document.getElementById("text").value;
        var words = sentence.split(" ");
    }
    var output = '';
    var url = window.location.origin+'/~dustin/ilo/?t=';

    for( x in words )
    {
        if( words[x] != '' )
        {
            if( words[x].indexOf("\n") !== -1 )
            {
                url += (x!=0?'%20':'')+words[x].replace(/ /g,'%20').replaceAll('\n','\\n');
                output += translateWords(words[x].split("\n"),true);
            }
            else
            {
                url += (x!=0?'%20':'')+words[x];
                output += translateWords([words[x]],false);
            }
        }
    }

    output += '<br><br><p>Permalink: <a href="'+url+'">'+url+'</a></p>';

    window.history.replaceState( {} , '', url );

    document.getElementById("output").innerHTML = output;
}

function translateWords(words,breaks)
{
    var output = '';
    for( x in words )
    {
        if( words[x] != "" )
        {
            var key = words[x].toLowerCase().replace(/[^A-Za-z]+/g, '');

            if( tokiWords[key] != undefined ) {
                output += '<span title="'+tokiWords[key]+'">'+words[x]+' ('+tokiWordsShort[key]+')</span>&nbsp;';
            } else {
                var foundEnglish = false;
                for( y in tokiWords ) {
                    if( tokiWords[y].toLowerCase().replaceAll("\n",' ').replaceAll(',','').split(' ').includes(key) ) {
                        foundEnglish = true;
                        output += '<span class="english" title="' + tokiWords[y] + '">'+words[x]+' (' + y + ')</span>&nbsp;';
                        break;
                    }
                }

                if( !foundEnglish )
                    output += '<span class="not-toki" title="Could not find match">'+words[x]+'</span>&nbsp;';
            }
        }
        if( breaks && x != words.length-1 )
            output += '<br>';
    }
    return output;
}
