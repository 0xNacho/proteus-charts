export function sortByField (array, field){
    array.sort((e1, e2) => {
        var a = e1[field];
        var b = e2[field];
        return (a < b) ? -1 : (a > b) ? 1 : 0;   
    });
}