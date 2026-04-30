const Benchmark = {
    run: function() {
        var VAR_1 = "regexes are fun";
        var VAR_2 = new RegExp("x", "i");
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          /x/.test(VAR_1);
        }
    }
};