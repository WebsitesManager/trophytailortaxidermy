const ToAppendTo = document.body.getElementsByTagName("main")[0]
const fetchurl = 'https://liedraco.pythonanywhere.com'
// console.log(ToAppendTo)
// fetch('http://127.0.0.1:5000/Prices').then(repsonse => { return repsonse.json() })
//     .then(Prices => {
//         let dictoflengths = {}
//         let lengths = []
//         for (const key in Prices) {
//             let element = Prices[key];
//             console.log(element)
//             // let newcontainer=document.createElement('div')
//             // newcontainer.className='headerandlistcontainer'
//             let List = document.createElement('ol')
//             let header = document.createElement("h1")
//             header.innerHTML = key
//             header.id = "listheader"
//             List.appendChild(header)
//             element.forEach(current => {
//                 let Item = document.createElement('li')
//                 Item.innerHTML = current
//                 List.appendChild(Item)
//             });
//             Element = [1, 23, 3]
//             dictoflengths[element.length] = List
//             lengths.push(element.length)
//         }
//         lengths.sort((a, b) => b - a)
//         console.log(lengths)
//         console.log(dictoflengths)
//         lengths.forEach(i => {
//             ToAppendTo.appendChild(dictoflengths[i])
//         })
//     })
fetch(`${fetchurl}/Prices`).then(repsonse => { return repsonse.json() })
    .then(Prices => {
        let dictoflengths = {}
        let lengths = []
        console.log(Prices)
        for (const key in Prices) {
            let element = Prices[key];
            console.log(key, element)
            // let newcontainer=document.createElement('div')
            // newcontainer.className='headerandlistcontainer'
            const List = document.createElement('ol')
            const header = document.createElement("h1")


            header.innerHTML = key
            header.id = "listheader"

            List.appendChild(header)


            element.forEach(current => {
                const Item = document.createElement('li')
                // const Item = document.createElement('input')

                Item.innerHTML = current



                List.appendChild(Item)
            });
            console.log(dictoflengths[element.length])
            if (dictoflengths[element.length]) {
                if (Array.isArray(dictoflengths[element.length])) {
                    console.log('is array')
                    dictoflengths[element.length].unshift(List)
                }
                dictoflengths[element.length] = [dictoflengths[element.length], List]
                console.log(dictoflengths, "HHERE")
            }
            else {

                dictoflengths[element.length] = List
            }
            lengths.unshift(element.length)
        }
        lengths.sort((a, b) => b - a)
        console.log(lengths)
        console.log(dictoflengths)
        lengths.forEach(i => {
            if (Array.isArray(dictoflengths[i])) {
                console.log(dictoflengths[i])
                dictoflengths[i].forEach(I => {
                    console.log(dictoflengths[i], dictoflengths[i][I], i, "|", I)
                    ToAppendTo.appendChild(I)
                })
            }
            else {
                ToAppendTo.appendChild(dictoflengths[i])
            }
        })

    })
