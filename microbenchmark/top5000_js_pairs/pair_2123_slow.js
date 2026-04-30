const Benchmark = {
    run: function() {
        VAR_1 = new Array(10000);
        VAR_2 = VAR_1.reverse();
        while ((VAR_3 = VAR_1.pop())) {
          VAR_4 = VAR_3;
        }
    }
};