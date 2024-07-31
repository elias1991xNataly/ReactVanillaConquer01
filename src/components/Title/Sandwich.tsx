// ingredientes
import { useEffect, useState } from "react";
import { Ingredientes, Relleno } from "../../models/sandwich.model"

export function Sandwich({ relleno, pan }: Ingredientes) {

    // variables
    const [text, setText] = useState(relleno.mayonesa ? "viene con mayonesa" : "no viene con mayonesa");
    const [uppercaseText, setUppercaseText] = useState(text.toUpperCase());
    const [filteredRellenos, setFilteredRellenos] = useState(Object.keys(relleno))
    // métodos
    const changeText = (newText: string) => {
        setText(newText);
        setUppercaseText(newText.toUpperCase())
    }

    const filterRellenos = (element: Relleno) => Object.keys(element).filter((key) =>
        // !!element[key as keyof Relleno]) nullable significa que solo funciona si son valores correctos, true , si es null, undefined o false no se ejecuta.
        !!element[key as keyof Relleno]);

    // efectos - se ejecutan SIEMPRE al menos una vez
    // useEffect == sincronizar con el exterior
    useEffect(() => {

        const filtered = Object.keys(relleno).filter((key) => !!relleno[key as keyof Relleno]);
        setFilteredRellenos(filtered);


        return () => {
            console.log("chau chau");
        };
        // creacion | modificacion
    }, [relleno, setFilteredRellenos]);


    // useEffect(() => {
    //     setUppercaseText(text.toUpperCase());
    //     //NO ES BUENA PRACTICA HACER ESTO PORQUE NO ES EXTERIOR Y CAERIAMOS EN LA PESADILLA DE CUALQUIER PROGRAMADOR DE REACT: MUCHOS RENDERS INNECESARIOS
    // }, [text, setUppercaseText])

    ;
    return (<div>
        <h2>Viene con:</h2>
        <p>Viene con Mayonesa?{text}</p>

        <p>Viene con el pan:{pan}</p>
        {filteredRellenos.map((element) => (
            <p key={element}>{element}</p>
        ))}
        <button onClick={() => {
            changeText("cualquier otra cosa");

        }}>
            Cambiar Texto(" ")
        </button>

    </div>
    )
}

// const sandwich = Sandwich({ relleno: { lechuga: true, carne: true, pepinillo: true, mostaza: false, mayonesa: false }, pan: Panes.LACTAL })