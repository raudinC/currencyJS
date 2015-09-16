describe('checking format function', function(){

    it('should work with positive value', function(){
        expect( currencyJS.format(10000.2, "euro") ).toBe( '10 000,2€' );
        expect( currencyJS.format(10000.2, "dollar") ).toBe( '$10,000.2' );
        expect( currencyJS.format("10000.2", "dollar") ).toBe( '$10,000.2' );
    });

    it('should work with negative value', function(){
        expect( currencyJS.format(-2252.2, "euro") ).toBe( '-2 252,2€' );
        expect( currencyJS.format(-2252.25, "dollar") ).toBe( '-$2,252.25' );
        expect( currencyJS.format("-2252.25", "dollar") ).toBe( '-$2,252.25' );
    });

    it('should handle errors', function(){
        expect( function(){ currencyJS.format("string", "euro") } ).toThrow(new Error("Value not valid"));
        expect( function(){ currencyJS.format(10000, "unknow") } ).toThrow(new Error("Currency not valid"));
    });

});

