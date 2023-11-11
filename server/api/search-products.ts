export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const name = query.name?.toString().toLowerCase()
    if(!name || name.length < 4){
        return []
    }
   
   const response = await $fetch("/api/getProducts")
   const filter = response.filter((item) => item.name?.toLowerCase().includes(name as string))
   const filteredArray = filter.map((item) => ({name: item.name, image: item.image, id: item.id}))

    return filteredArray

})