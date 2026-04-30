const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_3 = "";
        var VAR_4 = 0;
        var VAR_5 = 0;
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          try {
            (function (VAR_7) {})(VAR_6);
          } catch (VAR_8) {}
        }
    }
};