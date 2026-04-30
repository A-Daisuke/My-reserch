const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        var VAR_3 = VAR_1;
        while (VAR_3--) {
          VAR_2.push(Math.random().toString(36).substring(2));
        }
        for (var VAR_4 = 0, VAR_5 = VAR_2.length; VAR_4 < VAR_5; ++VAR_4) {}
    }
};