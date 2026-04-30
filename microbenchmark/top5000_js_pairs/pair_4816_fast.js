const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        var VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 1000; ++VAR_1) {
          VAR_3.push(42);
          if (VAR_3.length >= 20) VAR_3.splice(0, 10);
        }
    }
};