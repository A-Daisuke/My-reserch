const Benchmark = {
    run: function() {
        var VAR_1 = {};
        if (VAR_1.VAR_2 === undefined) {
          VAR_1.VAR_2 = [];
        }
        VAR_1.VAR_2.push(0);
    }
};