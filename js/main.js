
function data(){
    const input = $('#input').val();
    
axios.post('http://10.80.162.54:7070/api/v1/post/write', {
    "content": input
}).then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})
}

function get() {
    axios.get('http://10.80.162.54:7070/api/v1/post')
    .then((Response)=>{
        for(var i = 0; Response["data"]["data"][`${i}`] != null; i++) {
            $('.ul').append('<li id="list">' + '<input id="checkbox" type="checkbox">' + Response["data"]["data"][`${i}`]["content"] + '</li>');
        }
    }).catch(function(error){

    });
        
}

