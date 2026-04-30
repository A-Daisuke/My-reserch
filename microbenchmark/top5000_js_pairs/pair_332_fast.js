const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = "";
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_1 = VAR_1.concat("Quick ");
            VAR_1 = VAR_1.concat(VAR_3);
            VAR_1 = VAR_1.concat(" fox ");
            VAR_1 = VAR_1.concat(VAR_3);
            VAR_1 = VAR_1.concat(" over the ");
            VAR_1 = VAR_1.concat(VAR_3);
            VAR_1 = VAR_1.concat(" dog. ");
          }
        })();
    }
};