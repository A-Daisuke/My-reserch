const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          try {
            throw VAR_2;
          } catch (VAR_3) {
            VAR_1 += 2 * VAR_2;
          }
        }
        console.log(VAR_1.length);
    }
};