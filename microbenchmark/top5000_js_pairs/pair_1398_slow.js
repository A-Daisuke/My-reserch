const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 0;
        var VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_2 = Math.random();
          VAR_3.push(VAR_2);
          if (VAR_2 > 0.5) {
            VAR_2 = Math.random();
            VAR_3.push(VAR_2);
          } else {
            VAR_2 = Math.random();
            VAR_3.push(VAR_2);
          }
        }
        if (VAR_3.length != 200000) {
          throw "Missing items!";
        }
    }
};