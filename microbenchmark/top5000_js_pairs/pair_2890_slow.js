const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          for (var VAR_3 = 0; VAR_3 < VAR_2.length; VAR_3++) {
            var VAR_4 = VAR_1.match(/%s/i);
            VAR_1 = VAR_1.replace(VAR_1.substr(VAR_4.index, 2), VAR_2[VAR_3]);
          }
          return VAR_1;
        }
        for (var VAR_5 = 0; VAR_5 < 100; VAR_5++) {
          FUNCTION_1("random text %s some more text %s", ["FIRST", "SECOND"]);
        }
    }
};