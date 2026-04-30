const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        var VAR_3 = VAR_1;
        while (VAR_3--) {
          VAR_2.push(Math.random().toString(36).substring(2));
        }
        for (VAR_6 = 0; VAR_6 < VAR_2.length; VAR_6++) {}
    }
};