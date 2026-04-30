const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = new Error();
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          try {
            throw new Error();
          } catch (VAR_4) {}
        }
    }
};