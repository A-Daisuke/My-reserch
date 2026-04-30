const Benchmark = {
    run: function() {
        var VAR_1 = {};
        try {
          VAR_1.VAR_2.push(0);
        } catch (VAR_3) {
          VAR_1.VAR_2 = [];
          VAR_1.VAR_2.push(0);
        }
    }
};