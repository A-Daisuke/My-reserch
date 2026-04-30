const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1.push("Quick ");
            VAR_1.push(VAR_2);
            VAR_1.push(" fox ");
            VAR_1.push(VAR_2);
            VAR_1.push(" over the ");
            VAR_1.push(VAR_2);
            VAR_1.push(" dog. ");
          }
          VAR_1.join("");
        })();
    }
};