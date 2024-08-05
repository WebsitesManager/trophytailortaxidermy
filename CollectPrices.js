const ToAppendTo = document.body.getElementsByTagName("main")[0]
const fetchurl = 'https://liedraco.pythonanywhere.com'

fetch(`${fetchurl}/Prices`).then(repsonse => { return repsonse.json() })
    .then(Prices => {
        let dictoflengths = {}
        let lengths = []
        for (const key in Prices) {
            let element = Prices[key];
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
            if (dictoflengths[element.length]) {
                if (Array.isArray(dictoflengths[element.length])) {
                    dictoflengths[element.length].unshift(List)
                }
                dictoflengths[element.length] = [dictoflengths[element.length], List]
            }
            else {

                dictoflengths[element.length] = List
            }
            lengths.unshift(element.length)
        }
        lengths.sort((a, b) => b - a)
        lengths.forEach(i => {
            if (Array.isArray(dictoflengths[i])) {
                dictoflengths[i].forEach(I => {
                    ToAppendTo.appendChild(I)
                })
            }
            else {
                ToAppendTo.appendChild(dictoflengths[i])
            }
        })

    })
