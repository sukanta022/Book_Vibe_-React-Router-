const getStoreBook = () => {
    const storedBookStr = localStorage.getItem("readlist")
    if(storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr)
        return storedBookData
    }
    else{
        return [];
    }
}


const addToStore = (id) => {
    const bookData = getStoreBook()
    if(bookData.includes(id)){
        alert("Book already exist")
    }
    else {
        bookData.push(id)
        const data = JSON.stringify(bookData)
        localStorage.setItem("readlist", data)
    }
}

export {addToStore,getStoreBook};