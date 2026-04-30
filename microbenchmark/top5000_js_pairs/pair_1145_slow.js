const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2 += "," + "sadfasdfasdf";
        }
        VAR_2 = VAR_2.substr(1);
        VAR_1 = VAR_2.split(",");
    }
};