
function LocalStorage(){

    return (
        <div>
            <div>
                <button onClick={() => localStorage.setItem("user" ,"ini data Local Storage")}>Add Local Storage</button>
                <button onClick={() => localStorage.removeItem("user")}>Remove Local Storage</button>
            </div>
        </div>
    )
}

export default LocalStorage;