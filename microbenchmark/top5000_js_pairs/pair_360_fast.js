const Benchmark = {
    run: function() {
        (function () {
          var VAR_5 = [];
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_5.push("Quick ");
            VAR_5.push(VAR_3);
            VAR_5.push(" fox ");
            VAR_5.push(VAR_3);
            VAR_5.push(" over the ");
            VAR_5.push(VAR_3);
            VAR_5.push(" dog. ");
          }
          VAR_5.join("");
        })();
    }
};