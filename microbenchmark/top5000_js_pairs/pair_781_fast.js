const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 50000,
          VAR_3 = 0,
          VAR_4,
          VAR_5;
        while (VAR_3 < VAR_2) {
          VAR_4 = {};
          VAR_4.VAR_6 = "foobar";
          VAR_4.VAR_7 = "red";
          VAR_4.VAR_8 = VAR_3;
          VAR_1.push(VAR_4);
          VAR_3 += 1;
        }
        for (var VAR_11 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          if (typeof VAR_5 !== "number" || VAR_1[VAR_3].VAR_8 > VAR_5) {
            VAR_5 = VAR_3;
          }
        }
    }
};