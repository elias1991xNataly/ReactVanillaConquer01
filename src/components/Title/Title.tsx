import { ReactNode } from "react";
import styles from "./Title.module.css";

interface Props {
    children: ReactNode;
}
export const Title = ({ children }: Props) => {

    return <h1 className={styles.title}>
        {children}
    </h1>
}



// interface Props {
//     text: string
// }

// export const Title = ({ text }: Props) => {

//     const myArray = ["alan", "pepe"];
//     const render = true;
//     const conditionalHtml = (nombre: string, key: number) => (
//         <span key={key} >
//             Me renderizan muchas veces y condicionalmente {nombre}
//         </span>
//     )
//     // lógica de mi componente
//     return (
//         <div>
//             {
//                 myArray.map((nombre, index) => conditionalHtml(nombre, index))

//             }
//             {render ? <span>Tiene render</span> : ""}
//         </div>
//     )
// }



