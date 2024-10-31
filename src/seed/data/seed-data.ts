interface SeedPokemon {
    name: string;
    images: string[];
    type: ValidTypes;
    ability: string[];
    gender: 'male'|'female';
}

type ValidTypes = 'fire'|'thunther'|'ground'|'wind';

interface SeedData {
    pokemons: SeedPokemon[];
}

export const initialData: SeedData = {
   pokemons: [
        {
            name:"pikachu",
            images: ["imag1.jpg", "imag2.jpg","imag3.jpg","imag4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"roque",
            images: ["vvinvi1.jpg", "vbriv2.jpg","iviijvr3.jpg","jdeij4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"norde",
            images: ["cnscniwi1.jpg", "cnscniwi2.jpg","cnscniwi3.jpg","cnscniwi4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"colte",
            images: ["wbwixixxn1.jpg", "wbwixixxn2.jpg","wbwixixxn3.jpg","wbwixixxn4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"ritor",
            images: ["icicicj1.jpg", "icicicj2.jpg","icicicj3.jpg","icicicj4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"refty",
            images: ["cisjxjoqwz1.jpg", "cisjxjoqwz2.jpg","cisjxjoqwz3.jpg","cisjxjoqwz4.jpg"],
            type: 'wind',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"cotermi",
            images: ["imagxbbxx1.jpg", "imagxbbxx2.jpg","imagxbbxx3.jpg","imagxbbxx4.jpg"],
            type: 'wind',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"risera",
            images: ["insnaksnxsakk1.jpg", "insnaksnxsakk2.jpg","nsnaksnxsakkg3.jpg","insnaksnxsakk4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"kitara",
            images: ["inwlxksal1.jpg", "inwlxksal2.jpg","inwlxksal3.jpg","inwlxksal4.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"ostelmine",
            images: ["soksmxkzxm1.jpg", "soksmxkzxm2.jpg","soksmxkzxm3.jpg","soksmxkzxm4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"snackco",
            images: ["xixjaasjim1.jpg", "xixjaasjim2.jpg","xixjaasjim3.jpg","xixjaasjim4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"nosplito",
            images: ["cncicnnd1.jpg", "cncicnnd2.jpg","cncicnnd3.jpg","cncicnnd4.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"sortelix",
            images: ["nnxmzmqqslmz1.jpg", "nnxmzmqqslmz2.jpg","nnxmzmqqslmz3.jpg","nnxmzmqqslmz4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"camelit",
            images: ["ijscsanask1.jpg", "ijscsanask2.jpg","jscsanaskg3.jpg","ijscsanask4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"narterio",
            images: ["msxxjqmoquwtvz1.jpg", "msxxjqmoquwtvz2.jpg","msxxjqmoquwtvz3.jpg","msxxjqmoquwtvz4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"porten",
            images: ["insakasksnsdvdx1.jpg", "insakasksnsdvdx2.jpg","nsakasksnsdvdxg3.jpg","nsakasksnsdvdxg4.jpg"],
            type: 'wind',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"kataris",
            images: ["folebxajsddaxc1.jpg", "folebxajsddaxc2.jpg","folebxajsddaxc3.jpg","folebxajsddaxc4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"blaquera",
            images: ["sxuxijxxj1.jpg", "sxuxijxxj2.jpg","sxuxijxxj3.jpg","sxuxijxxj4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"resonate",
            images: ["ccjcisncxwijdwlsko1.jpg", "ccjcisncxwijdwlsko2.jpg","ccjcisncxwijdwlsko3.jpg","ccjcisncxwijdwlsko4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"contreta",
            images: ["iweiceiceqsseopu1.jpg", "iweiceiceqsseopu2.jpg","iweiceiceqsseopu3.jpg","weiceiceqsseopug4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"craken",
            images: ["dwijisojdqwn2341.jpg", "dwijisojdqwn2342.jpg","dwijisojdqwn2343.jpg","dwijisojdqwn2344.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"ronextro",
            images: ["ewcwcwcnzwisjwiqwu71.jpg", "ewcwcwcnzwisjwiqwu72.jpg","ewcwcwcnzwisjwiqwu73.jpg","ewcwcwcnzwisjwiqwu74.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"pinarxi",
            images: ["eijqooxnxbcvgdlk1.jpg", "eijqooxnxbcvgdlk2.jpg","eijqooxnxbcvgdlk3.jpg","eijqooxnxbcvgdlk4.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"critesta",
            images: ["ucbeucbwu1.jpg", "ucbeucbwu2.jpg","ucbeucbwu3.jpg","ucbeucbwu4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"rltertosi",
            images: ["cwnwecnwjcw1.jpg", "cwnwecnwjcw2.jpg","cwnwecnwjcw3.jpg","cwnwecnwjcw4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"mircaser",
            images: ["ninsxisxnsietryow1.jpg", "ninsxisxnsietryow2.jpg","ninsxisxnsietryow3.jpg","ninsxisxnsietryow4.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"sofetre",
            images: ["cncwcnwckwian35631.jpg", "cncwcnwckwian35632.jpg","cncwcnwckwian35633.jpg","cncwcnwckwian35634.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"nestrety",
            images: ["nnnijllssyywsskao1.jpg", "nnnijllssyywsskao2.jpg","nnnijllssyywsskao3.jpg","nnnijllssyywsskao4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"cretonst",
            images: ["dcndcdcnlwtteyew1.jpg", "dcndcdcnlwtteyew2.jpg","dcndcdcnlwtteyew3.jpg","dcndcdcnlwtteyew4.jpg"],
            type: 'thunther',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"mirtenaze",
            images: ["i36382cjjdndd1.jpg", "i36382cjjdndd2.jpg","i36382cjjdndd3.jpg","i36382cjjdndd4.jpg"],
            type: 'wind',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"cartexitee",
            images: ["niiceiwweil2736h1.jpg", "niiceiwweil2736h2.jpg","niiceiwweil2736h3.jpg","niiceiwweil2736h4.jpg"],
            type: 'ground',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"mortelco",
            images: ["ewehwicnksxmowwwsxwe1.jpg", "ewehwicnksxmowwwsxwe2.jpg","ewehwicnksxmowwwsxwe3.jpg","ewehwicnksxmowwwsxwe4.jpg"],
            type: 'wind',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"nikita",
            images: ["imcniciissmmzkww1.jpg", "imcniciissmmzkww2.jpg","imcniciissmmzkww3.jpg","imcniciissmmzkww4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        },
        {
            name:"ristpoter",
            images: ["nweieiewewmmms1.jpg", "nweieiewewmmms2.jpg","nweieiewewmmms3.jpg","nweieiewewmmms4.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'male'
        },
        {
            name:"cateryne",
            images: ["wqiwqnxksnxsxa211.jpg", "wqiwqnxksnxsxa212.jpg","wqiwqnxksnxsxa213.jpg","wqiwqnxksnxsxa214.jpg"],
            type: 'fire',
            ability: ['powerup','fire','death'],
            gender: 'female'
        }
    ]
}