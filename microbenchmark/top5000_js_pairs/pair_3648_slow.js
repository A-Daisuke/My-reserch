const Benchmark = {
    run: function() {
        var VAR_1 =
          "bsdfasdfsadfsadfsdsafdsdfsaglksdjvsappoipoiqweqwe,.mzczxcasdq34235346564vszxccvsdfsferw".repeat(
            100,
          );
        var VAR_2 = 0;
        VAR_1.replace(/a/g, () => {
          VAR_2++;
          return "1";
        });
    }
};