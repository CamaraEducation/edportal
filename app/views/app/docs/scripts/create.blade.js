$('#docFile').on('change', function() {
    const docFile = document.getElementById('docFile').files[0];
    const docName = document.getElementById('docName');

    if(docName.value === '' && docFile){
        const docFileName = docFile.name.split('.').slice(0, -1).join('.');
        docName.value = docFileName.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

});