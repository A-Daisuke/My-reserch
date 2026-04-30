const Benchmark = {
    run: function() {
        (function () {
          var VAR_4 = 0;
          var VAR_5 = [];
          while (VAR_4++ < 5000) {
            var VAR_6 = {
              KEY_1: VAR_4,
              KEY_2: VAR_4,
            };
            VAR_5.push(VAR_6);
          }
          if (VAR_5.length != 5000) throw new Error();
        })();
    }
};