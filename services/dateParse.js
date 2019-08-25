

function dateParse (unixDate){
    const year = new Date(unixDate).getFullYear().toString();
    const month = (new Date(unixDate).getMonth()+1).toString();
    const day = new Date(unixDate).getDate().toString();
    const newDate = year + '/' + (parseInt(month)<10?'0':'') + month +  '/' + (parseInt(day)<10?'0':'') + day;
    return newDate;
};

export default dateParse;