var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    console.log("Geese: ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']")
    console.log("Entrada: ['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish']")
    console.log(goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
    
    function goose_filter(arrStrg) {
            var arr = arrStrg.filter(item => !geese.includes(item))
            return arr.toString()
    }