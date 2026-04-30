const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1,
          VAR_3,
          VAR_4,
          VAR_5 = true;
        while (VAR_1.length !== 100) {
          for (VAR_3 = 2; VAR_3 < VAR_2; VAR_3++) {
            if (VAR_5) {
              VAR_4 = parseFloat(VAR_2 / VAR_3);
              if (Math.floor(VAR_4) === Math.ceil(VAR_4)) {
                VAR_5 = !VAR_5;
              }
            }
          }
          if (VAR_5) {
            VAR_1.push(VAR_2);
          }
          VAR_5 = !VAR_5;
          VAR_2++;
        }
    }
};