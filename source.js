var wheretoappend = document.getElementById('spanforstuff')
const fetchurl = 'https://liedraco.pythonanywhere.com'

fetch(`${fetchurl}/images`).then(repsonse => { return repsonse.json() })
    .then(filenamearray => {
        console.log(filenamearray)
        filenamearray.forEach(filename => {
            let aimagetag = document.createElement('a')
            let imagetag = document.createElement('img')
            aimagetag.target = '_blank'
            aimagetag.href = `${fetchurl}/image/${filename}`
            imagetag.src = `${fetchurl}/image/${filename}`
            imagetag.className = 'image'
            aimagetag.appendChild(imagetag)
            wheretoappend.appendChild(aimagetag)
        });
    })
