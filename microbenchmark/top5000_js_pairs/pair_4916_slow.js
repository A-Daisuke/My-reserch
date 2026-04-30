const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0, VAR_3 = 1000; VAR_2 < VAR_3; VAR_2++) {
          try {
            VAR_1++;
            if (VAR_2 === 999) throw new Error("wat!");
          } catch (VAR_4) {
            VAR_4.VAR_5 = "bar";
            break;
          }
        }
    }
};