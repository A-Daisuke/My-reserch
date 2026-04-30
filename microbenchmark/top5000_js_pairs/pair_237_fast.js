const Benchmark = {
    run: function() {
        var VAR_2 = [true];
        var VAR_1 = 200000;
        while (VAR_2.length < VAR_1) {
          VAR_2 = VAR_2.concat(VAR_2);
        }
        if (VAR_2.length > VAR_1) {
          VAR_2.splice(VAR_1);
        }
    }
};