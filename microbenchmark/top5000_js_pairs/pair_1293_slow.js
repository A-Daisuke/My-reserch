const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_1 = new Array(10000);
        VAR_2 = 0;
        while (VAR_1.length > 0) {
          VAR_3 = VAR_1.shift();
        }
    }
};