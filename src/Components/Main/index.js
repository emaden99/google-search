import '../../App.css';
import { Input, InputGroup } from "reactstrap";

function Main(){
    return(
        <div className="mainContainer d-flex flex-column align-items-center ">
            <img className="brand" width="290" alt="google" height="98" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"></img>
            <InputGroup className="w-75 mt-4 roundManually">
            <Input type="text" className="roundManually" />
            </InputGroup>
        </div>


    )

}

export default Main;