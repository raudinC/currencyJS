(function (root, factory) {

    /* --- Module Definition --- */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.currencyJS = factory();
    }

}(this, function () {
    var currencyJS = {};


    currencyJS.version = 0.1;


    currencyJS.settings = {
        currencies : {
            "dollar" : {
                symbol : "$",       //symbol
                format : "%s%v",    // output: %s = symbol, %v = value
                decimal : ".",		// decimal point separator
                thousand : ","		// thousands separator
            },
            "euro" : {
                symbol : "€",       //symbol
                format : "%v%s",    // output: %s = symbol, %v = value
                decimal : ",",		// decimal point separator
                thousand : " "		// thousands separator
            }
        }
    };


    /*
     *    Format number with decimal, thousand given
     */
    var formatNumber = currencyJS.formatNumber = function(number, thousand, decimal) {
        var string = number.toString().split(".");
        var th = string[0];
        var dec = string[1];
        var chunks = [];

        for (var i = th.length; i > 0; i -= 3) {
            chunks.unshift(th.substring(i, i - 3));
        }
        return  chunks.join(thousand) + (dec ? decimal + dec : "");
    };


    /*
     *   Return a formatted value
     */
    currencyJS.format = function(number, currency) {
        //Retrieve the right currency
        var currency = this.settings.currencies[currency];

        if(!currency) {
            throw new Error("Currency not valid");
        }

        //Check number is valid
        var value = parseFloat(number);

        if(!value) {
            throw new Error("Value not valid");
        }

        return (number < 0 ? "-" : "") + currency.format.replace('%s', currency.symbol).replace('%v', formatNumber(Math.abs(value), currency.thousand, currency.decimal));
    };


    return currencyJS;
}));