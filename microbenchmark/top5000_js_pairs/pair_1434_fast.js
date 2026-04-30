const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += "test" + VAR_2 + "\n";
        }
        var VAR_3 = [];
        for (var VAR_5 = 0, VAR_6 = VAR_1.VAR_6; VAR_2 < VAR_6; ) {
          var VAR_7 = VAR_1.indexOf("\n", VAR_2);
          var VAR_8 = VAR_1.slice(VAR_2, VAR_7);
          VAR_3.push(VAR_8);
          VAR_2 = VAR_7 + 1;
        }
    }
};