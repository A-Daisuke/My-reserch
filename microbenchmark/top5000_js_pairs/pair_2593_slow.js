const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = "";
        var VAR_3 = "";
        var VAR_4 = 0;
        var VAR_5 = 0;
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          try {
            VAR_1 += "Hi there";
          } catch (VAR_7) {}
        }
    }
};