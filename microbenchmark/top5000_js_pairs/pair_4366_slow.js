const Benchmark = {
    run: function() {
        var VAR_1 = (function (VAR_2) {
          var VAR_3 = [];
          while (VAR_2-- > 0) {
            VAR_3.push(VAR_2 * VAR_2 * 0.5);
          }
          return VAR_3;
        })(1000);
        for (var VAR_4 = 0, VAR_5 = null; (VAR_5 = VAR_1[VAR_4]); VAR_4++) {
          VAR_5++;
          VAR_1[(VAR_4 - 999) * -1] += VAR_5;
        }
    }
};