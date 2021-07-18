import '../../App.css';
import { Input, InputGroup}  from "reactstrap";
import React from 'react';
import {useState,useEffect} from "react" ; 

function Main(){
    const [search,setSearch] = useState('') ;
    const [results,setResults] =useState([]) ;
    useEffect(() => {
        var s=search.trim() ;
        if(s.length===0){
          setResults([]);
         }
         else{
           setResults(data.filter(item=>item.toLowerCase().includes(s.toLowerCase())));
         }
    }, [search])
  const data = [
        "Ezgi Maden",
        "Inez Morin",
        "Emmanuel Brennan",
        "Hilel Williams",
        "Leonard Rush",
        "Ross Gilliam",
        "Ashton White",
        "Chastity Floyd",
        "Cyrus Terry",
        "Cyrus Blair",
        "Ferris Fox",
        "Yen Hines",
        "Vance Evans",
        "Daryl Cross",
        "Colorado Little",
        "Hiroko Powell",
        "Kellie Watts",
        "Ian Kinney",
        "Brendan Orr",
        "Desiree Sears",
        "Ali Riddle",
        "Hedwig Stanley",
        "Philip Hines",
        "Armand Lang",
        "Freya Conley",
        "Maya Tucker",
        "Tarik Hunt",
        "Uma Fry",
        "Dorian Valdez",
        "Walter Molina",
        "Signe Mcmillan",
        "Fleur Morales",
        "Shelby Ware",
        "Connor Gallegos",
        "Patricia Bonner",
        "Travis Buckley",
        "Andrew Glover",
        "Chaim Glass",
        "Armando Klein",
        "Blythe Black",
        "Wilma Todd",
        "Octavius Parks",
        "Jameson Mckee",
        "Renee Fletcher",
        "Clinton Leonard",
        "Zeus Bruce",
        "Maite Phelps",
        "Ira Ortiz",
        "Baxter Bradshaw",
        "Malik Pope",
        "Dakota Melendez",
        "Daryl Hooper",
        "Idola Kline",
        "Emery Rasmussen",
        "Sarah Wood",
        "Ariel Dyer",
        "Keely Simmons",
        "Burke Odonnell",
        "Sonya Atkinson",
        "Roary Lewis",
        "Buckminster Stein",
        "Jeremy Nelson",
        "Philip Curry",
        "Octavia Austin",
        "Savannah Johns",
        "Sara Bradley",
        "Cody Holcomb",
        "Ishmael William",
        "Unity Sexton",
        "Kaden Mckee",
        "Mark Alvarez",
        "Jenette Bray",
        "Sylvester Hahn",
        "Michael Hall",
        "Leigh Martin",
        "Magee Gray",
        "Magee Howe",
        "Steven Chang",
        "Uma Porter",
        "Adele Sweeney",
        "Neve Whitney",
        "Josiah Cook",
        "Rajah Hahn",
        "Kristen Hunter",
        "Alan Lancaster",
        "Marshall Hopkins",
        "Jolie Carrillo",
        "Xander Cummings",
        "Abraham Schroeder",
        "Yvette Dale",
        "Wesley Greene",
        "Clementine Deleon",
        "Velma Church",
        "Nell Holcomb",
        "Aaron Talley",
        "Helen Holcomb",
        "Shaeleigh Vazquez",
        "Alexandra Mcmahon",
        "Urielle Downs",
        "Avye Jarvis",
        "Germane Vance"
    ];
    

    return(
        <div>
        <div className="mainContainer d-flex flex-column align-items-center ">
            <img className="brand" width="290" alt="google" height="98" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"></img>
            <InputGroup className="w-75 mt-4 roundManually">
            <Input onChange={(event)=>setSearch(event.target.value)} value={search} type="text" className="roundManually" />
            </InputGroup>
            </div>
 <div>
                
                {results&& (
                    <div className="search-results ">
                  
                    {results.map(item=>
                        <div className="results-item mt-3 " key={item}>
                            {item}
                            </div>
                        )}
                    </div>
                )
                
                } 
                
           
            </div>
        </div>


    )

    }

export default Main;