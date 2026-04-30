const Benchmark = {
    run: function() {
        var VAR_1 = [0];
        while (VAR_1.length < 65535) {
          VAR_1 = VAR_1.concat(VAR_1);
        }
        if (VAR_1.length > 65535) {
          VAR_1 = VAR_1.slice(0, 65535);
        }
    }
};