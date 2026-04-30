const Benchmark = {
    run: function() {
        var VAR_1 = "mary is at home";
        var VAR_2 = "john is at home";
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.match(new RegExp("mary"));
          VAR_2.match(new RegExp("mary"));
        }
    }
};