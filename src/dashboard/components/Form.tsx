export function Form (){
    return(
        <>
            <form action="/users" method="post">
                <input type="text" name="name" required maxLength={20}/>
                <input type="number" name="age" required min={18} max={99}/>
                 <input type="submit" name="Add User"/>
            </form>
        
        </>
    )
}