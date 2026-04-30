const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        var VAR_3 = VAR_1;
        while (VAR_3--) {
          VAR_2.push(Math.random().toString(36).substring(2));
        }
        var VAR_5 = VAR_2.length;
        while (VAR_5--) {}
    }
};