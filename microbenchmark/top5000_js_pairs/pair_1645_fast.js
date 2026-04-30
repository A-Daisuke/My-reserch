const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = "aAaAaAaAaAaAaAaA";
        var VAR_3 = VAR_2.toLowerCase();
        var VAR_4 = "z";
        var VAR_5 = new RegExp(VAR_4, "i");
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_1 = VAR_2.toLowerCase().indexOf(VAR_4) > -1;
        }
    }
};