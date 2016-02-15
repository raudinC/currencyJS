describe('checking format function', function(){

    it('should work with positive value', function(){
        expect( currencyJS.format(10000.2, "EUR") ).toBe( '10 000,2€' );
        expect( currencyJS.format(10000.2, "USD") ).toBe( '$10,000.2' );
        expect( currencyJS.format("10000.2", "USD") ).toBe( '$10,000.2' );
    });

    it('should work with negative value', function(){
        expect( currencyJS.format(-2252.2, "EUR") ).toBe( '-2 252,2€' );
        expect( currencyJS.format(-2252.25, "USD") ).toBe( '-$2,252.25' );
        expect( currencyJS.format("-2252.25", "USD") ).toBe( '-$2,252.25' );
    });

    it('should handle errors', function(){
        expect( function(){ currencyJS.format("string", "EUR") } ).toThrow(new Error("Value not valid"));
        expect( function(){ currencyJS.format(10000, "unknown") } ).toThrow(new Error("Currency not valid"));
    });

    it('should handle 0', function(){
        expect( currencyJS.format(0, "EUR") ).toBe( '0€' );
    });

});

