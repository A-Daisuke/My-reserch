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
        for (VAR_9 = 0; VAR_8 < VAR_7; VAR_8++) {
          VAR_4.test(VAR_2);
        }
    }
};