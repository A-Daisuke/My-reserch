const Benchmark = {
    run: function() {
        var VAR_1 = "mary is at home";
        var VAR_2 = "john is at home";
        var VAR_4 = new RegExp("mary");
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.match(VAR_4);
          VAR_2.match(VAR_4);
        }
    }
};