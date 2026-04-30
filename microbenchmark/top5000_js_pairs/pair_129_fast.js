const Benchmark = {
    run: function() {
        var VAR_4 = new Array(0, 0);
        while (VAR_4.length < 200000) {
          VAR_4 = VAR_4.concat(VAR_4);
        }
        var VAR_5 = VAR_4.splice(0, 200000);
    }
};