const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 999; VAR_2++) {
          VAR_1 += "0";
        }
        console.log(VAR_1);
    }
};