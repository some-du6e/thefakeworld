function main() {
    const fileInput = document.getElementById('fileInput');
    const testDiv = document.getElementById('test');

    fileInput.addEventListener('change', function(event) {
        console.log(event.target.files);
        console.log("fuck you")
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                diddy(e.target.result);
            };
            
            
        }
    });
}
// naming everything diddy stuff is a bad idea
function diddy(text) {
    console.log(text);

}

onload = function() {
    main();
};