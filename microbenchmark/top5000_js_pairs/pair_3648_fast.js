const Benchmark = {
    run: function() {
        var VAR_1 =
          "bsdfasdfsadfsadfsdsafdsdfsaglksdjvsappoipoiqweqwe,.mzczxcasdq34235346564vszxccvsdfsferw".repeat(
            100,
          );
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = 0;
          var VAR_6 = VAR_4.length;
          var VAR_7 = 0;
          while (true) {
            VAR_5 = VAR_3.indexOf(VAR_4, VAR_5);
            if (VAR_5 >= 0) {
              VAR_5 += VAR_6;
              VAR_7++;
            } else {
              break;
            }
          }
          return VAR_7;
        }
        FUNCTION_1(VAR_1, "a");
        VAR_1.replace(/a/g, "1");
    }
};