const Benchmark = {
    run: function() {
        VAR_1 = "http://foo.bar.baz/hEllo/world?mars=planet&poorPluto=notAPlanet";
        VAR_2 = VAR_1.toLowerCase();
        VAR_3 = new RegExp("HELLO".toLowerCase());
        VAR_4 = new RegExp("HELLO", "i");
        VAR_5 = new RegExp("GOODBYE".toLowerCase());
        VAR_6 = new RegExp("GOODBYE", "i");
        VAR_7 = 10000;
        VAR_8 = 0;
        VAR_9 = VAR_1.toLowerCase();
        for (VAR_10 = 0; VAR_8 < VAR_7; VAR_8++) {
          VAR_5.test(VAR_1);
        }
    }
};