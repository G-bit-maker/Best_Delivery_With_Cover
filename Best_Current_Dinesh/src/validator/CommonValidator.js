module.exports = {
    emptyValidator: function (data){
        if (typeof data === 'object' && Object.keys(data) === 0) {
            console.log(Object.keys(data));
          }
    }
}