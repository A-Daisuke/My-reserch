const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        while (VAR_2 < 2000) {
          VAR_1.push(Math.round(Math.random() * 2000));
          VAR_2++;
        }
        var VAR_3 = [],
          VAR_4,
          VAR_5;
        for (VAR_4 in VAR_1) {
          VAR_5 = VAR_1[VAR_4];
          if (VAR_1.indexOf(VAR_5) !== VAR_1.lastIndexOf(VAR_5) && VAR_3.indexOf(VAR_5) == -1) {
            VAR_3.push(VAR_5);
          }
        }
    }
};