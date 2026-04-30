const Benchmark = {
    run: function() {
        var VAR_1 = ["sdadsds search"];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          if (VAR_1[0] === "sdadsds search") {
            VAR_1[1] = "asd";
          }
        }
    }
};