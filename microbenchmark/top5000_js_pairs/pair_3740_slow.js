const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          var VAR_2 = VAR_1 < 999 ? { KEY_1: { KEY_2: "bomb!" } } : "bomb!";
          var VAR_3;
          try {
            VAR_3 = VAR_2.KEY_1.KEY_2;
          } catch (VAR_4) {
            VAR_3 = VAR_2;
          }
        }
    }
};