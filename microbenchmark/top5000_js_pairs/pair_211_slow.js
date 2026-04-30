const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        while (VAR_2 < 100000) {
          VAR_1.push(VAR_2);
          VAR_2++;
        }
        eval(VAR_1.join("+"));
    }
};