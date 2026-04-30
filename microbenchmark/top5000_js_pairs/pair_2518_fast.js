const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("" + VAR_2 + "mike");
        }
        var VAR_3 = /9999mike/;
        var VAR_4 = /^9999mike$/;
        var VAR_5 = "9999mike";
        for (var VAR_6 = 0, VAR_7 = VAR_1.length; VAR_6 < VAR_7; VAR_6++) {
          if (VAR_1[VAR_6] == VAR_5) {
            break;
          }
        }
    }
};