function SessionStorage(){
    return (
        <div>
            <div>
                <button onClick={() => sessionStorage.setItem("tokenn", "ini data Session")}>Add Session Storage</button>
                <button onClick={() => sessionStorage.removeItem("tokenn")}>Remove Session Storage</button>
            </div>
        </div>
    )

}

export default SessionStorage;