const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.push(VAR_4);
          if (VAR_4 < 5000) {
            VAR_2.push(VAR_4);
          }
          if (VAR_4 < 10000) {
            VAR_3.push(VAR_4);
          }
        }
        Array.prototype.push.apply(VAR_1, VAR_2);
        VAR_1.splice(0, 5000);
    }
};