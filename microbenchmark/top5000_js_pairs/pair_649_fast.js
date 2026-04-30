const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_4 = new Error();
        for (var VAR_2 = 0; VAR_2 < VAR_1; VAR_2++) {
          try {
            throw VAR_4;
          } catch (VAR_3) {}
        }
    }
};