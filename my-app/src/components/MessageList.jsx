const MessageList = () => {

    function trial(obj) {

        for (var key in obj) {
            console.log(obj[key]);
            let element = document.createElement("div");
            element.innerHTML = obj[key];
            let add = document.getElementById("second");
            add.appendChild(element);

        }
    }
    
    return (
        <div>
          
        </div>
    )
}
export default MessageList;