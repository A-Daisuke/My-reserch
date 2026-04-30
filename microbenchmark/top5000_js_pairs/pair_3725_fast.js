const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "1" };
        for (var VAR_2 = 0, VAR_3 = 1000; VAR_2 < VAR_3; VAR_2++) {
          var VAR_4 = "c";
          if (VAR_4 in VAR_1) var VAR_5 = 1;
          if ("s" in VAR_1) var VAR_6 = 2;
        }
    }
};