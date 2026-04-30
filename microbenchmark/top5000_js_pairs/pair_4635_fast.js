const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 123456789;
        var VAR_6, VAR_7;
        VAR_7 = (function () {
          var VAR_8, VAR_9;
          VAR_9 = [];
          for (VAR_6 = VAR_8 = 0; 0 <= VAR_1 ? VAR_8 < VAR_1 : VAR_8 > VAR_1; VAR_6 = 0 <= VAR_1 ? ++VAR_8 : --VAR_8) {
            VAR_9.push(VAR_6 + VAR_2);
          }
          return VAR_9;
        })();
    }
};