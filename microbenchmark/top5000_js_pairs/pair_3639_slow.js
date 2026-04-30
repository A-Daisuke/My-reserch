const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = new Array(VAR_1);
        VAR_2 = VAR_2.map((VAR_3, VAR_4) => {
          return VAR_4;
        });
    }
};