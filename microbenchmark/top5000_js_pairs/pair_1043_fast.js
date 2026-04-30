const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [];
        VAR_2 = new Array(2000000);
        var VAR_3 = VAR_2.slice();
        while (VAR_3.pop()) {}
    }
};