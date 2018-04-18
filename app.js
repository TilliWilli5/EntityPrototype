var ExhibitInterface = {
    //Getters
    title: Map<String,String>,
    subtitle: ContextSplitAtom,//Proxy with obj.ru = "Подзаголовок", obj.en = "Subtitle", obj.ch = ""

    //Actions
    
};




const CountryEnum = EnumAtom({Russia:1,USA:2,Japan:3,Brazil:4,German:5});

const TupleEntityScheme = {
    guid: Guid(),
    name: ListAtom(StringAtom(0, 100)),
        name: ListAtom(StringAtom({minLength:0,maxLength:100})),
    title: ListAtom(StringAtom(0, 100)),
    subtitle: ListAtom(StringAtom(0, 100)),
    location: ListAtom(StringAtom(0, 100)),
    description: ListAtom(StringAtom(0, 100)),
    history: ListAtom(StringAtom(0, 100)),
    date: TimeAtom(),
    coverImage: UrlAtom(),
    fields: MapAtom(),
    catsub: EnumAtom(),
    countries: SetAtom(CountryEnum),
    hashtags: ListAtom(HashTagAtom())
};