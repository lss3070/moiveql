export const people=[
    {
    id:"0",
    name:"SongSeop",
    age:29,
    gender:"male"
},
{
    id:"1",
    name:"SongSeop",
    age:29,
    gender:"male"
},{
    id:"2",
    name:"SongSeop",
    age:29,
    gender:"male"
},{
    id:"3",
    name:"SongSeop",
    age:29,
    gender:"male"
},{
    id:"4",
    name:"SongSeop",
    age:29,
    gender:"male"
},{
    id:"5",
    name:"SongSeop",
    age:29,
    gender:"male"
},{
    id:"6",
    name:"SongSeop",
    age:29,
    gender:"male"
}
];

export const getById=id=>{
    const filteredPeople=movies.filter(person=>id===people.id);
    return filteredPeople[0]
}