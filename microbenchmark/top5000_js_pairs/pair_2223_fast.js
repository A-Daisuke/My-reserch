const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1 = VAR_1.concat("Quick ");
            VAR_1 = VAR_1.concat(VAR_2);
            VAR_1 = VAR_1.concat(" fox ");
            VAR_1 = VAR_1.concat(VAR_2);
            VAR_1 = VAR_1.concat(" over the ");
            VAR_1 = VAR_1.concat(VAR_2);
            VAR_1 = VAR_1.concat(" dog. ");
          }
        })();
    }
};