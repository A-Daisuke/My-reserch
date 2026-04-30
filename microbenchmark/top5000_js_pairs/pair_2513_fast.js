const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        while (VAR_2 < 10000) {
          VAR_1.push(Math.floor(Math.random() * 255));
          VAR_2++;
        }
        var VAR_3 = "",
          VAR_8 = 0,
          VAR_6 = VAR_1.length;
        while (VAR_2 < VAR_6) {
          var VAR_10 = VAR_1[VAR_2].toString(16);
          if (VAR_10.length < 2) {
            VAR_10 = "0" + VAR_10;
          }
          VAR_3 += VAR_10;
          VAR_2++;
        }
    }
};