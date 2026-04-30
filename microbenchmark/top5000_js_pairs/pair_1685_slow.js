const Benchmark = {
    run: function() {
        var VAR_1 = new Array(0, 0);
        while (VAR_1.length < 200000) {
          VAR_1 = VAR_1.concat(VAR_1);
        }
        var VAR_2 = VAR_1.splice(0, 200000);
    }
};