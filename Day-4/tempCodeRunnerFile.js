const counts = {}
data.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1
        //console.log(counts);
})
console.log(counts);