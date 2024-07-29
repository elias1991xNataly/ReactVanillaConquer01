import { Form } from "./components/Form";
import { ShowUser } from "./components/ShowUser";

export function Dashboard(){
//pegarle a una api y obtener la información de los usuarios

    return (
    <div>
        <Form/>
        <ShowUser/>
        </div>
        );
}