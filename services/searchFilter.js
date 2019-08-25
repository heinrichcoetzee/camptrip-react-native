
export function searchFilter(values,filter){
    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
    const keys = Object.keys(values[0]);
    var kkkk = values.filter(v => v && keys.some(function (k) {
        if (v[k] == null)
        v[k] = '';
        return v[k].toString().toUpperCase().indexOf(filter) >= 0;
    }));
    return kkkk;
    }
}